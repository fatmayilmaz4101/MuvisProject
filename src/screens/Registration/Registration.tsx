import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
  Modal,
  FlatList,
  ImageSourcePropType,
} from 'react-native';
import {styles} from './registration.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {Color} from '../../utilities/Color';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomAvatar from '../../components/CustomAvatar/CustomAvatar';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../../hooks/useUser';
import {avatarImages} from '../../../api/getAvatarDatas';
import {UserFormInput} from '../../types';

const Registration = () => {
  const navigation = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);
  const [selectedAvatar, setSelectedAvatar] = useState<any>(
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
      phone: 0,
    },
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
  const handleNavigateLogin = () => {
    navigation.navigate('Login', {selectedAvatar});
  };
  const handleAvatarPress = async (avatar: any) => {
    setSelectedAvatar(avatar);
    setModalVisible(false);
  };
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const onSubmit: SubmitHandler<UserFormInput> = async data => {
    console.log('kayıt ola tıklandı, data: ', data);
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

  const renderAvatar = ({item}: {item: ImageSourcePropType}) => {
    return (
      <TouchableOpacity onPress={() => handleAvatarPress(item)}>
        <CustomAvatar
          style={[
            styles.avatarOption,
            selectedAvatar === selectedAvatar && styles.selectedAvatar,
          ]}
          size={80}
          source={item}
        />
      </TouchableOpacity>
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardStyle}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={[
            styles.avatarContainer,
            keyboardOpen && styles.avatarContainerKeyboardOpen,
          ]}
          onPress={() => setModalVisible(true)}>
          <CustomAvatar size={80} source={selectedAvatar} />
        </TouchableOpacity>

        <View
          style={[
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
                pattern: {
                  value: /^(?:\+90|90)(\d{10})$/,
                  message: 'Telefon numarası +90 veya 90 ile başlamalıdır.',
                },
              }}
              render={({field: {onBlur, onChange, value}}) => (
                <CustomTextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value ? value.toString() : ''}
                  placeholder="Cep Telefonu"
                  keyboardType="phone-pad"
                  placeholderTextColor={Color.Gray}
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
          <Text style={styles.customText}>Hesabınız varsa</Text>
          <Button mode="text" onPress={handleNavigateLogin} textColor="white">
            Giriş yapın.
          </Button>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalBackground}
              onPress={toggleModal}>
              <View style={styles.modalContent}>
                <FlatList
                  data={avatarImages}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={2}
                  renderItem={renderAvatar}
                />
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Registration;
