/* eslint-disable prettier/prettier */
import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//views
import { WelcomeView } from './Welcome.view';

export const WelcomeScreen = ({

}) => {
	//navigation
	const navigation = useNavigation();

	//callbacks
	const _onWelcomeComplete = React.useCallback(() => {
		navigation.navigate('main/home');
	}, [navigation]);

	return (
		<WelcomeView
			onWelcomeComplete={_onWelcomeComplete} />
	);
};
