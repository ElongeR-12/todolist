import React from 'react'

const Todo = ({todo, setTodos, todos}) => {
    const toggleCheckbox = (id) =>{
        const newTodos = [...todos];
        const todo = newTodos.filter((item)=>item.id===id)
        todo[0].state = !todo.state;
        const remainTodo = newTodos.filter((item)=>item.id !== id);
        const todoFinal = [...remainTodo, ...todo]
        setTodos([...todoFinal]);
      }
  return (
    <div>
        <p>
          <input
            type="checkbox"
            defaultChecked={todo?.state}
            onClick={()=>toggleCheckbox(todo.id)}
          />
         <span>{todo?.title}</span>
        </p>
    </div>
  )
}

export default Todo