import { useState } from "react";

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, user_id: userId }),
    });
    onTaskAdded();
    setTitle("");
    setUserId("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
