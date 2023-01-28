const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.data.message
    case 'CLEAR':
      return ''
    default:
      return state
  }
}

export const showNoti = (message) => {
  return {
    type: 'SHOW',
    data: { message }
  }
}

export const clearNoti = () => {
  return {
    type: 'CLEAR'
  }
}

export const notify = (message, timer = 3) => {
  return dispatch => {
    dispatch(showNoti(message))
    setTimeout(() => {
      dispatch(clearNoti())
    }, timer * 1000)
  }
}

export default notificationReducer