/* eslint-disable prettier/prettier */
import React from 'react';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './app.navigation';

// console.disableYellowBox = true;

const App = () => {
	return (
		<NavigationContainer>
			<AppNavigation />
		</NavigationContainer>
	);
};

export default App;
