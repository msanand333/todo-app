import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TodosProvider } from './store/todos';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'TODO-App',
	description: 'TODO-App for learning NEXT-13',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<TodosProvider>{children}</TodosProvider>
			</body>
		</html>
	);
}
