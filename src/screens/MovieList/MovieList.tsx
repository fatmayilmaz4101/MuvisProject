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
const {itemContainer, title, emptyContainer, emptyText, container, movieImg} =
  styles;
type Movie = {
  id: number;
  title: string;
  thumbnailUrl: string;
};
const RenderItem = ({item}: {item: Movie}) => (
  <View style={itemContainer}>
    <Image source={{uri: item.thumbnailUrl}} style={movieImg} />
    <Text style={title}>{item.id}</Text>
    <Text style={title}>{item.title}</Text>
  </View>
);
const MoviesEmptyComponent = () => (
  <View style={emptyContainer}>
    <Text style={emptyText}>Liste Boş</Text>
  </View>
);

const MovieList = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
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
      }, 2000);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <SafeAreaView>
      <View style={container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}) => id.toString()}
            renderItem={RenderItem}
            ListEmptyComponent={MoviesEmptyComponent}
            initialNumToRender={10} //ilk etapta 10 öğe render edilir
          />
        )}
      </View>
    </SafeAreaView>
  );
};
export default MovieList;
