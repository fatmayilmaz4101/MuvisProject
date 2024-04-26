import React, {useState} from 'react';
import {SafeAreaView, View, Image, Text, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../../contexts/UserContext';
import {styles} from './login.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Color } from '../../utilities/Color';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';

interface FormInput {
  username: string;
  password: string;
}

const Login = () => {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Image
          source={require('/Users/fatmayilmaz/Documents/GitHub/MuvisProject/assets/images/muvis-logo.jpg')}
          style={styles.image}
        />
        <Controller
          control={control}
          rules={{
            required: 'Bu alan boş bırakılamaz',
            minLength: {
              value: 2,
              message: 'Geçerli bir kullanıcı adı girin',
            },
          }}
          render={({field: {onBlur, onChange, value}}) => (
            <CustomTextInput               
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Kullanıcı Adı"
            placeholderTextColor={Color.Gray}/>
          )}
          name="username"
        />
        {errors.username && (
          <Text style={{color: Color.Danger}}>{errors.username.message}</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: 'Bu alan boş bırakılamaz',
            minLength: {
              value: 5,
              message: 'Geçerli bir şifre girin',
            },
          }}
          render={({field: {onBlur, onChange, value}}) => (
            <CustomTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Şifre"
              placeholderTextColor={Color.Gray}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={{color: Color.Danger}}>{errors.password.message}</Text>
        )}
        <Switch
          trackColor={{false: Color.Dark, true: Color.CustomGreen}}
          thumbColor={isEnabled ? Color.Light : Color.Secondary}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <View style={styles.submit}>
          <CustomButton title="Giriş Yap" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
      <Text style={styles.CustomText}>Created by FatmaYilmsz</Text>
    </SafeAreaView>
  );
};

export default Login;
