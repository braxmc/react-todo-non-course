export default function TodoInput({handleUpdate, handleKey, value, handleAdd}) {
  return (
    <div className='todo-input'>
      <input onChange={handleUpdate} onKeyDown={handleKey} value={value} type="text" />
      <button onClick={handleAdd}>Add Task</button>
    </div>   
  );
}