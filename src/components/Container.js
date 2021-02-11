function Container({ children }) {
	const containerStyle = {
		backgroundColor: '#2e2d2e',
		width: '100vw',
		height: 'calc(100% - 140px)',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'start',
		padding: '8px',
	};

	const component = <div style={containerStyle}>{children}</div>;

	return component;
}

export default Container;
