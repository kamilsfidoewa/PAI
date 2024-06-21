import "./App.css";

function NewTask({ inputValue, setInputValue, tasks, setTasks }) {
  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddButtonChange = (e) => {
    if (inputValue) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  return (
    <>
      <input
        type="text"
        name="todo-text"
        id="todo-text"
        value={inputValue}
        onChange={handleInputValueChange}
      />
      <button onClick={handleAddButtonChange}>Add</button>
    </>
  );
}

export default NewTask;
