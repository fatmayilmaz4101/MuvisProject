import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from './home.styles';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigation = useNavigation<any>();
  const login = useSelector((state:RootState)=>state.user)
  const onPressSayac = () => navigation.navigate('Counter');
  const onPressMovieList = () => navigation.navigate('MovieList');
  const onPressMovieStars = () => navigation.navigate('MovieStars');
  const Deneme = () => navigation.navigate('Deneme');

  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.textStyle}>
        <Text style={styles.greetingText}> Hoşgeldin {login.login.userName}! </Text>
      </View>
      <View style={styles.homeButtons}>
        <CustomButton title="Sayaç" onPress={onPressSayac} type="menu" />
        <CustomButton
          title="Film Listesi"
          onPress={onPressMovieList}
          type="menu"
        />
        <CustomButton
          title="Film Yıldızları"
          onPress={onPressMovieStars}
          type="menu"
        />
        <CustomButton
          title="Deneme"
          onPress={Deneme}
          type="menu"
        />
      </View> 
    </SafeAreaView>
  );
};

export default Home;
