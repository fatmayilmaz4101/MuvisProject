import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login/Login';
import Home from '../../screens/Home/Home';
import {useNavigation} from '@react-navigation/native';
import Counter from '../../screens/Counter/Counter';
import MovieList from '../../screens/MovieList/MovieList';
import MovieDetails from '../../screens/MovieDetails/MovieDetails';
import { Color } from '../../utilities/Color';
import CustomButton from '../../components/CustomButton/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
import Profile from '../../screens/Profile/Profile';
import { styles } from './mainStacks.styles';
import MovieStars from '../../screens/MovieStars/MovieStars';
import Deneme from '../../screens/Deneme/Deneme';
import Registration from '../../screens/Registration/Registration';

const Stack = createStackNavigator();

const ProfileIcon = () => {
  const navigation = useNavigation<any>();

  const onPressProfile = () => navigation.navigate('Profile');
  return (
    <TouchableOpacity onPress={onPressProfile}>
      <Icon style={styles.personIcon} name="person" color={Color.Light}/>
    </TouchableOpacity>
  )
}

const LogoutButton = () => {
  const navigation = useNavigation<any>();
  const onPressLogin = () => {
    navigation.navigate('Login');}

  return (
    <CustomButton title="Çıkış Yap" onPress={onPressLogin} type="customGreen" />
  );
};

const Stacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Color.CustomGreen},
        headerTintColor: Color.Light,
        headerTitleAlign: 'center',  
      }}>
      <Stack.Screen
        options={{title: 'Giriş Yap', headerShown: false
        }}
        name="Login"
        component={Login}
      />
       <Stack.Screen
        options={{title: 'Kayıt', headerShown: false}}
        name="Registration"
        component={Registration}
      />

      <Stack.Screen
        options={{
          title: 'Ana Sayfa',
          headerRight: () => (
            <View style={styles.headerStyle}>
             <LogoutButton />
            </View>
          ),
          headerLeft: () => (
            <View style={styles.headerStyle}>
             <ProfileIcon/>
            </View>
          )
        }}
      name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{title: 'Sayaç'}}
        name="Counter"
        component={Counter}
      />
      <Stack.Screen
        options={{title: 'Film Listesi'}}
        name="MovieList"
        component={MovieList}
      />
      <Stack.Screen
        options={{title: 'Film Detayı'}}
        name="MovieDetail"
        component={MovieDetails}
      />
        <Stack.Screen
        options={{title: 'Profil'}}
        name="Profile"
        component={Profile}
      />
        <Stack.Screen
        options={{title: 'Film Yıldızları'}}
        name="MovieStars"
        component={MovieStars}
      />
              <Stack.Screen
        options={{title: 'Deneme'}}
        name="Deneme"
        component={Deneme}
      />

    </Stack.Navigator>
  );
};

export default Stacks;
