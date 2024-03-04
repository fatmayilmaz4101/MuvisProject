import React, {useState} from 'react';
import {SafeAreaView, View, TextInput, Button, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';
import {styles} from '../styles/login.styles';

const Login = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const {setUser} = useUser();
  const {container, center, input, image, errorMessage} = styles;
  const navigation = useNavigation<any>();

  const handleLogin = () => {
    if (!userName || !password) {
      setError('Kullanıcı adı veya şifre boş bırakılamaz.');
      return;
    }

    setError(''); //reset error if password and username are not empty
    setUser({userName, password});
    console.log('Kullanıcı Adı:', userName);
    console.log('Şifre:', password);

    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={container}>
      <View style={center}>
        <Image source={require('../../assets/muvis-logo.jpg')} style={image} />

        <TextInput
          style={input}
          placeholderTextColor="gray"
          placeholder="Kullanıcı Adı"
          onChangeText={text => setUserName(text)}
        />
        <TextInput
          style={input}
          placeholderTextColor="gray"
          placeholder="Şifre"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <Text style={errorMessage}>{error}</Text>
        <Button color="#169D6B" title="Giriş Yap" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
