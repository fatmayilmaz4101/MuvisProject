import React from 'react';
import {Dimensions, View, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {styles} from './movieStars.style';

const MovieStars = () => {
  const images = [
    'https://source.unsplash.com/1024x768/?movie',
    'https://source.unsplash.com/1024x768/?actor',
    'https://source.unsplash.com/1024x768/?harry-potter',
    'https://source.unsplash.com/1024x768/?wednesday-addams',
  ];
  const width = Dimensions.get('window').width;
  return (
    <View style={styles.body}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={images}
        mode="parallax"
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index: ', index)}
        renderItem={({index}) => (
          <View style={styles.container}>
            <Image style={styles.image} source={{uri: images[index]}} />
          </View>
        )}></Carousel>
    </View>
  );
};
export default MovieStars;
