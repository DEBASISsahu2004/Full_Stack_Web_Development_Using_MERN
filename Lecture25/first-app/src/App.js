import ToDoScreen from "./screens/ToDoScreen";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
 
const router = createBrowserRouter([
    {
        path: "/",
        element: <ToDoScreen/>
    },
    {
        path: "/ass-task",
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