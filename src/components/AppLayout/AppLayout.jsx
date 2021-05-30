import React from 'react'
import Navigation from '../Navigation/Navigation';


const AppLayout = ({ children }) => {
	return (
		<>
			<header>
				<Navigation />
			</header>
			<div>{children}</div>
		</>
	);
};

export default AppLayout;
