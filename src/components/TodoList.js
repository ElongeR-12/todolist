import React from 'react'
import Todo from './Todo'

function TodoList({todos}) {
    
  return(
      <>
        <h1>Todo List</h1>
        { 
            todos && todos.map((todo)=>(<Todo todo={todo}/>))
        }
      </>
  )
  
}

export default TodoList