import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';

const router = createBrowserRouter([
  {path: "/login", element: <h1>Login Page</h1>},
  {path: "/signup", element: <h1>Signup Page</h1>},
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
