
import './App.css';
import React from 'react'
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TodoDetails from './components/TodoDetails';
function App() {
 const [todos,setTodos]= React.useState( [
        {
          id: 1,
          state:false,
          description:"Lorem ipsum dolor sit amet",
          title:"title one"
        },
        {
          id: 2,
          state:false,
          description:"Lorem ipsum dolo",
          title:"title two"
        },
        {
          id: 3,
          state:false,
          description:"Lorem ipsum",
          title:"title three"
        }
      ]
 )
 
 React.useEffect(() => {
  const getTasks = async () => {
    const todosFromServer = await fetchTodos()
    setTodos(todosFromServer)
  }
  getTasks()
}, [])
 const fetchTodos = async () => {
  const res = await fetch('http://localhost:5000/todos')
  const data = await res.json()
  return data
}
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
 
