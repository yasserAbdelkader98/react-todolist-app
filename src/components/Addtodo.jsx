import { useState } from "react";

function Add(props) {
  const [newTask, setNewTask] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setNewTask({
      name: e.target.value,
    });
  };

  return (
    <>
      <div className="container d-flex flex-column w-50 bg-dark text-light my-3">
        <h2 className="m-3">To-Do App!</h2>
        <h5 className="mx-3">Add new To-Do item</h5>
        <input
          value={newTask.name}
          onChange={handleChange}
          className="my-3"
          type="text"
        />
        <button
          onClick={() => {
            props.AddTask(newTask.name);
          }}
          className="btn btn-primary w-25 mb-3"
        >
          Add
        </button>
      </div>
    </>
  );
}

export default Add;
