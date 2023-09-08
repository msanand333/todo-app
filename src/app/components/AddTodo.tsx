'use client';
import React, { FormEvent } from 'react';
import { useTodos } from '../store/todos';

function AddTodo() {
	const [todo, setTodo] = React.useState('');
	const { handleAddTodo } = useTodos();
	const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		handleAddTodo(todo);
		setTodo('');
	};
	return (
		<form
			className="mb-4 flex w-full justify-center"
			onSubmit={handleFormSubmit}
		>
			<input
				type="text"
				placeholder="Enter here..."
				id=""
				className="mr-2 w-3/5 px-2 py-1 text-gray-900"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button
				className="rounded-md bg-white px-2 py-1 text-gray-800"
				type="submit"
			>
				Add
			</button>
		</form>
	);
}

export default AddTodo;
