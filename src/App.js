
import './App.css';
import React, { Component } from 'react'
import TodoList from './components/TodoList';
export class App extends Component {
  state = {
    todos : [
      {
        id:Math.random().toString,
        state:false,
        description:"Lorem ipsum dolor sit amet",
        title:"title one"
      },
      {
        id:Math.random().toString,
        state:false,
        description:"Lorem ipsum dolo",
        title:"title two"
      },
      {
        id:Math.random().toString,
        state:false,
        description:"Lorem ipsum",
        title:"title three"
      }
    ]
  }

  render() {
    return (
      <div className="App">
      <TodoList todos={this.state.todos}/>
    </div>
    )
  }
}

export default App
 
