import PropTypes from 'prop-types';

const Header = ({ title }) => {
	const headerStyle = {
		backgroundColor: '#2e2d2e',
		color: '#fff',
		width: '100vw',
		height: '140px',
		fontSize: '1.8em',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '8px',
	};

	const component = (
		<header style={headerStyle}>
			<h1>{title}</h1>
		</header>
	);

	return component;
};

const defaultProps = {
	title: 'Título',
};

const propTypes = {
	title: PropTypes.string,
};

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;
