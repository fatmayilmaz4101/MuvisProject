import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {styles} from './signUp.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {Color} from '../../utilities/Color';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomAvatar from '../../components/CustomAvatar/CustomAvatar';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../../hooks/useUser';
import {UserFormInput} from '../../types';
import AvatarSelectionModal from '../../components/CustomAvatarSelectionModal/CustomAvatarSelectionModal';
import CustomMaskInput from '../../components/CustomMaskInput/CustomMaskInput';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getThemeColor } from '../../color';

const SignUp = () => {
  const navigation = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);
  const [selectedAvatar, setSelectedAvatar] = useState<ImageSourcePropType>(
    require('../../../assets/images/anonim-avatar.png'),
  );
  const {addUser} = useUser();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      phone: '',
    },
  });
  const theme = useSelector((state:RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardOpen(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOpen(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleNavigateLogin = () => {
    navigation.navigate('Login', {selectedAvatar});
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleAvatarSelect = (avatar: ImageSourcePropType) => {
    setSelectedAvatar(avatar);
    setModalVisible(false);
  };

  const onSubmit: SubmitHandler<UserFormInput> = async data => {
    try {
      addUser(data, {
        onSuccess: () => {
          console.log('Başarılı kayıt');
          navigation.navigate('Login');
        },
        onError: (error: any) => {
          console.error('Kullanıcı oluşturma hatası:', error);
        },
      });
    } catch (error) {
      console.error('Beklenmedik hata:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardStyle}>
      <SafeAreaView style={[styles.container, {backgroundColor: themeColors.background}]}>
        <TouchableOpacity
          style={[
            styles.avatarContainer,
            keyboardOpen && styles.avatarContainerKeyboardOpen,
          ]}
          onPress={toggleModal}>
          <CustomAvatar size={80} source={selectedAvatar} />
        </TouchableOpacity>

        <View
          style={[{borderColor: themeColors.titleColor},
            styles.center,
            styles.inputContainer,
            keyboardOpen && styles.containerKeyboardOpen,
          ]}>
          <View style={[styles.center]}>
            <Controller
              control={control}
              rules={{
                required: 'Bu alan boş bırakılamaz',
                minLength: {
                  value: 2,
                  message: 'Geçerli bir isim girin',
                },
              }}
              render={({field: {onBlur, onChange, value}}) => (
                <CustomTextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="İsim"
                  placeholderTextColor={Color.Gray}
                />
              )}
              name="firstName"
            />
            {errors.firstName && (
              <Text style={styles.errorText}>{errors.firstName.message}</Text>
            )}
            <Controller
              control={control}
              rules={{
                required: 'Bu alan boş bırakılamaz',
                minLength: {
                  value: 2,
                  message: 'Geçerli bir soyisim girin',
                },
              }}
              render={({field: {onBlur, onChange, value}}) => (
                <CustomTextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Soyisim"
                  placeholderTextColor={Color.Gray}
                />
              )}
              name="lastName"
            />
            {errors.lastName && (
              <Text style={styles.errorText}>{errors.lastName.message}</Text>
            )}

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
                  placeholderTextColor={Color.Gray}
                />
              )}
              name="userName"
            />
            {errors.userName && (
              <Text style={styles.errorText}>{errors.userName.message}</Text>
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
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
            <Controller
              control={control}
              rules={{
                required: 'Bu alan boş bırakılamaz',
              }}
              render={({field: {onBlur, onChange, value}}) => (
                <CustomMaskInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value ? value.toString() : ''}
                />
              )}
              name="phone"
            />
            {errors.phone && (
              <Text style={styles.errorText}>{errors.phone.message}</Text>
            )}
          </View>
          <View style={styles.submit}>
            <CustomButton title="Kayıt Ol" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>

        <View style={styles.rowStyle}>
          <Text style={[styles.customText, {color: themeColors.titleColor}]}>Hesabınız varsa</Text>
          <Button mode="text" onPress={handleNavigateLogin} textColor={themeColors.titleColor}>
            Giriş yapın.
          </Button>
        </View>
        <AvatarSelectionModal
          visible={modalVisible}
          onClose={toggleModal}
          onSelect={handleAvatarSelect}
          selectedAvatar={selectedAvatar}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
