import React from "react";
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Login from "../screens/Login";
import Home from "../screens/Home";

export type RootStackNavigatorParamsList = {
  Home: {userName:string};
  Login: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParamsList>();

const Tabs: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#169D6B' },
        headerTintColor: 'white'
      }}>
      <Stack.Screen options={{ title: 'Giriş Yap' }} name="Login" component={Login} />
      <Stack.Screen options={{ title: 'Ana Sayfa' }} name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Tabs;
