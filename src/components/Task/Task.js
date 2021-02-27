import { useState } from 'react';

import React from 'react';
import styled from 'styled-components';

import TaskItem from './TaskItem';

const StyledDiv = styled.div`
	width: 90vw;
	padding: 8px;

	@media (min-width: 900px) {
		width: 60%;
	}

	ul {
		padding: 8px;
	}

	h2 {
		padding: 8px;
		font-size: 1.2em;
		color: #fff;
	}
`;

function Task() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Arrumar Planet',
			date: 'Feb 5th at 2:30pm',
			reminder: true,
		},
		{
			id: 2,
			text: 'Arrumar Timber Arrumar Timber Arrumar Timber',
			date: 'Feb 8th at 9:00pm',
			reminder: false,
		},
		{
			id: 3,
			text: 'Arrumar Tarifador',
			date: 'Feb 10th at 5:30pm',
			reminder: true,
		},
		{
			id: 4,
			text: 'Arrumar Tarifador',
			date: 'Feb 10th at 5:30pm',
			reminder: true,
		},
	]);

	const clickHandler = (id) => setTasks((current) => current.filter((item) => item.id !== id));

	const component = (
		<StyledDiv>
			<ul>
				{tasks.map((task) => (
					<TaskItem
						key={task.id}
						text={task.text}
						date={task.date}
						deleteEvent={() => clickHandler(task.id)}
					/>
				))}
			</ul>
		</StyledDiv>
	);
	return component;
}

export default Task;
