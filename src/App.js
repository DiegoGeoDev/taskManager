import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Button from './components/Button/Button';

import './App.css';

function App() {
	const clickHandler = () => console.log('Add');

	return (
		<div className="App">
			<Header title={'Task Manager'} />
			<Container>
				<Button text="Add Task" clickEvent={clickHandler} />
			</Container>
		</div>
	);
}

export default App;
