import React from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo';

function TodoList({todos, setTodos}) {
    
  return(
      <>
        <h1>Todo List</h1>
        <AddTodo setTodos={setTodos}/>
        { 
            todos && todos.map((todo)=>(<Todo key={todo.id} todo={todo} setTodos={setTodos}/>))
        }
      </>
  )
  
}

export default TodoList