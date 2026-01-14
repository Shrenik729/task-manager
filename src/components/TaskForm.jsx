function TaskForm({ task, setTask, addTask }) {
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TaskForm;
