import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // all | completed | pending

  // Add task
  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);

    setTask("");
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Toggle completed
  const toggleTask = (index) => {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  // Derived filtered tasks
  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div>
      <h1>Task Manager</h1>

      <TaskForm task={task} setTask={setTask} addTask={addTask} />

      {/* Filter Buttons */}
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
