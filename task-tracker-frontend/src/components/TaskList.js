function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {t.title} (User: {t.user_id})
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
