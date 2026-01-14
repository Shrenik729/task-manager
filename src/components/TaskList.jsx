import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
