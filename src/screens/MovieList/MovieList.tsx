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
const {itemContainer, title, emptyContainer, emptyText, container, movieImg} =
  styles;
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
      }, 2000);
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
    // 30'dan büyükse ilk 30 karakteri al ... ekle, aksi halde title olduğu gibi kalsın.

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
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          style={container}
          data={data}
          keyExtractor={({id}) => id.toString()}
          renderItem={RenderItem}
          ListEmptyComponent={MoviesEmptyComponent}
          initialNumToRender={10} //ilk etapta 10 öğe render edilir
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
};
export default MovieList;
