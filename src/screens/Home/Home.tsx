import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './home.styles';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import CustomAvatar from '../../components/CustomAvatar/CustomAvatar';
import { useNavigation } from '@react-navigation/native';
import { DirectorType, MovieType } from '../../types';
import { useDirector } from '../../hooks/useDirectors';
import { useMovies } from '../../hooks/useMovie';

const {width: viewportWidth} = Dimensions.get('window');

const getRandomMovies = (movies: MovieType[], count: number) => {
  const shuffled = movies.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Home = () => {
  const [randomMovies, setRandomMovies] = useState<MovieType[]>([]);
  const navigation = useNavigation<any>();
  const login = useSelector((state: RootState) => state.user);
  const { data: movies = [], isLoading, error, refetch } = useMovies();

  const carouselRef = useRef<Carousel<any>>(null);
  const {data: directors=[]} = useDirector()

  const handlePress = (item: MovieType) => {
    navigation.navigate('MovieDetail', { movie: item });
  };
  
    const handleAvatarPress = (item: DirectorType) => {
    console.log(`${item.name} avatarına tıklandı`);
    navigation.navigate('DirectorsDetail', {directors: item});
  };

  useEffect(() => {
    if (movies.length > 0) {
      setRandomMovies(getRandomMovies(movies, 3));
    }
  }, [movies]);

  const renderMovieItem = ({ item }: { item: MovieType }) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.slide}>
      <Image source={typeof item.src === 'string' ? { uri: item.src } : item.src} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderAvatar = ({item}: {item: DirectorType}) => {
    return (
      <TouchableOpacity onPress={() => handleAvatarPress(item)}>
        <View style={styles.avatarOption}>
          <CustomAvatar style={[styles.avatarOption]} size={80} source={{uri: item.src}} />
          <Text style={styles.directorName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.homeScreen}>
      <View>
      <Text style={styles.welcomeMessage}>
        {login.login.userName}, senin için seçtiklerimize göz at
      </Text>
      <Carousel
        ref={carouselRef}
        data={randomMovies}
        renderItem={renderMovieItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth * 0.8}
        layout="default"
      />
      </View>
      <Text style={styles.welcomeMessage}>En Beğenilen Yönetmenler</Text>
      <View style={styles.directorAvatar}>
        <FlatList
          data={directors}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={renderAvatar}
          key={(3).toString()} // key propunu eklenerek bileşeni yeniden render etme zorlandı
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
