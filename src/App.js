<<<<<<< HEAD
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
=======
import React, {useEffect, useState} from 'react';
import {getUser} from './Utils/Storage';
import ProfileScreen from './Screens/ProfileScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import {Text} from 'react-native';

const App: () => Node = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lookedWelcome, setLookedWelcome] = useState();

  useEffect(() => {
    getUser().then(user => {
      setIsLoading(false);
      setLookedWelcome(user.lookedWelcome);
    });
  }, []);

  return isLoading ? (
    <Text>{'Loading'}</Text>
  ) : lookedWelcome ? (
    <ProfileScreen />
  ) : (
    <WelcomeScreen />
  );
>>>>>>> aed4825961e22c6b0ebd775fe688176073a62ff2
};

export default App;
