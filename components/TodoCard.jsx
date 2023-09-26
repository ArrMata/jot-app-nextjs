function TodoCard({ todo }) {
	return (
		<div className="w-full flex items-end mt-2 cursor-pointer hover:bg-slate-600 py-1 px-2 rounded-lg">
			<div className="h-7 aspect-square rounded-full me-2" style={{ backgroundColor: todo.color ? todo.color : "#ffffff" }} />
			<p className="text-2xl text-white">
				{todo.task}
			</p>
		</div>
	)
}
export default TodoCard