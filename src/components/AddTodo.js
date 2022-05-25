import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
const AddTodo = ({todos, setTodos}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const addTodo = () => setTodos([{ id: uuidv4(), description: description ? description:"", title: title, state: false}, ...todos]);
    const handleSubmit =(e)=>{
        e.preventDefault();
        title && addTodo();
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