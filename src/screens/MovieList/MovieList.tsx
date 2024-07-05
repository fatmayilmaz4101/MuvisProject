import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../MovieList/movieList.styles";
import { Dimensions, Image, ImageSourcePropType, ScrollView, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useCategories } from "../../hooks/useCategories"; 
import { CategoryType, MovieType } from "../../types";
import CustomLoading from "../../components/CustomLoading/CustomLoading";
import { useMovies } from "../../hooks/useMovie";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Button } from "react-native-paper";

const {width: viewportWidth} = Dimensions.get('window');
interface Director {  
  name: string;
  imageUrl: ImageSourcePropType;
}

const datas: Director[] = [
  {name: 'Yılmaz', imageUrl: require('../../../assets/images/bojack-horseman-avatar.jpg')},
  {name: 'Yılmaz Erdoğan', imageUrl: require('../../../assets/images/boss-baby-avatar.png'),  },
  {name: 'Yılmaz Erdoğan', imageUrl: require('../../../assets/images/jworld-avatar.png'),  },
  {name: 'Erdoğan', imageUrl: require('../../../assets/images/shera-avatar.jpg'),  },
  {name: 'Yılmaz Erdoğan', imageUrl: require('../../../assets/images/rick-avatar.png'),  }
];

const MovieList = () => {
  const navigation = useNavigation<any>();

  const carouselRef = useRef<Carousel<any>>(null);
  const {data: categories=[], isLoading, error, refetch} = useCategories();
  
  const renderMovieItem = ({ item }: { item: MovieType }) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.slide}>
      <Image source={typeof item.src === 'string' ? { uri: item.src } : item.src} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  const handlePress = (item: MovieType) => {
    navigation.navigate('MovieDetail', {movie: item});
  };
  const handleDetailPress = (item: CategoryType) => {
    navigation.navigate('CategoryDetail', {category: item});

  }
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <CustomLoading  isLoading={isLoading} text="Yükleniyor"/>
        <Text>Yükleni</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Hata oluştu. Lütfen tekrar deneyin.</Text>
        <Button onPress={()=>refetch()}>Tekrar Dene</Button>
      </View>
    );
  }

    return(
      <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
      {categories.map((category: CategoryType) => (
          <View key={category.id}>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.categoryTitle}>{category.name}</Text>
            <Button style={styles.categoryTitleDetail} labelStyle={styles.categoryTitleDetailText} icon="chevron-double-right" mode="text" onPress={() => handleDetailPress(category)}>
            Tümüne göz at
            </Button>
            </View>
            {Array.isArray(category.movies) && category.movies.length > 0 ? (
              <Carousel
                ref={carouselRef}
                data={category.movies}
                renderItem={renderMovieItem}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth * 0.8}
                layout="default"
              />
            ) : (
              <Text style={{ marginLeft: 25 }}>Bu kategoride film bulunmamaktadır.</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
)};
export default MovieList;