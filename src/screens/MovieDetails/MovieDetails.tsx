import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './movieDetails.style';

const MovieDetails = ({route}: any) => {
  const {movie} = route.params;
  const {container, detailsContainer, title, text} = styles;

  return (
    <View style={container}>
      <Image source={{uri: movie.thumbnailUrl}} style={styles.image} />
      <View style={detailsContainer}>
        <Text style={title}>Movie Name</Text>
        <Text style={text}>Id: {movie.id}</Text>
        <Text style={text}>Title: {movie.title}</Text>
        {/* Diğer film ayrıntılarını burada gösterebilirsiniz */}
      </View>
    </View>
  );
};

export default MovieDetails;
