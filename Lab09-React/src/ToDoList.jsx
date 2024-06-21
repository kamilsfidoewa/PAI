import "./App.css";

function ToDoList({ tasks, setTasks, hideCompleted }) {
  const handleChangeCompleted = (index) => {
    const updatedTasks = tasks.map((t, i) => {
      if (index === i) {
        return { ...t, completed: !t.completed };
      } else {
        return t;
      }
    });

    setTasks(updatedTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={`task-${index}`}
          className={
            task.completed
              ? hideCompleted
                ? "hideCompleted"
                : "lineThroughCompleted"
              : ""
          }
        >
          <input
            type="checkbox"
            name={`taskcheckbox-${index}`}
            id={`taskcheckbox-${index}`}
            checked={task.completed}
            onChange={() => handleChangeCompleted(index)}
          />
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
