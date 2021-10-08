import React from 'react';
import {getUser} from './Utils/Storage';

import {Text} from 'react-native';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from './app.navigation';
import WelcomeScreen from './Screens/WelcomeScreen';

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
    <WelcomeScreen />
  );
};
export default App;
