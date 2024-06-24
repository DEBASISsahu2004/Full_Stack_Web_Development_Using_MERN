import {useState} from "react";

const AddTask = () =>{
    const [task, setTask] = useState({
        title: "",
        description:"",
    });

    

    let handleInputChange = (e)=>{
        // console.log(e.target.value);
        // console.log(e.target.name);

        setTask({
            ...task, [e.target.name]: e.target.value,
        })
    }

    let onFormSubmit = (e)=>{
        e.preventDefault();
        console.log(task);
    }

    return (
        <>
            <h3 className="ui heading center">Add New Task</h3>
            <div className="ui form">
                <form onSubmit={onFormSubmit}>
                    <div class="field">
                        <label>Title</label>
                        <input type="text" placeholder="Task Title" name="title" onChange={handleInputChange}/>
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <textarea rows="2" placeholder="Task description" name="description" onChange={handleInputChange}/>
                    </div>
                    <button type="submit" class="ui primary button">Submit</button>
                </form>
            </div>
        </>
    );
};

export default AddTask;