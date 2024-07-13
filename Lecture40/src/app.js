require("./appMongoose");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req, res)=>{
    res.send("This is some response from your first express ");
});

app.get("/add", (req, res)=>{
    let {a:firstNumber, b:secondNumber} = req.query;
    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    res.send({sum});
});

app.post("/add-task", async (req, res)=>{
    const task = new Task({
        title: "Test Task",
        description: "This is a test task",
    });
    await task.save();
    return res.status(201).send({message:"Saved!"});
});

app.get("/get-tasks", async (req,res)=>{
    const taskList = await Task.find();
    return res.status(200).send({taskList});
});

app.put("/update-task/:taskId", async (req, res)=>{
    const {taskId} = req.params;
    const updateResult = await Task.updateOne({_id: taskId},{$set: {...req.body}});
    if(!updateResult.matchedCount){
        return res.send({message: `Task with ID: ${taskId} was not found.`});
    }
    return res.status(200).send({message: "Update Success"});
});

app.delete("delete-task/:taskId", async (req, res)=>{
    const {taskId} = req.params;
    const deleteResult = await Task.deleteOne({_id: taskId},{$set: {...req.body}});
    if(!deleteResult.deletedCount){
        return res.send({message: `Task with ID: ${taskId} was not found.`});
    }
    return res.status(200).send({message: "Update Success"});
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

