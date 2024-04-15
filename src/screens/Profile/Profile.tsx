import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {TextInput, View, SafeAreaView} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import { styles } from './profile.style';
import { useUser } from '../../contexts/UserContext';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

interface FormInput {
  username: string;
  password: string;
  phone: number;
}
const Profile = () => {
  const { updateForm, customButton, textInput } = styles;
  const { user, setUser } = useUser();
  const { control, handleSubmit } = useForm<FormInput>();
  const navigation = useNavigation<any>();
  
  const onSubmit: SubmitHandler<FormInput> = async data => {
    const updatedUserData = {
      userName: data.username, 
      password: data.password, 
      phone: data.phone,
    };
    setUser(updatedUserData);
    console.log('Kullanıcı güncellendi:', updatedUserData);
    navigation.navigate('Login');
  };
  
  useEffect(() => {
    console.log('Güncellenmiş user nesnesi:', user);
  }, [user]);
  
  return (
    <SafeAreaView style={updateForm}>
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
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
        render={({ field: { onBlur, onChange, value } }) => (
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
          render={({field: {onBlur, onChange, value}}) => (
            <TextInput
              style={textInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value ? value.toString() : ''}
              placeholder="Cep Telefonu"
              placeholderTextColor="gray"
              keyboardType='numeric'
            />
          )}
          name="phone"
        />
      <View style={customButton}>
        <CustomButton title='Güncelle' onPress={handleSubmit(onSubmit)} type='menu' />
      </View>
    </SafeAreaView>
  );
};
export default Profile;
