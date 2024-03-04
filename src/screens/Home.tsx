import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useUser} from '../contexts/UserContext';
import {styles} from '../styles/home.styles';

const Home: React.FC = () => {
  const {user} = useUser();
  const {textStyle, greetingText} = styles;

  return (
    <SafeAreaView>
      <View style={textStyle}>
        <Text style={greetingText}> Hoşgeldin {user.userName}! </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
