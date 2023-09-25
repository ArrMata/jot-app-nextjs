import { Schema } from "mongoose";

export const TodoSchema = new Schema({
	completed: { type: Boolean, default: false },
	task: { type: String, required: true, min: 3, max: 100 }
},
	{
		timestamps: true, toJSON: { virtuals: true }
	});
