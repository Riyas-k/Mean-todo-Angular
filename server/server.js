import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/todo-list", {
    useNewUrlParser: true,
    //   useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  });

const todoSchema = new mongoose.Schema({
  task: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

app.get("/api/todos", async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

app.post("/api/todos", async (req, res) => {
  const { task, completed } = req.body;
  const todo = new Todo({ task, completed });
  await todo.save();
  res.status(201).json(todo);
});
app.delete("/api/todos", async (req, res) => {
  console.log('hihi');
  console.log(req.params, 'hio');
  // Handle deletion logic here
});

app.listen(3000, () => {
  console.log("Server is started ");
});
