import React, {useState} from 'react';

import {LoadingScreen} from './screens/LoadingScreen';

//redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './app.navigation';
import Dialogue from './Components/Dialogue';
import {View} from 'react-native';

const App = () => {
  // TODO move to redux
  const [showDialogue, setShowDialogue] = useState(true);

  return (
    <Provider store={store}>
      <PersistGate
        loading={<LoadingScreen />}
        onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 1000))}
        persistor={persistor}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>

        {showDialogue ? (
          <Dialogue
            messages={['Jopa', 'Copa', 'Bopda']}
            onFinish={() => {
              setShowDialogue(false);
            }}
          />
        ) : (
          <View />
        )}
      </PersistGate>
    </Provider>
  );
};
export default App;
