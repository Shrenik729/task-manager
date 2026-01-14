function TaskItem({ task, index, deleteTask, toggleTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}
      />

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
}

export default TaskItem;
