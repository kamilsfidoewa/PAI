import "./App.css";

function Filter({ hideCompleted, setHideCompleted }) {
  const handleChangeHideCompleted = () => setHideCompleted(!hideCompleted);

  return (
    <p>
      <label>
        <input
          type="checkbox"
          name="hideCompleted"
          id="hideCompleted"
          checked={hideCompleted}
          onChange={handleChangeHideCompleted}
        />
        Hide completed
      </label>
    </p>
  );
}

export default Filter;
