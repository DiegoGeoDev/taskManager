import { createContext, useState } from 'react';

export const TasksContext = createContext();

export default function TasksProvider({ children }) {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Arrumar Planet',
			date: 'Feb 5th at 2:30pm',
			remainder: true,
		},
		{
			id: 2,
			text: 'Arrumar Timber Arrumar Timber Arrumar Timber',
			date: 'Feb 8th at 9:00pm',
			remainder: false,
		},
		{
			id: 3,
			text: 'Arrumar Tarifador',
			date: 'Feb 10th at 5:30pm',
			remainder: true,
		},
		{
			id: 4,
			text: 'Arrumar Tarifador',
			date: 'Feb 10th at 5:30pm',
			remainder: true,
		},
	]);

	return (
		<TasksContext.Provider
			value={{
				tasks,
				setTasks,
			}}
		>
			{children}
		</TasksContext.Provider>
	);
}
