import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Stacks from './src/navigation/MainStackNavigator/MainStacks';
import 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {UserProvider} from './src/contexts/UserContext';
import {Provider} from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import store from "./src/redux/store"
import { theme } from './src/styles/themes/themes';

enableScreens();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <UserProvider>
            <Stacks />
        </UserProvider>
      </NavigationContainer>
      </PaperProvider>
    </Provider>
    </QueryClientProvider>
  );
};

export default App;
