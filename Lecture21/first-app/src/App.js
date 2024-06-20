// import { Component } from "react";
import ToDoScreen from "./screens/ToDoScreen";

// class App extends Component{
//     render(){
//         return (
//             // <h1>Welcome to ToDo List App</h1>

//             <ToDoScreen />

//         );
//     }
// }

// converted classsed based component to function based component

const App = function(){
    return (
        <ToDoScreen/>
    );
}

export default App;