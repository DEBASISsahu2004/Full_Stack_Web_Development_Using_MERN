import React from "react";
import { useState } from "react";

const AddTask = ({ onSubmit, validator }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);

    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  let onFormSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    validator(task);
    // addNewTask(task);
    // setTask({});
    // navigate("/");
    // onSubmit(task);
  };

  return (
    <section className="screen">
      <h3 className="ui heading center">Add New Task</h3>

      <div className="ui form">
        <form onSubmit={onFormSubmit}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              placeholder="Task Title"
              name="title"
              onChange={handleInputChange}
              value={task.title}
            ></input>
          </div>
          <div className="field">
            <label>Description</label>
            <textarea
              rows="2"
              placeholder="Task Description"
              name="description"
              onChange={handleInputChange}
              value={task.description}
            ></textarea>
          </div>
          <button type="submit" className="ui primary button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTask;