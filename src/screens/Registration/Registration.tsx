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

interface FormInput {
  registration_name: string;
  registration_lastName: string;
  registration_userName: string;
  registration_password: string;
  registration_phoneNumber: number;
}
const avatarImages = [
  require('../../../assets/images/bojack-horseman-avatar.jpg'),
  require('../../../assets/images/boss-baby-avatar.png'),
  require('../../../assets/images/jworld-avatar.png'),
  require('../../../assets/images/shera-avatar.jpg'),
  require('../../../assets/images/rick-avatar.png'),
];

const Registration = () => {
  const navigation = useNavigation<any>();
  const [selectedAvatar, setSelectedAvatar] = useState<any>(require('../../../assets/images/anonim-avatar.png'));
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      registration_name: '',
      registration_lastName: '',
      registration_userName: '',
      registration_password: '',
      registration_phoneNumber: 0,
    },
  });

  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);
  const handleNavigateLogin = () => {
    navigation.navigate('Login',{selectedAvatar});
  }
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
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

  const onSubmit: SubmitHandler<FormInput> = async data => {};
  const handleAvatarPress = async (avatar: any) => {
    setSelectedAvatar(avatar);
    setModalVisible(false);
  };

  const renderAvatar = ({item} : {item: ImageSourcePropType}) => {
    return(
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

    )
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
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
              name="registration_name"
            />
            {errors.registration_name && (
              <Text style={{color: Color.Danger}}>
                {errors.registration_name.message}
              </Text>
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
              name="registration_lastName"
            />
            {errors.registration_lastName && (
              <Text style={{color: Color.Danger}}>
                {errors.registration_lastName.message}
              </Text>
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
              name="registration_userName"
            />
            {errors.registration_userName && (
              <Text style={{color: Color.Danger}}>
                {errors.registration_userName.message}
              </Text>
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
              name="registration_password"
            />
            {errors.registration_password && (
              <Text style={{color: Color.Danger}}>
                {errors.registration_password.message}
              </Text>
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
              name="registration_phoneNumber"
            />
            {errors.registration_phoneNumber && (
              <Text style={{color: 'red'}}>
                {errors.registration_phoneNumber.message}
              </Text>
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
