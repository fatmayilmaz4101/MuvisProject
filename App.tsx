import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Stacks from './src/navigation/StackNavigator/Stacks';
import 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {UserProvider} from './src/contexts/UserContext';
import {CounterProvider, TitleContext} from './src/contexts/context';

enableScreens();

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <CounterProvider>
          <TitleContext.Provider value="Sayaç">
            <Stacks />
          </TitleContext.Provider>
        </CounterProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
