import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './favoriteList.style';
import {RootState, useAppDispatch} from '../../redux/store';
import {useSelector} from 'react-redux';
import {MovieType} from '../../types';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color } from '../../utilities/Color';
import { removeFromFavorites } from '../../redux/actions/favoriteActions';

const FavoriteList = () => {
  const navigation = useNavigation<any>();
  const {favorites} = useSelector((state: RootState) => state.favori);
  const dispatch = useAppDispatch();

  const handlePress = (item: MovieType) => {
    navigation.navigate('MovieDetail', {movie: item});
  };
  const handleIconPress = (item:MovieType) => {
    dispatch(removeFromFavorites(item.id));

  };

  const renderItem = ({item}: {item: MovieType}) => (
    <View style={styles.movieContainer}>
      <TouchableOpacity onPress={() => handlePress(item)}>
        <Ionicons onPress={() => handleIconPress(item)} style={styles.closeIcon} name="close" size={24} color={Color.Danger} />
        <Image source={{uri: item.src}} style={styles.movieImage} />
        <Text style={styles.movieTitle}>{item.name}</Text>

      </TouchableOpacity>
    </View>
  );
  const FavoriEmptyComponent = () => {
    return (
      <SafeAreaView>
        <Text style={styles.emptyCompText}>
          Favori filminiz bulunmamaktadır.
        </Text>
      </SafeAreaView>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.categoryTitle}>Favorilerim</Text>
      <FlatList
        keyExtractor={index => index.toString()}
        data={favorites}
        renderItem={renderItem}
        numColumns={2}
        ListEmptyComponent={FavoriEmptyComponent}
      />
      <TouchableOpacity>
        <Ionicons name="menu" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default FavoriteList;
