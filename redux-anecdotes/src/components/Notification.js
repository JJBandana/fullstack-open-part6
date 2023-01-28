import { render } from '@testing-library/react'
import { useSelector } from 'react-redux'

const Noti = ({elem}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return(
    <div style={style}>
      <h1>{`you voted '${elem}'`}</h1>
    </div>
  )
}

const Notification = () => {
  const notification = useSelector(state => state.notification)

  if (notification) {
      return <Noti elem={notification} />
  }
}

export default Notification