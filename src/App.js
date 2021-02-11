import { useState } from 'react';

import Header from './components/Header';
import Container from './components/Container';
import Button from './components/Button';
import Tasks from './components/Tasks';

import './App.css';

function App() {
	const addTaskClickHandler = () => console.log('add');

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
		{
			id: 5,
			text: 'A',
			date: 'Feb 10th at 5:30pm',
			remainder: true,
		},
		{
			id: 6,
			text: 'Arrumar Tarifador',
			date: 'Feb 10th at 5:30pm',
			remainder: true,
		},
		{
			id: 7,
			text: 'Arrumar Tarifador',
			date: 'Feb 10th at 5:30pm',
			remainder: true,
		},
		{
			id: 8,
			text: 'Arrumar Tarifador',
			date: 'Feb 10th at 5:30pm',
			remainder: true,
		},
	]);

	return (
		<>
			<Header title={'Task Manager'} />
			<Container>
				<Button text={'Add Task'} onClickEvent={addTaskClickHandler} />
				<Tasks tasks={tasks} />
			</Container>
		</>
	);
}

export default App;

// https://youtu.be/w7ejDZ8SWv8?t=3079
// https://github.com/bradtraversy/react-crash-2021/blob/master/src/index.css
