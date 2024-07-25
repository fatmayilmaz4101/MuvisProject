import {SafeAreaView} from 'react-native-safe-area-context';
import CustomAvatar from '@components/avatar/Avatar';
import {Text} from 'react-native-paper';
import {styles} from './Director.Detail.style';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {MovieType} from '@utilities/Types';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utilities/Color';
import {RootState} from '@redux/Store';

const DirectorsDetail = ({route}: any) => {
  const navigation = useNavigation<any>();
  const {name, src, movies} = route?.params?.directors || {};
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  const handlePress = (item: MovieType) => {
    navigation.navigate('MovieDetail', {movie: item});
  };

  const renderItem = ({item}: {item: MovieType}) => (
    <View style={styles.movieContainer}>
      <TouchableOpacity onPress={() => handlePress(item)}>
        <Image source={{uri: item.src}} style={styles.movieImage} />
        <Text style={[styles.movieTitle, {color: themeColors.titleColor}]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.mainContainer, {backgroundColor: themeColors.background}]}>
      <View style={styles.directorStyle}>
        <CustomAvatar size={80} source={{uri: src}} />
        <Text style={[styles.directorName, {color: themeColors.titleColor}]}>
          {name}
        </Text>
      </View>
      <View style={styles.movieStyle}>
        <FlatList
          keyExtractor={index => index.toString()}
          data={movies}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};
export default DirectorsDetail;
