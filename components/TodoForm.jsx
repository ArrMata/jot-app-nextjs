"use client";

import { createTodo } from "@/lib/actions/todos.actions";
import Image from "next/image"
import { useForm } from "react-hook-form"

function TodoForm() {

	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			task: "",
			color: '#ffffff',
		}
	});

	const onSubmit = async (todoData) => {
		await createTodo(todoData);
		reset();
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mt-auto flex items-end">
			<input type="color" className="h-11 aspect-square rounded cursor-pointer mb-px" {...register("color")} />
			<div className="form-control w-full max-w-xs mx-2">
				<label className="label">
					<span className="label-text">Task</span>
				</label>
				<input type="text" placeholder="Task..." className="input input-bordered w-full max-w-xs" {...register("task")} />
			</div>
			<button className="aspect-square mb-px h-11 relative bg-green-700 hover:bg-green-500 transition-colors rounded-md">
				<Image src="/icons/plus.png" className="invert" fill={true} alt="Add Image"></Image>
			</button>
		</form>
	)
}
export default TodoForm