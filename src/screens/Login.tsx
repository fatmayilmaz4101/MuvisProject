import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, Image, StyleSheet, Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigatorParamsList } from '../components/Tabs';



const Login: React.FC = () => {
  const { container, center, input, image, errorMessage } = styles;
  const navigation = useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Kullanıcı adı veya şifre boş bırakılamaz.');
      return;
    }
    setError(''); //reset error if password and username are not empty 
    console.log('Kullanıcı Adı:', username);
    console.log('Şifre:', password);
    navigation.navigate('Home', { userName: username });
  };

  return (
    <SafeAreaView style={container}>
      <View style={center}>
        <Image
          source={require('../../assets/muvis-logo.jpg')}
          style={image}
        />

        <TextInput
          style={input}
          placeholderTextColor="gray"
          placeholder="Kullanıcı Adı"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={input}
          placeholderTextColor="gray"
          placeholder="Şifre"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={errorMessage}>{error}</Text>
        <Button color="#169D6B" title="Giriş Yap" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F1E21',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
    width: '75%',
  },
  image: {
    width: 100, 
    height: 100, 
    marginBottom: 20,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
