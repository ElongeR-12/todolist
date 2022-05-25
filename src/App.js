
import './App.css';
import React from 'react'
import TodoList from './components/TodoList';
function App() {

 const [todos,setTodos]= React.useState( [
        {
          id:"fdsqfdkslqfdsq",
          state:false,
          description:"Lorem ipsum dolor sit amet",
          title:"title one"
        },
        {
          id:"fdqfdqslk",
          state:false,
          description:"Lorem ipsum dolo",
          title:"title two"
        },
        {
          id:"dfsqfdsqfdq",
          state:false,
          description:"Lorem ipsum",
          title:"title three"
        }
      ]
 )
    return (
      <div className="App">
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
    )
}

export default App
 
