/* eslint-disable prettier/prettier */
import React from 'react';

//navigation
import { enableScreens } from 'react-native-screens';

//navigators
import { HomeNavigation } from './screens/main';

//native-powered screen containers
//run before any navigation stacks render
enableScreens();

export const AppNavigation = ({

}) => {
	return <HomeNavigation />;
};
