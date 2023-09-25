"use server";

import { dbConnection } from "../DBConfig";
import { dbContext } from "../DBContext";

export async function getTodos() {
	await dbConnection.connect();
	const todos = await dbContext.Todo.find();
	return todos;
}