import { RouteProp } from '@react-navigation/native';
import React, { useContext } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { RootStackNavigatorParamsList } from '../components/Tabs';
import { UserContext, useUser } from '../contexts/UserContext';

type HomeRouteProp = RouteProp<RootStackNavigatorParamsList, 'Home'>;

type HomeProps = {
    route: HomeRouteProp;
  };

const Home: React.FC<HomeProps> = ({ route }) => {
  const { user } = useUser();

    return (
    <SafeAreaView>
      <View style={styles.textStyle}>
        <Text style={styles.greetingText}> Hoşgeldin {user.userName}! </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#169D6B',
    marginTop: 20,
  },
});

export default Home;
