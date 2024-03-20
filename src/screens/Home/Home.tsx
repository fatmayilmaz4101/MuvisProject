import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useUser} from '../../contexts/UserContext';
import {styles} from './home.styles';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../../components/Color/Color';
const {textStyle, greetingText, homeButtons, homeScreen} = styles;
const Home = () => {
  const navigation = useNavigation<any>();
  const {user} = useUser();
  const onPressSayac = () => navigation.navigate('Counter');
  const onPressMovieList = () => navigation.navigate('MovieList');
  return (
    <SafeAreaView style={homeScreen}>
      <View style={textStyle}>
        <Text style={greetingText}> Hoşgeldin {user.userName}! </Text>
      </View>
      <View style={homeButtons}>
        <CustomButton title="Sayaç" onPress={onPressSayac} type="menu" />
        <CustomButton
          title="Film Listesi"
          onPress={onPressMovieList}
          type="menu"
        />
        <Icon name="person" size={40} color={Color.light}/>
      </View>
    </SafeAreaView>
  );
};

export default Home;
