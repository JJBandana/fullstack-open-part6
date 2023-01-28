import { useDispatch, useSelector } from "react-redux";
import { voted } from "../reducers/anecdoteReducer";
import { notify } from "../reducers/notificationReducer";

const Anecdote = ({ item, handleClick }) => {
  return(
    <div>
      {item.content}
      <div>
        has {item.votes}
      <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    if (!state.filter) return state.anecdotes

    return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
  })

  const vote = id => {
    const votedAnecdote = anecdotes.find(n => n.id === id)
    dispatch(voted(votedAnecdote))
  }

  return(
    <div>
      {anecdotes.sort((a,b) => b.votes - a.votes).map(elem =>
        <Anecdote
          key={elem.id}
          item={elem}
          handleClick={() => {
            vote(elem.id)
            dispatch(notify(elem.content))
          }}
        />
        )}
    </div>
  )
}

export default AnecdoteList