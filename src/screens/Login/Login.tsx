import React, {useState} from 'react';
import {SafeAreaView, View, TextInput, Image, Text, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../../contexts/UserContext';
import {styles} from './login.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';
import Color from '../../components/Color/Color';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';

interface FormInput {
  username: string;
  password: string;
}

const Login = () => {
  const {container, center, input, image, errorMessage, CustomText} = styles;
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const {control, handleSubmit} = useForm<FormInput>();
  const [error, setError] = useState<string>('');
  const navigation = useNavigation<any>();
  const {setUser} = useUser();

  const toggleSwitch = async (value: boolean) => {
    setIsEnabled(value);
    console.log(`Switch'in değeri: ${value}`);
    await AsyncStorage.setItem('isEnabled', value.toString());
  };
  const onSubmit: SubmitHandler<FormInput> = async data => {
    if (!data || !data.username || !data.password) {
      setError('Kullanıcı adı veya şifre boş bırakılamaz.');
      return;
    }
    setError(''); //reset error if password and username are not empty
    const updatedUserData = {
      userName: data.username,
      password: data.password,
    };
    setUser(updatedUserData);
    if (isEnabled) {
      const userCredentials = updatedUserData;
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
        <Controller
          control={control}
          render={({field: {onBlur, onChange, value}}) => (
            <TextInput
              style={input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Kullanıcı Adı"
              placeholderTextColor="gray"
            />
          )}
          name="username"
        />
        <Controller
          control={control}
          render={({field: {onBlur, onChange, value}}) => (
            <TextInput
              style={input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Şifre"
              placeholderTextColor="gray"
              secureTextEntry
            />
          )}
          name="password"
        />
        <Switch
          trackColor={{false: Color.dark, true: Color.customGreen}}
          thumbColor={isEnabled ? Color.light : Color.secondary}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={[{color: Color.danger}, errorMessage]}>{error}</Text>
        <View>
          <CustomButton title="Giriş Yap" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
      <Text style={CustomText}>Created by FatmaYilmsz</Text>
    </SafeAreaView>
  );
};

export default Login;
