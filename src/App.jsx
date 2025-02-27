import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  // Setting todo list state. 
  // Making it an array so we can store mulitple todo's
  const [todo, setTodo] = useState([]);

  // Setting a separate state for "new" todos that are added
  // Setting this to a string since we will only be adding one at a time
  const [newTodo, setNewTodo] = useState('');

  // Function to add Todo to the todo array
  function handleAddTodo() {
    // Checking to see if the newTodo is at least 1 character to allow it to submit
    if(newTodo.trim().length > 0) {
      // Adding the new todo to the existing todo list, hence the spread of ...todo
      // Also assigning a unique id using uuidv4
      setTodo([...todo, { id: uuidv4(), task: newTodo }]);
      
      // Setting the input back to an empty string
      setNewTodo('');
    }
  }

  // Function to grab the value entered into the input and set it to the state value newTodo
  function handleTodoUpdate(event) {
    // event.target.value grabs whatever has been entered into the input
    setNewTodo(event.target.value);
  }

  // Function to handle deleting a todo from the list of todo's
  function handleTodoDelete(id) {
    // Using .filter() to go through each todo
    // Then it sets the todo array to only have todos that dont match the id of the deleted todo 
    setTodo(todo.filter(
      (todo) => todo.id !== id
    ));
  }

  // Function to make it so when the user clicks 'enter' it adds the todo
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  }

  return (
    <>
      <header>
        <h1>Todo List Application</h1>
      </header>
      <div className='todo-input'>
        <input onChange={handleTodoUpdate} onKeyDown={handleKeyDown} value={newTodo} type="text" />
        <button onClick={handleAddTodo}>Add Task</button>
      </div>
      <div className='todo-list'>
        <h3>List of Todo's</h3>
        <ol>
          {todo.map((todo) => {
            return <li key={todo.id}>
              <span class="todo-txt">{todo.task}</span>
              <button className='delete' onClick={() => handleTodoDelete(todo.id)}>Completed</button>
            </li>
          })}
        </ol>
      </div>
    </>
  )
}
