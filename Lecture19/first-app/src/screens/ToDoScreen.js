import { Component } from "react";

class ToDoScreen extends Component{

    state={
        taskCount: 0,
    };
    // taskCount = 0;
    render(){
        return (
            <div className="screen">
                <h1 className="ui heading center">To Do List</h1>
                <div>
                    <button onClick={(e)=>{
                        this.setState({...this.state, taskCount: this.state.taskCount + 1,});
                        // this.taskCount++;
                        console.log(this.state.taskCount);
                        console.log("Add task button was clicked.");
                    }} className="ui secondary button">Add Task</button>

                    <p>The number of task are: {this.state.taskCount}</p>
                </div>
            </div>
        );
    }
}

// Whenever we have a variabble which changes dynamically and can cause to change the content of the page the variable is is stored in state variable

export default ToDoScreen;