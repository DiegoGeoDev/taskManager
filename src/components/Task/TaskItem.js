import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TiDelete } from 'react-icons/ti';

import './Task.css';

const StyledLi = styled.li`
	padding: 8px 16px;
	list-style-type: none;
	display: flex;
	justify-content: start;
	align-items: center;
	margin-bottom: 16px;
	user-select: none;
	border-radius: 16px;
	transition: background-color 0.3s;
	transition-timing-function: ease-in-out;

	&:hover {
		background-color: #404040;
	}

	span {
		flex-grow: 1;
		flex-basis: 0;
	}

	@media (max-width: 420px) {
		h3 {
			width: 180px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}

	h3 {
		font-size: 1.2em;
		color: #fff;
	}

	p {
		font-size: 1em;
		color: #ccc;
	}
`;

function Task({ text, date, deleteEvent }) {
	const component = (
		<StyledLi>
			<span>
				<h3>{text}</h3>
				<p>{date}</p>
			</span>
			<TiDelete className="task_button__exclude" onClick={deleteEvent} />
		</StyledLi>
	);

	return component;
}

const propTypes = {
	text: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
};

Task.propTypes = propTypes;

export default Task;
