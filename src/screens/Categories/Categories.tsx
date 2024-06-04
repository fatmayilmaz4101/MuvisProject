import React, { useRef } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { styles } from './categories.styles';

const { width: viewportWidth } = Dimensions.get('window');

interface Category {
  id: number;
  title: string;
  imageUrl: string;
}
const categories: Category[] = [
  { id: 1, title: 'Dram', imageUrl: 'https://source.unsplash.com/1024x768/?movie' },
  { id: 2, title: 'Aksiyon', imageUrl: 'https://source.unsplash.com/1024x768/?actor' },
  { id: 3, title: 'Korku', imageUrl: 'https://source.unsplash.com/1024x768/?harry-potter' },
];
const renderItem = ({ item }: { item: Category }) => (
  <View style={styles.slide}>
    <Image source={{ uri: item.imageUrl }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  </View>
);
const Categories = () => {
  const carouselRef = useRef<Carousel<any>>(null);
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={categories}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth * 0.8}
        layout="stack"
      />
    </View>
  );
};
export default Categories;
