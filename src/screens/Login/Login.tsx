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
  const {container, center, input, image, CustomText} = styles;
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  const {user, setUser} = useUser();
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<FormInput>({
    defaultValues: {
      username: user.userName,
      password: user.password,
    },
  });

  const toggleSwitch = async (value: boolean) => {
    setIsEnabled(value);
    console.log(`Switch'in değeri: ${value}`);
    await AsyncStorage.setItem('isEnabled', value.toString());
  };
  const onSubmit: SubmitHandler<FormInput> = async data => {
    const newUserData = {
      userName: data.username,
      password: data.password,
    };
    setUser(newUserData);
    if (isEnabled) {
      const userCredentials = newUserData;
      await AsyncStorage.setItem(
        'userCredentials',
        JSON.stringify(userCredentials),
      );
      console.log(
        "Switch true: Storage'a kaydedilen değerler: ",
        userCredentials,
      );
    } else {
      reset({
        username: '',
        password: '',
      });
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
          rules={{
            required: true,
            minLength: {
              value: 2,
              message: 'Geçerli bir kullanıcı adı girin',
            },
          }}
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
        {errors.username && (
          <Text style={{color: Color.danger}}>{errors.username.message}</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: {
              value: 5,
              message: 'Geçerli bir şifre girin',
            },
          }}
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
        {errors.password && (
          <Text style={{color: Color.danger}}>{errors.password.message}</Text>
        )}
        <Switch
          trackColor={{false: Color.dark, true: Color.customGreen}}
          thumbColor={isEnabled ? Color.light : Color.secondary}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <View>
          <CustomButton title="Giriş Yap" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
      <Text style={CustomText}>Created by FatmaYilmsz</Text>
    </SafeAreaView>
  );
};

export default Login;
