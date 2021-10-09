import React from 'react';

//redux
import {store} from '../../redux/store';

//actions
import {welcomeComplete} from '../../redux/actions';

//views
import {WelcomeView} from './Welcome.view';

export const WelcomeScreen = ({}) => {
  //callbacks
  const _onWelcomeComplete = React.useCallback(() => {
    store.dispatch(welcomeComplete());
  }, []);

  return <WelcomeView onWelcomeComplete={_onWelcomeComplete} />;
};
