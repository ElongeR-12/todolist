
import './App.css';
import React from 'react'
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TodoDetails from './components/TodoDetails';
function App() {

 const [todos,setTodos]= React.useState( [
        {
          id:"f7be86e6-8a0e-4e87-8148-d0dc46942402",
          state:false,
          description:"Lorem ipsum dolor sit amet",
          title:"title one"
        },
        {
          id:"ecacd019-541f-4e66-a956-772e5a523b96",
          state:false,
          description:"Lorem ipsum dolo",
          title:"title two"
        },
        {
          id:"83e136fa-e386-405a-9b76-8f52bdc8a18a",
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
          <Route exact path="/todolist" element={<TodoList todos={todos} setTodos={setTodos}/>}/>
          <Route path="/todolist/todo/:id" element={<TodoDetails todos={todos}/>}/>
        </Routes>
      </Router>
    </div>
    )
}

export default App
 
