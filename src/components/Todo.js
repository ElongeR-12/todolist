import React from 'react'
import { Link } from 'react-router-dom'
const Todo = ({todo, setTodos}) => {
    const fetchTodo = async (id) => {
      const res = await fetch(`http://localhost:5000/todos/${id}`)
      const data = await res.json()
      return data
    }
    const toggleCheckbox = async (id) => {
      const todoToggle = await fetchTodo(id)
      const updTodo = { ...todoToggle, state: !todoToggle.state }
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTodo),
      })
      const data = await res.json()
      setTodos((state)=>{
        const remainTodo = state.filter((item)=>item.id !== data.id);
        return [...remainTodo, data]
      })
    }
  return (
    <div>
        <p>
          <input
            type="checkbox"
            checked={todo?.state}
            onChange={()=>toggleCheckbox(todo?.id)}
          />
        <span>{todo?.title}</span>
        <Link to={`/todolist/todo/${todo?.id}`}>details</Link>
        </p>
    </div>
  )
}

export default Todo