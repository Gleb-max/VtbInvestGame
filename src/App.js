import React from 'react';
import {getUser} from './Utils/Storage';

import {Text} from 'react-native';
import {ProgressScreen} from './screens/ProgressScreen';

import {WelcomeNavigation} from './screens/WelcomeScreen';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from './app.navigation';

// console.disableYellowBox = true;

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
    <Text>Loading</Text>
  ) : lookedWelcome ? (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  ) : (
    <WelcomeNavigation />
  );
};
export default App;
