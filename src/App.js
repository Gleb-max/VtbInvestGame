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
};

export default App;
