import { useEffect, useState } from "react";
import { fetchTasks } from "./api";
import UserForm from "./components/UserForm";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const data = await fetchTasks();
    setTasks(data);
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Task Tracker</h1>
      <UserForm onUserAdded={() => {}} />
      <TaskForm onTaskAdded={loadTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}
