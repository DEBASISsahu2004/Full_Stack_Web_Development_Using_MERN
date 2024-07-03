import {createContext} from "react";
import {useState} from "react";

const TaskContext = createContext();

const TaskProvider = ({children})=>{
    const [taskList, setTaskList] = useState([]);

    const addNewTask = (task)=>{
        setTaskList([...taskList, {...task, createdDate: new Date()}]);
    };

    return (
        <TaskContext.Provider value={{taskList, addNewTask}}>{children}</TaskContext.Provider>
    );
}

export {TaskProvider};
export default TaskContext;