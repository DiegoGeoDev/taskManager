import PropTypes from 'prop-types';

function Button({ text, onClickEvent }) {
	const buttonStyle = {
		backgroundColor: '#363636',
		color: '#fff',
		width: '120px',
		height: '60px',
		fontSize: '1.2em',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '8px',
		marginTop: '16px',
	};

	const component = (
		<button onClick={onClickEvent} style={buttonStyle}>
			{text}
		</button>
	);

	return component;
}

const defaultProps = {
	text: 'Texto',
	onClickEvent: () => console.log('click'),
};

const propTypes = {
	text: PropTypes.string,
	onClickEvent: PropTypes.func.isRequired,
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
