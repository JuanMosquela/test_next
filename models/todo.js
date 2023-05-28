import { Schema, model, models } from "mongoose";

const TodoSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = models.Todo || model("Todo", TodoSchema);
export default Todo;
