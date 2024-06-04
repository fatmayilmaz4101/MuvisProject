import React, { useMemo, useRef, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { styles } from './home.styles';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import CustomBottomSheet, { BottomSheetRef } from '../../components/CustomBottomSheet/CustomBottomSheet';

const Home = () => {
  const navigation = useNavigation<any>();
  const login = useSelector((state: RootState) => state.user);

  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const welcomeMessage = useRef<BottomSheetRef>(null);

  useEffect(() => {
    if (login && login.login.userName) {
      welcomeMessage.current?.present();
    }
  }, [login]);

  const onPressSayac = () => navigation.navigate('Counter');
  const onPressMovieList = () => navigation.navigate('MovieList');
  const onPressMovieStars = () => navigation.navigate('MovieStars');
  const onPressDeneme = () => navigation.navigate('Deneme');

  return (
    <SafeAreaView style={styles.homeScreen}>
      <SafeAreaView style={styles.container}>
        <View style={styles.homeButtons}>
          <CustomButton title="Sayaç" onPress={onPressSayac} type="menu" />
          <CustomButton title="Film Listesi" onPress={onPressMovieList} type="menu" />
          <CustomButton title="Film Yıldızları" onPress={onPressMovieStars} type="menu" />
          <CustomButton title="TansStack Query Deneme" onPress={onPressDeneme} type="menu" />
        </View>

        <CustomBottomSheet ref={welcomeMessage} snapPoints={snapPoints}>
          <View style={styles.textStyle}>
          <Text style={styles.greetingText}>Hoşgeldin {login.login.userName}!</Text>
          </View>
        </CustomBottomSheet>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Home;
