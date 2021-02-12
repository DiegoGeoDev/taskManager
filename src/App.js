import Header from './components/Header';
import Container from './components/Container';
import Button from './components/Button';
import Tasks from './components/Tasks';

import TasksProvider from './contexts/Tasks';

import './App.css';

function App() {
	const addTaskClickHandler = () => console.log('add');

	return (
		<TasksProvider>
			<Header title={'Task Manager'} />
			<Container>
				<Button text={'Add Task'} onClickEvent={addTaskClickHandler} />
				<Tasks />
			</Container>
		</TasksProvider>
	);
}

export default App;

// https://youtu.be/w7ejDZ8SWv8?t=3079
// https://github.com/bradtraversy/react-crash-2021/blob/master/src/index.css
