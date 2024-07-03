import ToDoScreen from "./screens/ToDoScreen";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AddTask from "./components/AddTask";
// import {useContext} from "react";
import {TaskProvider} from "./context/TaskContext";
// import TaskContext from "./context/TaskContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ToDoScreen/>
    },
    {
        path: "/add-task",
        element: <AddTask/>
    },
]);

const App = ()=>{

    // const {taskList, addNewTask} = useContext(TaskContext);

    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <ToDoScreen taskList={taskList}/>
    //     },
    //     {
    //         path: "/add-task",
    //         element: <AddTask onSubmit={addNewTask}/>
    //     },
    // ]);

    return (
        <TaskProvider>
            <RouterProvider router = {router} />
        </TaskProvider>);
};

export default App;