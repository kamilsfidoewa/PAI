import { useState } from "react";
import "./App.css";
import Filter from "./Filter";
import NewTask from "./NewTask";
import NoTasks from "./NoTasks";
import ToDoList from "./ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [hideCompleted, setHideCompleted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <h1>My ToDo</h1>
      <div className="card">
        <Filter
          hideCompleted={hideCompleted}
          setHideCompleted={setHideCompleted}
        />
        <NewTask
          inputValue={inputValue}
          setInputValue={setInputValue}
          tasks={tasks}
          setTasks={setTasks}
        />
        <ToDoList
          tasks={tasks}
          setTasks={setTasks}
          hideCompleted={hideCompleted}
        />
        <NoTasks tasks={tasks} hideCompleted={hideCompleted} />
      </div>
    </>
  );
}

export default App;
