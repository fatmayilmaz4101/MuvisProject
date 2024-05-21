import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../MovieList/movieList.styles';
import {useNavigation} from '@react-navigation/native';
import CustomLoading from '../../components/CustomLoading/CustomLoading';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

export interface MovieType {
  id: number;
  title: string;
  thumbnailUrl: string;
}

const Deneme = () => {
  const navigation = useNavigation<any>();

  const fetchMovies = async (): Promise<MovieType[]> => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/photos',
    );
    return response.data;
  };

  const {
    data: movies,
    isLoading,
    error,
  } = useQuery<MovieType[], Error>({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });

  const handlePress = (item: MovieType) => {
    navigation.navigate('MovieDetail', {movie: item});
  };

  const moviesEmptyComponent = () => (
    <View style={styles.centered}>
      {error ? (
        <Text style={styles.errorText}>Error: {error.message}</Text>
      ) : (
        <Text>No movies available.</Text>
      )}
    </View>
  );

  const renderItem = ({item}: {item: MovieType}) => {
    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={styles.itemContainer}>
          <Image source={{uri: item.thumbnailUrl}} style={styles.movieImg} />
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {isLoading ? (
        <CustomLoading isLoading={true} text="Yükleniyor" />
      ) : (
        <FlatList
          style={styles.listContainer}
          data={movies}
          keyExtractor={({id}) => id.toString()}
          renderItem={renderItem}
          initialNumToRender={10}
          ListEmptyComponent={moviesEmptyComponent}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
};
export default Deneme;
