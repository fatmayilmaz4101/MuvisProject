import { RouteProp } from '@react-navigation/native';
import React, { useContext } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { RootStackNavigatorParamsList } from '../components/Tabs';
import { UserContext, useUser } from '../contexts/UserContext';
import { styles } from '../styles/home.styles';

type HomeRouteProp = RouteProp<RootStackNavigatorParamsList, 'Home'>;

type HomeProps = {
  route: HomeRouteProp;
};

const Home: React.FC<HomeProps> = ({ route }) => {
  const { user } = useUser();
  const { textStyle, greetingText } = styles;

  return (
    <SafeAreaView>
      <View style={styles.textStyle}>
        <Text style={styles.greetingText}> Hoşgeldin {user.userName}! </Text>
      </View>
    </SafeAreaView>
  );
};


export default Home;
