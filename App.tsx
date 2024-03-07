import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Tabs from './src/components/Tabs/Tabs';
import 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {UserProvider} from './src/contexts/UserContext';
import {CounterProvider, TitleContext} from './src/contexts/context';

enableScreens();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <CounterProvider>
          <TitleContext.Provider value="Sayaç">
            <Tabs />
          </TitleContext.Provider>
        </CounterProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
