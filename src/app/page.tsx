import React from 'react';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Todos from './components/Todos';
import Navbar from './components/Navbar';

const Page = () => {
	return (
		<main>
			<div className="m-auto w-full max-w-lg p-5">
				<Header />
				<Navbar />
				<AddTodo />
				<Todos />
			</div>
		</main>
	);
};

export default Page;
