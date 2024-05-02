/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import axios from 'axios'
const CreateTodo = () => {
    const [task, setTask] = useState("")
    const handleAdd = (e) => {
        axios.post('http://localhost:4000/add', {task: task})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        setTask("")
    }
    return (
        <div className='create-todo'>
            <input className='todo-text' type='text' placeholder='Create new todo' onChange={(e) => setTask(e.target.value)}></input>
            <button className='todo-button' onClick={handleAdd} type='button'>Add</button>
        </div>
    );
}

export default CreateTodo;