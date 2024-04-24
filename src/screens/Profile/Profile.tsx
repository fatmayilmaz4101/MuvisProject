import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import { View, SafeAreaView, Text, Alert} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import {styles} from './profile.style';
import {useUser} from '../../contexts/UserContext';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Color } from '../../utilities/Color';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';

interface InitialValues {
  Username: string;
  Password: string;
}
interface FormInput {
  name: string;
  lastname: string;
  username: string;
  password: string;
  phone: number;
}
const Profile = () => {
  const {user, setUser} = useUser();
  const [initialValues, setInitialValues] = useState<InitialValues>({
    Username: '',
    Password: '',
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormInput>({
    mode: 'onChange',
    defaultValues: {
      name: user.name,
      lastname: user.lastname,
      username: user.userName,
      password: user.password,
      phone: user.phone,
    },
  });
  const navigation = useNavigation<any>();
  useEffect(() => {
    if (user.userName && user.password) {
      setInitialValues({
        Username: user.userName,
        Password: user.password,
      });
    }
  }, []);

  const onSubmit: SubmitHandler<FormInput> = async data => {

    const isUsernameChanged = initialValues.Username !== data.username;
    const isPasswordChanged = initialValues.Password !== data.password;

    const updatedUserData = {
      name: data.name,
      lastname: data.lastname,
      userName: data.username,
      password: data.password,
      phone: data.phone,
    };
    try {
      setUser(updatedUserData);
      console.log('Kullanıcı güncellendi:', updatedUserData);
      
      if (isUsernameChanged || isPasswordChanged) {
        Alert.alert("Başarılı", "Kullanıcı adı veya şifre değişti. Lütfen tekrar giriş yapın.");
        navigation.navigate('Login');
      } else {
        Alert.alert("Başarılı", "Kullanıcı bilgileri güncellendi.");
      }
    } catch (error) {
      console.error("Kullanıcı güncelleme hatası:", error);
      Alert.alert("Hata", "Güncelleme yapılamadı.");
    }  };

  useEffect(() => {
    console.log('Güncellenmiş user nesnesi:', user);
  }, [user]);

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
        name="name"
      />
      {errors.name && (
        <Text style={{color: Color.Danger}}>{errors.name.message}</Text>
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
        name="lastname"
      />
      {errors.lastname && (
        <Text style={{color: 'red'}}>{errors.lastname.message}</Text>
      )}
      <Controller
        control={control}
        rules={{required: 'Bu alan boş bırakılamaz',
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
        name="username"
      />
      <Controller
        control={control}
        rules={{required: 'Bu alan boş bırakılamaz',
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
