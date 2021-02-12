import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TiDelete } from 'react-icons/ti';

function Task({ text, date, id }) {
	const StyledLi = styled.li`
		padding: 8px;
		list-style-type: none;
		display: flex;
		justify-content: start;
		align-items: center;
		&:hover {
			background-color: #363636;
		}

		span {
			flex-grow: 1;
			flex-basis: 0;
			white-space: nowrap;
			overflow: hidden;
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

	const iconsStyle = {
		color: '#bb66ee',
		fontSize: '2em',
		cursor: 'pointer',
		marginLeft: '8px',
	};

	const component = (
		<StyledLi>
			<span>
				<h3>{text}</h3>
				<p>{date}</p>
			</span>
			<TiDelete style={iconsStyle} onClick={() => console.log(id)} />
		</StyledLi>
	);

	return component;
}

const propTypes = {
	text: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};

Task.propTypes = propTypes;

export default Task;
