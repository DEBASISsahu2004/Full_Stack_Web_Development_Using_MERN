import { useState } from "react";
import Task from "../components/Task.js";
import AddTask from "../components/AddTask.js";
import { getTasksForCurrentUser } from "../apis/task-api.js";

const ToDoScreen = function () {
  const [taskList, setTaskList] = useState([]);

  const fetchTasks = async () => {
    const tasks = await getTasksForCurrentUser();
    setTaskList([...tasks]);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  let addNewTask = (task) => {
    setTaskList([...taskList, { ...task, createdDate: new Date() }]);
  };

  return (
    <>
      <div className="screen">
        <h1 className="ui heading center">To Do List</h1>
        <div>
          <button
            onClick={(e) => {
              setTaskList([
                ...taskList,
                {
                  title: "Go To Gym",
                  description: "Going to gym is good for muscle growth.",
                  createdDate: new Date(),
                },
              ]);
            }}
            className="ui secondary button"
          >
            Add Task
          </button>

          <section>
            <div className="ui cards">
              {taskList.map((task, index) => (
                <Task task={task} key={index} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <AddTask
        onSubmit={addNewTask}
        validator={({ title, description }) => {
          if (title?.length && !title.includes("\n") && description?.length) {
            console.log("valid");
            return true;
          }
          console.log("Invalid");
          return false;
        }}
      />
    </>
  );
};

export default ToDoScreen;