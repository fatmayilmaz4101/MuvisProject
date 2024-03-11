import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Button,
  Image,
  Text,
  Switch,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../../contexts/UserContext';
import {styles} from './login.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const {setUser} = useUser();
  const {container, center, input, image, errorMessage} = styles;
  const navigation = useNavigation<any>();

  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = async (value: boolean) => {
    setIsEnabled(value);
    console.log(`Switch'in değeri: ${value}`);
    await AsyncStorage.setItem('isEnabled', value.toString());
  };

  const handleLogin = async () => {
    if (!userName || !password) {
      setError('Kullanıcı adı veya şifre boş bırakılamaz.');
      return;
    }
    setError(''); //reset error if password and username are not empty
    setUser({userName, password});

    if (isEnabled) {
      await AsyncStorage.setItem('username', userName);
      await AsyncStorage.setItem('password', password);
      console.log(
        "Switch true: Storage'a kaydedilen değerler: ",
        userName,
        password,
      );
    } else {
      await AsyncStorage.removeItem('username');
      await AsyncStorage.removeItem('password');
      setUserName('');
      setPassword('');
      console.log('Storage temizlendi. İnputlar set edildi');
    }
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={container}>
      <View style={center}>
        <Image
          source={require('/Users/fatmayilmaz/Documents/GitHub/MuvisProject/assets/muvis-logo.jpg')}
          style={image}
        />

        <TextInput
          style={input}
          placeholderTextColor="gray"
          placeholder="Kullanıcı Adı"
          onChangeText={setUserName}
          value={userName}
        />
        <TextInput
          style={input}
          placeholderTextColor="gray"
          placeholder="Şifre"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <Switch
          trackColor={{false: '#767577', true: '#169D6B'}}
          thumbColor={isEnabled ? 'white' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={errorMessage}>{error}</Text>

        <Button color="#169D6B" title="Giriş Yap" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
