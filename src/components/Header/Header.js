import PropsTypes from 'prop-types';

import './Header.css';

const Header = ({ title }) => {
	const component = (
		<header id="header__title" className="header__title_bg">
			<h1 className="header__title_color">{title}</h1>
		</header>
	);

	return component;
};

const defaultProps = {
	title: 'Titulo',
};

const propTypes = {
	title: PropsTypes.string,
};

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;
