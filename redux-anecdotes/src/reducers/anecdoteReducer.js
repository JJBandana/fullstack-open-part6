import service from '../services/anecdoteService'

const anecdoteReducer = (state = [], action) => {

  switch(action.type){
    case 'VOTE':
      const id = action.data.id
      const itemToVote = state.find(n => n.id === id)
      const votedItem = {
        ...itemToVote, votes: itemToVote.votes + 1
      }
      return state.map(n => n.id !== id ? n : votedItem)

    case 'NEW_ITEM':
      return [...state, action.data]

    case 'INIT':
      return action.data

    default:
        return state;
  }
}

export const voted = anecdote => {
  return async dispatch => {
    const data = await service.vote(anecdote)
    dispatch({
      type: 'VOTE',
      data
    })
  }
}


export const createItem = content => {
  return async dispatch => {
    const data = await service.createNew(content)
    dispatch({
      type: 'NEW_ITEM',
      data
    })
  }
}

export const initialAnecdotes = () => {
  return async dispatch => {
    const data = await service.getAll()
    dispatch({
      type: 'INIT',
      data
    })
  }
}

export default anecdoteReducer