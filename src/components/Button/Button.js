import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

function Button({ text, clickEvent }) {
	const component = (
		<div>
			<button className="button__task" onClick={clickEvent}>
				{text}
			</button>
		</div>
	);

	return component;
}

const defaultProps = {
	text: 'Texto',
};

const propTypes = {
	text: PropTypes.string,
	clickEvent: PropTypes.func.isRequired,
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
