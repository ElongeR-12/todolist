import React from 'react'
import { useParams, Link} from 'react-router-dom'
const TodoDetails = ({todos}) => {
    const {id} = useParams()
    const todo = todos.filter((todo)=> todo.id === id)
  return (
    <div>
        <h1>Todo Details</h1>
            <div>
            <h3>Title : {todo[0].title}</h3>
            <h5>description : {todo[0].description}</h5>
        </div>
        <Link to="/">Back</Link>
    </div>
  )
}

export default TodoDetails