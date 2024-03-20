import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {Button, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton/CustomButton';
import { styles } from './profile.style';
interface FormInput {
  username: string;
  password: string;
  phone: number;
}
const Profile = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = data => {
    console.log(data);
  };
  return (
    <SafeAreaView>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              marginBottom: 10,
              padding: 10,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Kullanıcı Adı"
          />
        )}
        name="username"
        rules={{required: true}}
      />
      {errors.username && <Text>Username alanı zorunludur.</Text>}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              marginBottom: 10,
              padding: 10,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Şifre"
          />
        )}
        name="password"
        rules={{required: true}}
      />
      {errors.password && <Text>Password alanı zorunludur.</Text>}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              marginBottom: 10,
              padding: 10,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value ? value.toString() : ''}
            placeholder="Cep Telefonu"
            keyboardType="numeric"
          />
        )}
        name="phone"
        rules={{required: true}}
      />
      {errors.phone && <Text>Telefon numarası alanı zorunludur.</Text>}
        <View style={styles.customButton}>
            <CustomButton title='Güncelle' onPress={handleSubmit(onSubmit)} type='menu' />
        </View>
    </SafeAreaView>
  );
};
export default Profile;
