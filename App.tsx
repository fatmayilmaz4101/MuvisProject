import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Stacks from './src/navigation/MainStackNavigator/MainStacks';
import 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {UserProvider} from './src/contexts/UserContext';
import {CounterProvider, TitleContext} from './src/contexts/Context';
import {Provider} from 'react-redux';
import store from "./src/redux/store"
enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <UserProvider>
          <CounterProvider>
            <TitleContext.Provider value="Sayaç">
              <Stacks />
            </TitleContext.Provider>
          </CounterProvider>
        </UserProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
