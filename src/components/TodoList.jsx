export default function TodoList({todo, handleDelete}) {
  return (
    <div className='todo-list'>
      <h3>List of Todo's</h3>
      <ol>
        {todo.map((todo) => {
          return <li key={todo.id}>
            <span className="todo-txt">{todo.task}</span>
            <button className='delete' onClick={() => handleDelete(todo.id)}>Completed</button>
          </li>
        })}
      </ol>
    </div>  
  );
}