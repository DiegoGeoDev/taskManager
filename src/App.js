import Header from './components/Header/Header';
import Container from './components/Container/Container';

import './App.css';

function App() {
	return (
		<div className="App">
			<Header title={'Task Manager'} />
			<Container>
				<h1>Texto aqui</h1>
			</Container>
		</div>
	);
}

export default App;
