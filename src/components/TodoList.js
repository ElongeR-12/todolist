import React from 'react'
import Todo from './Todo'

function TodoList({todos, setTodos}) {
    
  return(
      <>
        <h1>Todo List</h1>
        { 
            todos && todos.map((todo)=>(<Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>))
        }
      </>
  )
  
}

export default TodoList