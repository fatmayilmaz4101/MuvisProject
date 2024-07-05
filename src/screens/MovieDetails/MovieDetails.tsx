import React, { useEffect, useRef, useState } from 'react';
import {View, Text, Image, TouchableOpacity, Button, FlatList} from 'react-native';
import {styles} from './movieDetails.style';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Rating } from 'react-native-ratings';
import CustomBottomSheet, { BottomSheetRef } from '../../components/CustomBottomSheet/CustomBottomSheet';
import { useComments } from '../../hooks/useComments';
import { CommentType } from '../../types';
import { Avatar, Card } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { addToFavorites, removeFromFavorites } from '../../redux/actions/favoriteActions';



const MovieDetails = ({route}: any) => {
  const {src, name, category, director, summary} = route?.params.movie;
  const {data : comments, isLoading, refetch} = useComments();
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const bottomSheetRef = useRef<BottomSheetRef>(null);
  const handleOpen = () => {
    bottomSheetRef.current?.present();
  };
  const { favorites, loading, error } = useSelector((state: RootState) => state.favori);
  useEffect(() => {
    const favorite = favorites.find((movie) => movie.id === route?.params.movie.id);
    if (favorite) {
      setIsFavorite(true);
    }
  }, [favorites, route?.params.movie.id]);

  const renderComments = ({ item }: { item: CommentType }) => (
    <View style={{  width: '100%', margin: 1  }}>
          <Card style={{ borderRadius: 5 }}>
            <Card.Content>
              <View style={{flexDirection: 'row'}}>
              <Avatar.Image size={30} source={require('../../../assets/images/rick-avatar.png')}/>
            <View style={{marginLeft:5}}>
              <View style={{flexDirection: 'row'}}>
              <Text>{item.username}</Text>
              <Text style={{marginLeft:5, color: 'grey'}}>{item.date.toString()}</Text>
              </View>
              <Text>{item.content}</Text>
            </View>
              </View>
            </Card.Content>
          </Card>

    </View>

  )
  const handlePressFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(route?.params.movie.id));
    } else {
      dispatch(addToFavorites(route?.params.movie));
    }
    setIsFavorite(!isFavorite);
  };
  
  return (
    <View style={styles.container}>
      <Image source={{uri: src}} style={styles.image} />
      <LinearGradient colors={['transparent', 'black', 'black']} style={styles.linearGradient}>
      <View style={styles.exampleView}></View>
      </LinearGradient>
      <TouchableOpacity
          style={styles.favoriteIcon}
          onPress={handlePressFavorite}
        >
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={30}
            color={isFavorite ? 'red' : 'white'}
          />
        </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <Text style={styles.titleStyle}>{name}</Text>
        <View style={styles.categoryDirector}>
        <Text> *{category}</Text>
        <Text> *{director}</Text>
        </View>
        <Text style={styles.text}>{summary}</Text>
      </View>
      <View style={styles.viewComment}>
      <CustomButton title='Yorumları göster' onPress={handleOpen}/>
        <Text style={styles.starTitle}>Bu filmi izlediniz mi?</Text>
        <Rating
        type='star'
        ratingCount={5}
        imageSize={30}
        style={styles.rating}
        tintColor='black'
      />
      </View>
      <CustomBottomSheet ref={bottomSheetRef} snapPoints={['80%']}>
        <View >
          <FlatList
          data={comments}
          renderItem={renderComments}
          />
        </View>
      </CustomBottomSheet>

    </View>
  );
};

export default MovieDetails;
