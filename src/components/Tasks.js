import PropTypes from 'prop-types';
import styled from 'styled-components';

import Task from './Task';

function Tasks({ tasks }) {
	const StyledUl = styled.ul`
		width: 90vw;
		padding: 8px;
		margin-top: 32px;

		@media (min-width: 900px) {
			width: 60%;
		}
	`;

	const component = (
		<StyledUl>
			{tasks.map((task) => (
				<Task key={task.id} text={task.text} date={task.date} />
			))}
		</StyledUl>
	);

	return component;
}

const defaultProps = {
	tasks: [],
};

const propTypes = {
	tasks: PropTypes.array,
};

Tasks.defaultProps = defaultProps;
Tasks.propTypes = propTypes;

export default Tasks;
