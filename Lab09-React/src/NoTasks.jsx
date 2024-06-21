import "./App.css";

function NoTasks({ tasks, hideCompleted }) {
  return (
    <>
      {tasks.filter((t) => !t.completed).length === 0 ? (
        <p>Nothing to do</p>
      ) : null}
    </>
  );
}

export default NoTasks;
