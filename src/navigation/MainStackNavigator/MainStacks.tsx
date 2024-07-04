import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Login/Login';
import Home from '../../screens/Home/Home';
import Counter from '../../screens/Counter/Counter';
import MovieList from '../../screens/MovieList/MovieList';
import MovieDetails from '../../screens/MovieDetails/MovieDetails';
import Profile from '../../screens/Profile/Profile';
import MovieStars from '../../screens/MovieStars/MovieStars';
import Deneme from '../../screens/Deneme/Deneme';
import Registration from '../../screens/Registration/Registration';
import MyDrawer, { LogoTitle, MenuIcon } from '../DrawerNavigator/DrawerNavigator';

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'black',
        borderBottomWidth: 0,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerLeft: () => <MenuIcon />,
      headerTitle: () => <LogoTitle />,
      headerTitleAlign: 'center',

    }}
>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ title: 'Kayıt', headerShown: false }}
        name="Registration"
        component={Registration}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ title: 'Sayaç' }}
        name="Counter"
        component={Counter}
      />
      <Stack.Screen
        options={{ title: 'Film Listesi' }}
        name="MovieList"
        component={MovieList}
      />
      <Stack.Screen
        options={{ title: 'Film Detayı' }}
        name="MovieDetail"
        component={MovieDetails}
      />
      <Stack.Screen
        options={{ title: 'Profil' }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{ title: 'Film Yıldızları' }}
        name="MovieStars"
        component={MovieStars}
      />
      <Stack.Screen
        options={{ title: 'Deneme' }}
        name="Deneme"
        component={Deneme}
      />
      <Stack.Screen name="Main" component={MyDrawer} />
    </Stack.Navigator>
  );
};

export default Stacks;
