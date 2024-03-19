import React, {useState} from 'react';
import {SafeAreaView, View, TextInput, Image, Text, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../../contexts/UserContext';
import {styles} from './login.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';
import Color from '../../components/Color/Color';

const Login = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const {setUser} = useUser();
  const {container, center, input, image, errorMessage, CustomText} = styles;
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
      const userCredentials = {userName, password};
      await AsyncStorage.setItem(
        'userCredentials',
        JSON.stringify(userCredentials),
      );
      console.log(
        "Switch true: Storage'a kaydedilen değerler: ",
        userCredentials,
      );
    } else {
      await AsyncStorage.removeItem('userCredentials');
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
          source={require('/Users/fatmayilmaz/Documents/GitHub/MuvisProject/assets/images/muvis-logo.jpg')}
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
          trackColor={{false: Color.dark, true: Color.customGreen}}
          thumbColor={isEnabled ? Color.light : Color.secondary}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={[{color: Color.danger}, errorMessage]}>{error}</Text>
        <CustomButton title="Giriş Yap" onPress={handleLogin} />
      </View>
      <Text style={CustomText}>Created by FatmaYilmsz</Text>
    </SafeAreaView>
  );
};

export default Login;
