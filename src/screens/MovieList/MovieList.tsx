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
import { Color } from '../../utilities/Color.ts';

type Movie = {
  id: number;
  title: string;
  thumbnailUrl: string;
};

const moviesEmptyComponent = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>Liste Boş</Text>
  </View>
);

const MovieList = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
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
  const renderItem = ({item}: {item: Movie}) => {
    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={styles.itemContainer}>
          <Image source={{uri: item.thumbnailUrl}} style={styles.movieImg} />
          <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {loading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color={Color.Info} />
        </View>
      ) : (
        <FlatList
          style={styles.listContainer}
          data={data}
          keyExtractor={({id}) => id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={moviesEmptyComponent}
          initialNumToRender={10}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
};
export default MovieList;
