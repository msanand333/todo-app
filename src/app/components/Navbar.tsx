'use client';
import Link from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';

function Navbar() {
	const searchParams = useSearchParams();
	const todosFilter = searchParams.get('todos');
	console.log('navbar ' + todosFilter);
	return (
		<nav className="mb-4 flex items-center justify-between">
			<Link className={todosFilter === null ? 'underline' : ''} href="/">
				All
			</Link>
			<Link
				className={todosFilter === 'active' ? 'underline' : ''}
				href="/?todos=active"
			>
				Active
			</Link>
			<Link
				className={todosFilter === 'completed' ? 'underline' : ''}
				href="/?todos=completed"
			>
				Completed
			</Link>
		</nav>
	);
}

export default Navbar;
