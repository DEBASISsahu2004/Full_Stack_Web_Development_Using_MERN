require("./appMongoose");
const express = require("express");
const app = express();
const userRouter = require("./routes/user-routes");
const authMiddleware = require("./middleware/auth-middleware");

app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("This is some response from your first express ");
});

app.get("/add", (req, res) => {
  let { a: first, b: second } = req.query;
  let sum = parseInt(first) + parseInt(second);
  res.send({ sum });
});

app.post("/add-task", async (req, res) => {
  const task = new Task({ title: "Test Taks", description: "Test Task Desc" });
  await task.save();
  return res.status(201).send({ message: "Saved" });
});

app.get("/get-task", authMiddleware, async (req, res) => {
  const listTask = await Task.find({});
  return res.status(201).send(listTask);
});

app.put("/update-task/:taskID", async (req, res) => {
  const { taskID } = req.params;
  const updateResult = await Task.updateOne(
    { _id: taskID },
    { $set: { ...req.body } }
  );
  if (!updateResult.matchedCount) {
    return res
      .status(404)
      .send({ message: `Task with id ${taskID} was not found` });
  }
  return res.status(201).send({ message: "Updated" });
});

app.delete("/delete-task/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const deleteTask = await Task.deleteOne({ _id: taskId });
  if (!deleteTask.deletedCount) {
    return res
      .status(404)
      .send({ message: `Task with id ${taskId} was not found` });
  }
  return res.status(201).send({ message: "Task Deleted" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
