import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login/Login';
import Home from '../../screens/Home/Home';
import {useNavigation} from '@react-navigation/native';
import Counter from '../../screens/Counter/Counter';
import MovieList from '../../screens/MovieList/MovieList';
import MovieDetails from '../../screens/MovieDetails/MovieDetails';
import Color from '../../components/Color/Color';
import CustomButton from '../../components/CustomButton/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import Profile from '../../screens/Profile/Profile';
import { styles } from './stacks.styles';
import MovieStars from '../../screens/MovieStars/movieStars';
const Stack = createStackNavigator();

const ProfileIcon = () => {
  const navigation = useNavigation<any>();
  const onPressProfile = () => navigation.navigate('Profile');
  return (
    <TouchableOpacity onPress={onPressProfile}>
    <Icon style={styles.personIcon} name="person" color={Color.light}/>
    </TouchableOpacity>
  )
}

const LogoutButton = () => {
  const navigation = useNavigation<any>();
  const onPressLogin = () => navigation.navigate('Login');

  return (
    <CustomButton title="Çıkış Yap" onPress={onPressLogin} type="customGreen" />
  );
};

const Tabs = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Color.customGreen},
        headerTintColor: Color.light,
        headerTitleAlign: 'center',  
      }}>
      <Stack.Screen
        options={{title: 'Giriş Yap',
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={({route}) => ({
          title: 'Ana Sayfa',
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
             <LogoutButton />
            </View>
          ),
          headerLeft: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
             <ProfileIcon/>
            </View>
          )
        })}
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

    </Stack.Navigator>
  );
};

export default Tabs;
