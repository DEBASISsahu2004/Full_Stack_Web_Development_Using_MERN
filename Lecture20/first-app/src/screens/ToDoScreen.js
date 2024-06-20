import { useState } from "react";
import Task from "../components/Task.js"

const ToDoScreen = function(){

    // const [taskCount, setTaskCount] = useState(0);
    const [taskList, setTaskList] = useState([]);
    return (
        <div className="screen">
            <h1 className="ui heading center">To Do List</h1>
            <div>
                <button onClick={(e)=>{
                    setTaskList([...taskList, {
                        title: "Go To Gym",
                        description: "Going to gym is good for muscle growth."
                    }])
                }} className="ui secondary button">Add Task</button>

                {/* <p>The number of task are: {taskList.length}</p> */}

                {taskList.map((task) => (
                    <Task/>
                ))}
            </div>
        </div>
    );
}

export default ToDoScreen;