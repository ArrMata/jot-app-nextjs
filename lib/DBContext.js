import mongoose from "mongoose"
import { TodoSchema } from "./models/Todo";

class DbContext {
	Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
}

export const dbContext = new DbContext();