import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../MovieList/movieList.styles";
import { MovieType, fetchMovies } from "../../redux/actions/movieActions";
import { useNavigation } from "@react-navigation/native";
import CustomLoading from "../../components/CustomLoading/CustomLoading";

const MovieList = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<any>();
    const { movies, loading, error } = useSelector((state:RootState) => state.movies);

    useEffect(() => {
        dispatch(fetchMovies());
      }, [dispatch]);
      
      const handlePress = (item: MovieType) => {
        navigation.navigate('MovieDetail', {movie: item});
      };
      const moviesEmptyComponent = () => (
        <View style={styles.centered}>
        {error ? (
          <Text style={styles.errorText}>Error: {error}</Text>
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
              <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      };

    return(
        <SafeAreaView style={styles.mainContainer}>
        {loading ? <CustomLoading isLoading={true} text="Yükleniyor"/> : (
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
export default MovieList;