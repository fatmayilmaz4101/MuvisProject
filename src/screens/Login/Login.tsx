import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Switch, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './login.styles';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Color } from '../../utilities/Color';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { loginUser } from '../../redux/actions/userActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_FAILURE } from '../../redux/types';
import CustomAvatar from '../../components/CustomAvatar/CustomAvatar';
import { Button } from 'react-native-paper';

interface FormInput {
  userName: string;
  password: string;
}

const Login = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const { login, error } = useSelector((state: RootState) => state.user);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      userName: '',
      password: ''
    }
  });

  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);
  const onPressRegistration = () => navigation.navigate('Registration');

  useEffect(() => {
    if (login && login.userName) {
      console.log("User bilgileri (Login.tsx): ", login);
      navigation.navigate('Home');
    }
  }, [login, navigation]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const toggleSwitch = async (value: boolean) => {
    setIsEnabled(value);
  };

  const onSubmit: SubmitHandler<FormInput> = async data => {
    if (isEnabled && !error) {
      reset({
        userName: login.userName,
        password: login.password
      });
      const userCredentials = data;
      await AsyncStorage.setItem(
        'userCredentials',
        JSON.stringify(userCredentials),
      );
    } else {
      reset({
        userName: '',
        password: ''
      });
      dispatch({ type: LOGIN_FAILURE, payload: false })
      await AsyncStorage.removeItem('userCredentials');
    }
    dispatch(loginUser(data))
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <View style={[styles.avatarContainer, keyboardOpen && styles.avatarContainerKeyboardOpen]}>
          <CustomAvatar
            size={80}
            source={require('../../../assets/images/rick-avatar.png')}
          />
        </View>
        <View style={[styles.center, styles.inputContainer]}>
          <View style={[styles.center]}>
            <Controller
              control={control}
              rules={{
                required: 'Bu alan boş bırakılamaz',
                minLength: {
                  value: 2,
                  message: 'Geçerli bir kullanıcı adı girin',
                },
              }}
              render={({ field: { onBlur, onChange, value } }) => (
                <CustomTextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Kullanıcı Adı"
                  placeholderTextColor={Color.Gray} />
              )}
              name="userName"
            />
            {errors.userName && (
              <Text style={{ color: Color.Danger }}>{errors.userName.message}</Text>
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
              render={({ field: { onBlur, onChange, value } }) => (
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
              <Text style={{ color: Color.Danger }}>{errors.password.message}</Text>
            )}
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.rememberMe}>Beni hatırla</Text>
            <Switch
            trackColor={{ false: Color.Dark, true: Color.Orange }}
            thumbColor={isEnabled ? Color.Light : Color.Secondary}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          </View>
          <View style={styles.submit}>
            <CustomButton title="Giriş Yap" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>

        <Text>Parolamı unuttum</Text>
        <View style={styles.rowStyle}>
        <Text style={styles.customText}>Hesabınız yok mu?</Text>
        <Button mode="text" onPress={onPressRegistration} textColor='white'>
        Şimdi kaydolun.
        </Button>

        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;

