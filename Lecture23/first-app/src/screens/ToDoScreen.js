// import { Component } from "react";
import { useState } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";

const ToDoScreen = () => {
    const [taskList, setTaskList] = useState([]);

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
                                    title: "Go to gym",
                                    description:
                                        "Going to gym is good for muscle growth.",
                                    createdDate: new Date(),
                                },
                            ]);
                        }}
                        className="ui secondary button"
                    >
                        Add Task
                    </button>

                    <section>
                        <div class="ui cards">
                            {taskList.map((task, index) => (
                                <Task task={task} key={index} />
                            ))}
                        </div>
                    </section>
                </div>

                <AddTask />
            </div>
        </>
    );
};

export default ToDoScreen;