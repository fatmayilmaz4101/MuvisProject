import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUser} from '../contexts/UserContext';
const Stack = createStackNavigator();
const LogoutButton = () => {
  const {user, setUser} = useUser();
  const navigation = useNavigation<any>();
  const handleLogout = async () => {
    const storedUserName = await AsyncStorage.getItem('username');
    console.log('storagedan gelen username', storedUserName);

    const storedPassword = await AsyncStorage.getItem('password');
    console.log('storagedan gelen password', storedPassword);

    const storedIsEnabled = await AsyncStorage.getItem('isEnabled');
    console.log('storagedan gelen isEnabled', storedIsEnabled);

    if (storedUserName && storedPassword) {
      console.log('if e girdi');
      setUser({userName: storedUserName, password: storedPassword});
      console.log('storage username:', storedUserName);
      console.log('storage password:', storedPassword);
    } else {
      setUser({userName: '', password: ''});
      console.log('else e girdi');
      console.log('user: ', user);
    }

    navigation.navigate('Login');
  };
  return <Button title="Çıkış Yap" onPress={handleLogout} />;
};
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
        options={({route}) => ({
          title: 'Ana Sayfa',
          headerRight: () => route.name === 'Home' && <LogoutButton />,
        })}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default Tabs;
