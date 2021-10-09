import React from 'react';
import {getUser} from './Utils/Storage';

import {Text} from 'react-native';
import {ProgressScreen} from './screens/ProgressScreen';
import {LoadingScreen} from './screens/LoadingScreen';

import {WelcomeNavigation} from './screens/WelcomeScreen';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from './app.navigation';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [lookedWelcome, setLookedWelcome] = React.useState();
  React.useEffect(() => {
    getUser().then(user => {
      setIsLoading(false);
      setLookedWelcome(user.lookedWelcome);
    });
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : lookedWelcome ? (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  ) : (
    <WelcomeNavigation />
  );
};
export default App;
