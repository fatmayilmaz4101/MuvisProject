import {useRef} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {CarouselDataType, CustomCarouselType} from '../../types';
import {Text} from 'react-native-paper';
import {styles} from './customCarousel.style';

const {width: viewportWidth} = Dimensions.get('window');

const CustomCarousel = ({
  data,
  layout,
  handlePress,
  loop,
}: CustomCarouselType) => {
  const carouselRef = useRef<Carousel<any>>(null);

  const renderItem = ({item}: {item: CarouselDataType}) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.slide}>
      <Image
        source={typeof item.src === 'string' ? {uri: item.src} : item.src}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth * 0.8}
        layout={layout}
        loop={loop}
      />
    </SafeAreaView>
  );
};
export default CustomCarousel;
