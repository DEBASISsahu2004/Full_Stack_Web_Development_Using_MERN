const AddTask = () =>{
    // return <p>This is add task</p>

    return (
        <>
            <h3 className="">Add New Task</h3>
            <div className="ui form">
                <form>
                    <div class="field">
                        <label>Title</label>
                        <input type="text" placeholder="Task Title" name="title"/>
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <textarea rows="2" placeholder="Task description" name="description" />
                    </div>
                    <button class="ui primary button">Submit</button>
                </form>
            </div>
        </>
    );
};

export default AddTask;