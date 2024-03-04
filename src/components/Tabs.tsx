import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Tabs: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#169D6B'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        options={{title: 'Giriş Yap'}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{title: 'Ana Sayfa'}}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default Tabs;
