import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../MovieList/movieList.styles';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useCategories} from '../../hooks/useCategories';
import {CarouselDataType, CategoryType, MovieType} from '../../types';
import CustomLoading from '../../components/CustomLoading/CustomLoading';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getThemeColor } from '../../color';


const MovieList = () => {
  const navigation = useNavigation<any>();
  const theme = useSelector((state:RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  const {data: categories = [], isLoading, error, refetch} = useCategories();

  const handlePress = (item: CarouselDataType) => {
    navigation.navigate('MovieDetail', {movie: item});
  };
  const handleDetailPress = (item: CategoryType) => {
    navigation.navigate('CategoryDetail', {category: item});
  };
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
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
    <SafeAreaView style={[styles.mainContainer, {backgroundColor: themeColors.background}]}>
      <ScrollView>
        {categories.map((category: CategoryType) => (
          <View key={category.id}>
            <View style={styles.allMovies}>
              <Text style={[styles.categoryTitle,{color: themeColors.titleColor}]}>{category.name}</Text>
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
              layout='default'
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
