require("./appMongoose");
const express = require("express");
const app = express();

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

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

