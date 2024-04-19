import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import {styles} from './movieList.styles.ts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const {
  itemContainer,
  title,
  emptyContainer,
  emptyText,
  listContainer,
  movieImg,
  activityIndicator,
  mainContainer,
} = styles;
type Movie = {
  id: number;
  title: string;
  thumbnailUrl: string;
};

const MoviesEmptyComponent = () => (
  <View style={emptyContainer}>
    <Text style={emptyText}>Liste Boş</Text>
  </View>
);

const MovieList = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<any>();

  const getTodos = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handlePress = (item: Movie) => {
    navigation.navigate('MovieDetail', {movie: item});
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderItem = ({item}: {item: Movie}) => {
    const newTitle =
      item.title.length > 30 ? `${item.title.slice(0, 35)}...` : item.title;

    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={itemContainer}>
          <Image source={{uri: item.thumbnailUrl}} style={movieImg} />
          <Text style={title}>{newTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={mainContainer}>
      {loading ? (
        <View style={activityIndicator}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          style={listContainer}
          data={data}
          keyExtractor={({id}) => id.toString()}
          renderItem={RenderItem}
          ListEmptyComponent={MoviesEmptyComponent}
          initialNumToRender={10}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
};
export default MovieList;
