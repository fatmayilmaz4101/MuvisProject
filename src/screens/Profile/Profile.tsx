import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {View, SafeAreaView, Text, Alert} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import {styles} from './profile.style';
import {Color} from '../../utilities/Color';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import {RootState, useAppDispatch} from '../../redux/store';
import {useSelector} from 'react-redux';
import { getUserById, updateProfile } from '../../redux/actions/userActions';
import { useEffect } from 'react';

interface FormInput {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  phone: number;
}
const Profile = () => {
  const {profile} = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<FormInput>({
    mode: 'onChange',
    defaultValues: {
      firstName: profile.firstName || '',
      lastName: profile.lastName || '',
      userName: profile.userName || '',
      password: profile.password || '',
      phone: profile.phone || 0,
    },
  });
  useEffect(() => {
    if (profile && profile.userName) {
      console.log("User bilgileri (profile.tsx): ", profile);
    }
  }, [profile]);

  useEffect(() => {
    console.log('profile nesnesi: ',profile)
    console.log('profile id: ',profile.id)
    console.log(typeof profile.id)
    reset({
      firstName: profile.firstName || '',
      lastName: profile.lastName || '',
      userName: profile.userName || '',
      password: profile.password || '',
      phone: profile.phone || 0,
    });
  }, [profile, reset]);
  
  const onSubmit: SubmitHandler<FormInput> = async data => {
    if (typeof profile.id === 'string') {
      dispatch(updateProfile(data, profile.id));
      Alert.alert('Başarılı','Güncelleme başarılı')
    } else {
      Alert.alert('Hata', 'Geçerli bir kullanıcı ID\'si bulunamadı. Güncelleme yapılamıyor.');
    }
  };

  return (
    <SafeAreaView style={styles.updateForm}>
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
        <Text style={{color: Color.Danger}}>{errors.firstName.message}</Text>
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
        <Text style={{color: 'red'}}>{errors.phone.message}</Text>
      )}
      <View style={styles.customButton}>
        <CustomButton
          title="Güncelle"
          onPress={handleSubmit(onSubmit)}
          type="menu"
        />
      </View>
    </SafeAreaView>
  );
};
export default Profile;
