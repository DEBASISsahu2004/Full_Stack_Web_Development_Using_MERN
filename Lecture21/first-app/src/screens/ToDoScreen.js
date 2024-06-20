import { useState } from "react";
import Task from "../components/Task.js"

const ToDoScreen = function(){
    const [taskList, setTaskList] = useState([]);
    return (
        <div className="screen">
            <h1 className="ui heading center">To Do List</h1>
            <div>
                <button onClick={(e)=>{
                    setTaskList([...taskList, {
                        title: "Go To Gym",
                        description: "Going to gym is good for muscle growth.",
                        createdDate: new Date(),
                    }])
                }} className="ui secondary button">Add Task</button>

                <section>
                    <div className="ui cards">
                        {taskList.map((task) => (
                            <Task task={task}/>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ToDoScreen;