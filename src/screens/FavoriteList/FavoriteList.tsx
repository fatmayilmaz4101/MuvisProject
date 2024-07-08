import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './favoriteList.style';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import {MovieType} from '../../types';
import {useNavigation} from '@react-navigation/native';

const FavoriteList = () => {
  const navigation = useNavigation<any>();
  const {favorites} = useSelector((state: RootState) => state.favori);

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
      <Text style={styles.categoryTitle}>Favorilerim</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={favorites}
        renderItem={renderItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
export default FavoriteList;
