
import './App.css';
import React from 'react'
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TodoDetails from './components/TodoDetails';
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
      <Router>
        <Routes>
          <Route exact path="/" element={<TodoList todos={todos} setTodos={setTodos}/>}/>
          <Route path="/todo/:id" element={<TodoDetails todos={todos}/>}/>
        </Routes>
      </Router>
    </div>
    )
}

export default App
 
