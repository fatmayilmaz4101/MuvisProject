import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, Text, View} from 'react-native';
import {UseCategories} from '@hooks/UseCategories';
import {CarouselDataType, CategoryType} from '@utilities/Types';
import CustomLoading from '@components/loading/Loading';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import CustomCarousel from '@components/carousel/Carousel';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/Store';
import {getThemeColor} from '@utilities/Color';
import { styles } from './MovieList.styles';

const MovieList = () => {
  const navigation = useNavigation<any>();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  const {data: categories = [], isLoading, error, refetch} = UseCategories();

  const handlePress = (item: CarouselDataType) => {
    navigation.navigate('MovieDetail', {movie: item});
  };
  const handleDetailPress = (item: CategoryType) => {
    navigation.navigate('CategoryDetail', {category: item});
  };
  if (isLoading) {
    return (
      <View
        style={[
          styles.loadingContainer,
          {backgroundColor: themeColors.background},
        ]}>
        <CustomLoading isLoading={isLoading} text="Yükleniyor" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Hata oluştu. Lütfen tekrar deneyin.</Text>
        <Button onPress={() => refetch()}>Tekrar Dene</Button>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={[styles.mainContainer, {backgroundColor: themeColors.background}]}>
      <ScrollView>
        {categories.map((category: CategoryType) => (
          <View key={category.id}>
            <View style={styles.allMovies}>
              <Text
                style={[styles.categoryTitle, {color: themeColors.titleColor}]}>
                {category.name}
              </Text>
              <Button
                style={styles.categoryTitleDetail}
                labelStyle={styles.categoryTitleDetailText}
                icon="chevron-double-right"
                mode="text"
                onPress={() => handleDetailPress(category)}>
                Tümüne göz at
              </Button>
            </View>
            {Array.isArray(category.movies) && category.movies.length > 0 ? (
              <CustomCarousel
                data={category.movies}
                handlePress={handlePress}
                loop={true}
                layout="default"
              />
            ) : (
              <Text style={styles.errorText}>
                Bu kategoride film bulunmamaktadır.
              </Text>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default MovieList;
