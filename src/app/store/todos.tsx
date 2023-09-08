'use client';
import React from 'react';

type Todo = {
	id: string;
	task: string;
	completed: boolean;
	createdAt: Date;
};
export type TodosContext = {
	todos: Todo[];
	handleAddTodo: (task: string) => void;
	toggleTodoAsCompleted: (id: string) => void;
	handleTodoDelete: (id: string) => void;
};
export const todosContext = React.createContext<TodosContext | null>(null);
export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
	const [todos, setTodos] = React.useState<Todo[]>([]);

	//Adds the todo to the list
	const handleAddTodo = (task: string) => {
		// task !== '' &&
		setTodos((prev) => {
			const newTodos: Todo[] = [
				{
					id: Math.random().toString(),
					task,
					completed: false,
					createdAt: new Date(),
				},
				...prev,
			];
			return newTodos;
		});
	};

	//Toggles the the completion status of todo
	const toggleTodoAsCompleted = (id: string) => {
		setTodos((prev) => {
			const newTodos = prev.map((task) => {
				if (task.id === id) {
					return { ...task, completed: !task.completed };
				}
				return task;
			});
			return newTodos;
		});
	};

	//Deletes the completed the tasks
	const handleTodoDelete = (id: string) => {
		console.log(id);
		setTodos((prev) => {
			const newTodos = prev.filter((task) => task.id !== id);
			return newTodos;
		});
	};

	return (
		<todosContext.Provider
			value={{
				todos,
				handleAddTodo,
				toggleTodoAsCompleted,
				handleTodoDelete,
			}}
		>
			{children}
		</todosContext.Provider>
	);
};

export function useTodos() {
	const todosContextValue = React.useContext(todosContext);
	if (!todosContextValue) {
		throw new Error('UseTodos used outside of the provider');
	}
	return todosContextValue;
}
