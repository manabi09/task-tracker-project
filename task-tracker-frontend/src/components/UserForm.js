import { useState } from "react";

function UserForm({ onUserAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    onUserAdded();
    setName("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
