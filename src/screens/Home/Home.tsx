import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './home.styles';
import Carousel from 'react-native-snap-carousel';
import CustomAvatar from '../../components/CustomAvatar/CustomAvatar';
import {useNavigation} from '@react-navigation/native';
import {DirectorType, MovieType} from '../../types';
import {useDirector} from '../../hooks/useDirectors';
import {useMovies} from '../../hooks/useMovie';

const {width: viewportWidth} = Dimensions.get('window');

const getRandomMovies = (movies: MovieType[], count: number) => {
  const shuffled = movies.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Home = ({route}: any) => {
  const navigation = useNavigation<any>();
  const {firstName} = route?.params || {};
  const carouselRef = useRef<Carousel<any>>(null);
  const [randomMovies, setRandomMovies] = useState<MovieType[]>([]);
  const {data: directors = []} = useDirector();
  const {data: movies = []} = useMovies();

  useEffect(() => {
    if (movies.length > 0) {
      setRandomMovies(getRandomMovies(movies, 3));
    }
  }, [movies]);

  const handlePress = (item: MovieType) => {
    navigation.navigate('MovieDetail', {movie: item});
  };

  const handleAvatarPress = (item: DirectorType) => {
    navigation.navigate('DirectorsDetail', {directors: item});
    console.log(route.params);
  };

  const renderMovieItem = ({item}: {item: MovieType}) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.slide}>
      <Image
        source={typeof item.src === 'string' ? {uri: item.src} : item.src}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderAvatar = ({item}: {item: DirectorType}) => {
    return (
      <TouchableOpacity onPress={() => handleAvatarPress(item)}>
        <View style={styles.avatarOption}>
          <CustomAvatar
            style={[styles.avatarOption]}
            size={80}
            source={{uri: item.src}}
          />
          <Text style={styles.directorName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.homeScreen}>
      <View>
        <Text style={styles.welcomeMessage}>
          {firstName}, senin için seçtiklerimize göz at
        </Text>
        <Carousel
          ref={carouselRef}
          data={randomMovies}
          renderItem={renderMovieItem}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth * 0.8}
          layout="stack"
        />
      </View>
      <Text style={styles.welcomeMessage}>En Beğenilen Yönetmenler</Text>
      <View style={styles.directorAvatar}>
        <FlatList
          data={directors}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={renderAvatar}
          key={(3).toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
