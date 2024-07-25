import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import store, {persistor} from '@redux/Store';
import DrawerNavigator from '@navigations/drawer-navigator/DrawerNavigator';
import {LogBox} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreAllLogs();

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <PaperProvider>
            <NavigationContainer>
              <DrawerNavigator />
            </NavigationContainer>
          </PaperProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
