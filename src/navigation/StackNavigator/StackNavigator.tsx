import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login/Login';
import Home from '../../screens/Home/Home';
import MovieDetails from '../../screens/MovieDetails/MovieDetails';
import CategoryDetail from '../../screens/CategoryDetails/CategoryDetail';
import SignUp from '../../screens/SignUp/SignUp';
import MyDrawer, {
  LogoTitle,
  MenuIcon,
} from '../DrawerNavigator/DrawerNavigator';
import DirectorsDetail from '../../screens/DirectorsDetail/DirectorsDetail';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getThemeColor } from '../../color';

const Stack = createStackNavigator();

const Stacks = () => {
  const theme = useSelector((state:RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: themeColors.background,
          borderBottomWidth: 0,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerLeft: () => <MenuIcon />,
        headerTitle: () => <LogoTitle />,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen options={{title: 'Home'}} name="Home" component={Home} />
      <Stack.Screen
        options={{title: 'Film Detayı', headerShown: false}}
        name="MovieDetail"
        component={MovieDetails}
      />
      <Stack.Screen
        options={{title: 'CategoryDetail'}}
        name="CategoryDetail"
        component={CategoryDetail}
      />
      <Stack.Screen
        options={{title: 'DirectorsDetail'}}
        name="DirectorsDetail"
        component={DirectorsDetail}
      />

      <Stack.Screen name="Main" component={MyDrawer} />
    </Stack.Navigator>
  );
};
export default Stacks;
