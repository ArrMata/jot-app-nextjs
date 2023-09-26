"use server";

import { revalidatePath } from "next/cache";
import { dbConnection } from "../DBConfig";
import { dbContext } from "../DBContext";

export async function getTodos() {
	try {
		await dbConnection.connect();
		const todos = await dbContext.Todo.find();
		return todos;
	} catch (error) {
		throw new Error(`Unable to get Todos: ${error.message}`)
	}
}

export async function createTodo(todoData) {
	try {
		await dbConnection.connect();
		await dbContext.Todo.create(todoData);
		revalidatePath('/')
	} catch (error) {
		throw new Error(`Unable to create Todo: ${error.message}`);
	}
}