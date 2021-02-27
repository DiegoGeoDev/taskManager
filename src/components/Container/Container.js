import React from 'react';

function Container({ children }) {
	const containerStyle = {
		backgroundColor: '#2e2d2e',
		width: '100%',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'start',
		padding: '8px',
	};

	return <div style={containerStyle}>{children}</div>;
}

export default Container;
