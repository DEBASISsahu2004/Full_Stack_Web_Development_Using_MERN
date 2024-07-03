import ToDoScreen from "./screens/ToDoScreen";
import AddTask from "./components/AddTask";
import {useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
 
const router = createBrowserRouter([
    {
        path: "/",
        element: <ToDoScreen/>
    },
    {
        path: "/add-task",
        element: <AddTask />
    },
]);

// const App = function(){
//     return (
//         <ToDoScreen/>
//     );
// }

const App = ()=>{
    const [tasks, setTasks] = useState([]);
    return <RouterProvider router = {router} />
};

export default App;