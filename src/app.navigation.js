import React from 'react';

//redux
import {connect} from 'react-redux';

//navigation
import {enableScreens} from 'react-native-screens';
import {HomeNavigation} from './screens/main';

import {WelcomeNavigation} from './screens/WelcomeScreen';

//navigators

//native-powered screen containers
//run before any navigation stacks render
enableScreens();

const AppNavigation = ({isWelcomeComplete = false}) => {
  if (!isWelcomeComplete) {
    return <WelcomeNavigation />;
  }
  return <HomeNavigation />;
};

const mapStateToProps = state => {
  console.log(state);
  return {
    isWelcomeComplete: state.welcomeReducer.isWelcomeComplete,
  };
};

export default connect(mapStateToProps, null)(AppNavigation);
