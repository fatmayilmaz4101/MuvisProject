import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Tabs from './src/components/Tabs';
import 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {UserProvider} from './src/contexts/UserContext';
import {CounterContext} from './src/contexts/context';

enableScreens();

const App: React.FC = () => {
  const counterTitle = 'Sayaç';
  return (
    <NavigationContainer>
      <UserProvider>
        <CounterContext.Provider value={counterTitle}>
          <Tabs />
        </CounterContext.Provider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
