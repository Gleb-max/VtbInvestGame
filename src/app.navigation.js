/* eslint-disable prettier/prettier */
import React from 'react';

//navigation
import { enableScreens } from 'react-native-screens';
import {HomeNavigation} from './screens/main';

//navigators

//native-powered screen containers
//run before any navigation stacks render
enableScreens();

export const AppNavigation = ({

}) => {
	return <HomeNavigation />;
};
