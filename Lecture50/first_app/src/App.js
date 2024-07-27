import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TaskProvider} from "./context/TaskContext";
import LoginScreen from "./screens/LoginScreen";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginScreen/>,
  },
  // {
  //   path:"/add-task",
  //   element: <AddTask/>,
  // },
]);

const App = () => {
  return (
  <TaskProvider>
    <RouterProvider router={router} />
  </TaskProvider>
  );
};

export default App;