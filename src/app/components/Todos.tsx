'use client';
import React from 'react';
import { useTodos } from '../store/todos';
import { useSearchParams } from 'next/navigation';

function Todos() {
	const { todos, toggleTodoAsCompleted, handleTodoDelete } = useTodos();

	const searchParams = useSearchParams();
	const todosFilter = searchParams.get('todos');

	let filterTodos = todos;
	console.log(filterTodos);

	if (todosFilter === 'active') {
		filterTodos = filterTodos.filter((todo) => !todo.completed);
	} else if (todosFilter === 'completed') {
		filterTodos = filterTodos.filter((todo) => todo.completed);
	}

	return (
		<ul>
			{filterTodos.map((todo) => {
				return (
					<li
						key={todo.id}
						className="flex items-center justify-center"
					>
						<input
							type="checkbox"
							id={`todo-${todo.id}`}
							checked={todo.completed}
							onChange={() => {
								toggleTodoAsCompleted(todo.id);
							}}
						/>
						<label htmlFor={`todo-${todo.id}`} className="mr-auto">
							{todo.task}
						</label>
						{todo.completed && (
							<button
								type="button"
								onClick={() => {
									handleTodoDelete(todo.id);
								}}
							>
								Delete
							</button>
						)}
					</li>
				);
			})}
		</ul>
	);
}

export default Todos;
