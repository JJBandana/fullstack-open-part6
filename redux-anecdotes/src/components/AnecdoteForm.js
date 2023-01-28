import { createItem } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addItem = async (event) => {
    event.preventDefault()
    const content = event.target.acnedote.value
    event.target.acnedote.value = ''
    dispatch(createItem(content))
  }

  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={addItem}>
        <input name="acnedote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm