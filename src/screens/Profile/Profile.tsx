import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {TextInput, View, SafeAreaView, Text} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import {styles} from './profile.style';
import {useUser} from '../../contexts/UserContext';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Color from '../../components/Color/Color';

interface InitialValues {
  Username: string;
  Password: string;
}
interface FormInput {
  name?: string;
  lastname?: string;
  username: string;
  password: string;
  phone?: number;
}
const Profile = () => {
  const {updateForm, customButton, textInput} = styles;
  const {user, setUser} = useUser();
  const [initialValues, setInitialValues] = useState<InitialValues>({
    Username: '',
    Password: '',
  });

  const {
    control,
    handleSubmit,
    formState: {isValid, errors},
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
    // if (
    //   data.name &&
    //   data.lastname &&
    //   data.username &&
    //   data.password &&
    //   data.phone
    // ) {
    // }

    const isUsernameChanged = initialValues.Username !== data.username;
    const isPasswordChanged = initialValues.Password !== data.password;

    const updatedUserData = {
      name: data.name,
      lastname: data.lastname,
      userName: data.username,
      password: data.password,
      phone: data.phone,
    };
    setUser(updatedUserData);

    console.log('Kullanıcı güncellendi:', updatedUserData);

    if (isUsernameChanged || isPasswordChanged) {
      navigation.navigate('Login');
    } else {
      console.log(
        'Kullanıcı bilgileri güncellendi ancak kullanıcı adı ve şifre değişmedi.',
      );
    }
  };

  useEffect(() => {
    console.log('Güncellenmiş user nesnesi:', user);
  }, [user]);

  return (
    <SafeAreaView style={updateForm}>
      <Controller
        control={control}
        rules={{
          required: true,
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
          <TextInput
            style={textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="İsim"
          />
        )}
        name="name"
      />
      {errors.name && (
        <Text style={{color: Color.danger}}>{errors.name.message}</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
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
          <TextInput
            style={textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Soyisim"
          />
        )}
        name="lastname"
      />
      {errors.lastname && (
        <Text style={{color: 'red'}}>{errors.lastname.message}</Text>
      )}
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onBlur, onChange, value}}) => (
          <TextInput
            style={textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Kullanıcı Adı"
          />
        )}
        name="username"
      />
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onBlur, onChange, value}}) => (
          <TextInput
            style={textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Şifre"
            secureTextEntry
          />
        )}
        name="password"
      />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^(?:\+90|90)(\d{10})$/,
            message: 'Telefon numarası +90 veya 90 ile başlamalıdır.',
          },
        }}
        render={({field: {onBlur, onChange, value}}) => (
          <TextInput
            style={textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value ? value.toString() : ''}
            placeholder="Cep Telefonu"
            keyboardType="phone-pad"
          />
        )}
        name="phone"
      />
      {errors.phone && (
        <Text style={{color: 'red'}}>{errors.phone.message}</Text>
      )}
      <View style={customButton}>
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
