import {useRef} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {CarouselDataType, CarouselType} from '../../utilities/Types';
import {Text} from 'react-native-paper';
import {styles} from './Carousel.style';
import {useSelector} from 'react-redux';
import {getThemeColor} from '../../utilities/Color';
import { RootState } from '../../redux/Store';

const {width: viewportWidth} = Dimensions.get('window');

const GenericCarousel = ({
  data,
  layout,
  handlePress,
  loop,
}: CarouselType) => {
  const carouselRef = useRef<Carousel<any>>(null);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  const renderItem = ({item}: {item: CarouselDataType}) => (
    <TouchableOpacity
      onPress={() => handlePress(item)}
      style={[
        styles.slide,
        {
          backgroundColor: themeColors.cardBottom,
          shadowColor: themeColors.cardBottom,
        },
      ]}>
      <Image
        source={typeof item.src === 'string' ? {uri: item.src} : item.src}
        style={[styles.image, {backgroundColor: themeColors.cardBottom}]}
      />
      <View
        style={[
          styles.textContainer,
          {backgroundColor: themeColors.cardBottom},
        ]}>
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
export default GenericCarousel;
