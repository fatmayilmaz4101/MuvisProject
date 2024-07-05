import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './src/redux/store';
import { theme } from './src/styles/themes/themes';
import Stacks from './src/navigation/StackNavigator/StackNavigator';
import MyDrawer from './src/navigation/DrawerNavigator/DrawerNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator/DrawerNavigator';

const queryClient = new QueryClient();


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
              <DrawerNavigator />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
