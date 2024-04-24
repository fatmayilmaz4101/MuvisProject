import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useUser} from '../../contexts/UserContext';
import {styles} from './home.styles';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';

const Home = () => {
  const navigation = useNavigation<any>();
  const {user} = useUser();
  
  const onPressSayac = () => navigation.navigate('Counter');
  const onPressMovieList = () => navigation.navigate('MovieList');
  const onPressMovieStars = () => navigation.navigate('MovieStars');

  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.textStyle}>
        <Text style={styles.greetingText}> Hoşgeldin {user.userName}! </Text>
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
      </View> 
    </SafeAreaView>
  );
};

export default Home;
