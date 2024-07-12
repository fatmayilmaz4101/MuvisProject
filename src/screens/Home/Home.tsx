import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './home.styles';
import CustomAvatar from '../../components/CustomAvatar/CustomAvatar';
import {useNavigation} from '@react-navigation/native';
import {CarouselDataType, DirectorType, MovieType} from '../../types';
import {useDirector} from '../../hooks/useDirectors';
import {useMovies} from '../../hooks/useMovie';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { getThemeColor } from '../../color';
import AsyncStorage from '@react-native-async-storage/async-storage';


const getRandomMovies = (movies: MovieType[], count: number) => {
  const shuffled = movies.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};


const Home = ({route}: any) => {
  const navigation = useNavigation<any>();
  const {firstName} = route?.params || {};
  const [randomMovies, setRandomMovies] = useState<MovieType[]>([]);
  const {data: directors = []} = useDirector();
  const {data: movies = []} = useMovies();
  const theme = useSelector((state:RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  useEffect(() => {
    const setFirstName = async () => {
      if (route?.params?.firstName) {
        const { firstName } = route.params;
        await AsyncStorage.setItem('firstName', firstName);
      } 
    };
    setFirstName();
  }, [route]);


  useEffect(() => {
    if (movies.length > 0) {
      setRandomMovies(getRandomMovies(movies, 3));
    }
  }, [movies]);

  const handlePress = (item: CarouselDataType) => {
    navigation.navigate('MovieDetail', {movie: item});
  };

  const handleAvatarPress = (item: DirectorType) => {
    navigation.navigate('DirectorsDetail', {directors: item});
    console.log(route.params);
  };


  const renderAvatar = ({item}: {item: DirectorType}) => {
    return (
      <TouchableOpacity onPress={() => handleAvatarPress(item)}>
        <View style={styles.avatarOption}>
          <CustomAvatar
            style={[styles.avatarOption]}
            size={80}
            source={{uri: item.src}}
          />
          <Text style={[styles.directorName, {color: themeColors.titleColor}]}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={[styles.homeScreen, {backgroundColor:themeColors.background}]}>
      <View>
        <Text style={[styles.welcomeMessage, {color: themeColors.titleColor}]}>
          {firstName}, senin için seçtiklerimize göz at
        </Text>
        <CustomCarousel
        data={randomMovies}
        handlePress={handlePress}
        layout='stack'
        loop={true}
        />
      </View>
      
      <Text style={[styles.welcomeMessage, {color: themeColors.titleColor}]}>En Beğenilen Yönetmenler</Text>
      <View style={styles.directorAvatar}>
        <FlatList
          data={directors}
          keyExtractor={(index) => index.toString()}
          numColumns={3}
          renderItem={renderAvatar}
          key={(3).toString()}
        />
      </View>

    </SafeAreaView>
  );
};

export default Home;
