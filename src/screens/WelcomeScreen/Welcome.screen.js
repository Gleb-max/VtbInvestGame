/* eslint-disable prettier/prettier */
import React from 'react';

import {updateUser} from '../../Utils/Storage';

//views
import { WelcomeView } from './Welcome.view';

export const WelcomeScreen = ({

}) => {
	//callbacks
	const _onWelcomeComplete = React.useCallback(() => {
		updateUser({lookedWelcome: true});
		console.warn('not implement');
	}, []);

	return (
		<WelcomeView
			onWelcomeComplete={_onWelcomeComplete} />
	);
};
