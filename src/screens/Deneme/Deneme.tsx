import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../MovieList/movieList.styles";
import { MovieType } from "../../redux/actions/movieActions";
import { useNavigation } from "@react-navigation/native";
import CustomLoading from "../../components/CustomLoading/CustomLoading";
import { useMovies } from "../../hooks/useMovie";
import { useNetInfo } from "@react-native-community/netinfo";


const Deneme = () => {
    const navigation = useNavigation<any>();

    const {data: movies, isLoading, error, refetch} = useMovies();

    const { type, isConnected } = useNetInfo();
    
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

        console.log(isConnected)
        useEffect(() => {
          (async()=>{
            if(isConnected && !movies){
              await refetch()
            }
          })()
        },[isConnected])
      
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
        {isLoading ? <CustomLoading isLoading={true} text="Yükleniyor"/> : (
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