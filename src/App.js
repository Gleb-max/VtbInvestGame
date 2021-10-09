import React from 'react';

import {LoadingScreen} from './screens/LoadingScreen';

//redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './app.navigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<LoadingScreen />}
        onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 1000))}
        persistor={persistor}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
