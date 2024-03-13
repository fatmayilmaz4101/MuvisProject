import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useUser} from '../../contexts/UserContext';
import {styles} from './home.styles';
import {useNavigation} from '@react-navigation/native';
import {CustomButton} from '../../components/CustomButton/CustomButton';
const {textStyle, greetingText, homeButtons, homeScreen} = styles;

const Home = () => {
  const navigation = useNavigation<any>();
  const {user} = useUser();
  return (
    <SafeAreaView style={homeScreen}>
      <View style={textStyle}>
        <Text style={greetingText}> Hoşgeldin {user.userName}! </Text>
      </View>
      <View style={homeButtons}>
        <CustomButton
          title="Sayaç"
          onPress={() => navigation.navigate('Counter')}
        />
        <CustomButton
          title="Film Listesi"
          onPress={() => navigation.navigate('MovieList')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
