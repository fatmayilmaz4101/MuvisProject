import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './movieDetails.style';

const MovieDetails = ({route}: any) => {
  const {thumbnailUrl, id, title} = route?.params.movie;

  return (
    <View style={styles.container}>
      <Image source={{uri: thumbnailUrl}} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleStyle}>Movie Name</Text>
        <Text style={styles.text}>Id: {id}</Text>
        <Text style={styles.text}>Title: {title}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;
