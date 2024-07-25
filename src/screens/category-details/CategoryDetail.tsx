import React from 'react';
import {Image, SafeAreaView, View, FlatList} from 'react-native';
import {styles} from './CategoryDetail.style';
import {Text} from 'react-native-paper';
import {MovieType} from '@utilities/Types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {getThemeColor} from '@utilities/Color';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/Store';

const CategoryDetail = ({route}: any) => {
  const navigation = useNavigation<any>();
  const {name, movies} = route?.params.category || {};

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
      <Text style={[styles.categoryTitle, {color: themeColors.titleColor}]}>
        {name}
      </Text>
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
