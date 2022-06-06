import React, {useState} from 'react';
const AddTodo = ({setTodos}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const addTodo = async (todo) => {
        const res = await fetch('http://localhost:5000/todos', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(todo),
        })
        const data = await res.json()
        setTodos((state)=>[data, ...state])
      }
    const handleSubmit =(e)=>{
        e.preventDefault();
        title && addTodo({description: description, title: title, state: false});
        setTitle("");
        setDescription("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={title}
            placeholder="Enter a title..."
            onChange={e => setTitle(e.target.value)}
            required
        />
        <input
            type="text"
            value={description}
            placeholder="Enter a description..."
            onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">add todo</button>
    </form>
  )
}

export default AddTodo