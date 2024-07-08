import React from 'react';
import {Image, SafeAreaView, View, FlatList} from 'react-native';
import {styles} from './categoryDetail.style';
import {Text} from 'react-native-paper';
import {MovieType} from '../../types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const CategoryDetail = ({route}: any) => {
  const navigation = useNavigation<any>();
  const {name, movies} = route?.params.category || {};

  const handlePress = (item: MovieType) => {
    navigation.navigate('MovieDetail', {movie: item});
  };

  const renderItem = ({item}: {item: MovieType}) => (
    <View style={styles.movieContainer}>
      <TouchableOpacity onPress={() => handlePress(item)}>
        <Image source={{uri: item.src}} style={styles.movieImage} />
        <Text style={styles.movieTitle}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.categoryTitle}>{name}</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={movies}
        renderItem={renderItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default CategoryDetail;
