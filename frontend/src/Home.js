/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import axios from "axios";


function Home() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
  })

  const handleEdit = (id) => {
    axios.put('http://localhost:4000/update/'+id)
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    axios.delete('http://localhost:4000/delete/'+id)
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  const handleUndo = (id) => {
    axios.put('http://localhost:4000/undodone/'+id)
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <CreateTodo />
      <div className="todo-list">
        {
          todos.length === 0 ? (<div>No Todo Yet</div>) :
            todos.map((todo) => (
              <div className="todo-task">
                <input type="checkbox" onClick={() => handleEdit(todo._id)} >
                </input>
                <p className={todo.done ? 'line-through' : `underline`}>{todo.task}</p>
                <button type="button" onClick={ () => handleDelete(todo._id)}>Delete</button>
                <button type="button" onClick={ () => handleUndo(todo._id)}>Undo</button>
              </div>
            ))
        }
      </div>

    </div>
  );
}

export default Home;
