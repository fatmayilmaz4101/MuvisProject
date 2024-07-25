import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/sign-in/SignIn';
import Home from '../../screens/home/Home';
import MovieDetails from '../../screens/movie-details/MovieDetails';
import CategoryDetail from '../../screens/category-details/CategoryDetail';
import SignUp from '../../screens/sign-up/SignUp';
import MyDrawer, {
  LogoTitle,
  MenuIcon,
} from '../drawer-navigator/DrawerNavigator';
import DirectorsDetail from '../../screens/directors-detail/DirectorsDetail';
import {useSelector} from 'react-redux';
import {getThemeColor} from '../../utilities/Color';
import { RootState } from '../../redux/Store';

const Stack = createStackNavigator();

const Stacks = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
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
