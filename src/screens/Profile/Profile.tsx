import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Alert,
  Keyboard,
  TouchableOpacity,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import {getUserById} from '../../sevices/userService';
import {UserFormInput, UserType} from '../../types';
import {styles} from './profile.style';
import {Color} from '../../utilities/Color';
import CustomAvatar from '../../components/CustomAvatar/CustomAvatar';
import AvatarSelectionModal from '../../components/CustomAvatarSelectionModal/CustomAvatarSelectionModal';
import CustomMaskInput from '../../components/CustomMaskInput/CustomMaskInput';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getThemeColor } from '../../color';

const Profile = () => {
  const navigation = useNavigation<any>();
  const [selectedAvatar, setSelectedAvatar] = useState<any>(
    require('../../../assets/images/anonim-avatar.png'),
  );
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);
  const [profileData, setProfileData] = useState<UserType | null>(null);
  const theme = useSelector((state:RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<UserFormInput>({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      phone: '',
    },
  });
  const [initialCredentials, setInitialCredentials] = useState({
    userName: '',
    password: '',
  });

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

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleAvatarSelect = (avatar: ImageSourcePropType) => {
    setSelectedAvatar(avatar);
    setModalVisible(false);
  };

  const fetchUser = async () => {
    try {
      const userId = await AsyncStorage.getItem('currentUserId');
      if (userId) {
        const user = await getUserById(userId);
        if (user) {
          setProfileData(user);
          setInitialCredentials({
            userName: user.userName,
            password: user.password,
          });
          reset({
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            password: user.password,
            phone: user.phone,
          });
        } else {
          console.error('Kullanıcı bulunamadı');
          navigation.navigate('Login');
        }
      } else {
        console.error('Kullanıcı ID bulunamadı');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Kullanıcı alınırken hata oluştu:', error);
      navigation.navigate('Login');
    }
  };

  useEffect(() => {
    fetchUser();
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchUser);
    return unsubscribe;
  }, [navigation]);

  const onSubmit: SubmitHandler<UserFormInput> = async data => {
    const isUsernameChanged = initialCredentials.userName !== data.userName;
    const isPasswordChanged = initialCredentials.password !== data.password;

    if (isUsernameChanged || isPasswordChanged) {
      Alert.alert(
        'Değişiklikler Kaydedildi',
        'Kullanıcı adı veya şifre değişti. Lütfen yeniden giriş yapın.',
        [
          {
            text: 'Tamam',
            onPress: () => navigation.navigate('Login'),
          },
        ],
      );
    } else {
      Alert.alert('Başarılı', 'Profil güncellendi.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: themeColors.background}}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={[
            styles.avatarContainer,
            keyboardOpen && styles.avatarContainerKeyboardOpen,
          ]}
          onPress={toggleModal}>
          <CustomAvatar size={100} source={selectedAvatar} />
        </TouchableOpacity>

        <Controller
          control={control}
          rules={{
            required: 'Bu alan boş bırakılamaz',
            minLength: {
              value: 2,
              message: 'Geçerli bir isim girin',
            },
            pattern: {
              value: /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/,
              message: 'Geçerli bir isim girin.',
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
          <Text style={{color: 'red'}}>{errors.firstName.message}</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: 'Bu alan boş bırakılamaz',
            minLength: {
              value: 2,
              message: 'Geçerli bir soyisim girin',
            },
            pattern: {
              value: /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/,
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
          <Text style={{color: 'red'}}>{errors.lastName.message}</Text>
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
              secureTextEntry
              placeholderTextColor={Color.Gray}
            />
          )}
          name="password"
        />
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
          <Text style={{color: 'red'}}>{errors.phone.message}</Text>
        )}
        <View style={styles.customButton}>
          <CustomButton
            title="Güncelle"
            onPress={handleSubmit(onSubmit)}
          />
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

export default Profile;
