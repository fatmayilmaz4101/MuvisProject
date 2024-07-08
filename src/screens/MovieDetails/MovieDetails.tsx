import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {styles} from './movieDetails.style';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton/CustomButton';
import {Rating} from 'react-native-ratings';
import CustomBottomSheet from '../../components/CustomBottomSheet/CustomBottomSheet';
import { BottomSheetRef } from '../../types';
import {useComments} from '../../hooks/useComments';
import {CommentType} from '../../types';
import {Avatar, Card} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/actions/favoriteActions';
import CustomLoading from '../../components/CustomLoading/CustomLoading';

const MovieDetails = ({route}: any) => {
  const dispatch = useAppDispatch();
  const {id, src, name, category, director, summary} = route?.params.movie;
  const [isFavorite, setIsFavorite] = useState(false);
  const [newComment, setNewComment] = useState<string>('');
  const login = useSelector((state: RootState) => state.user.login.userName);
  const bottomSheetRef = useRef<BottomSheetRef>(null);
  const {favorites} = useSelector((state: RootState) => state.favori);

  const {data: comments = [], isLoading, addComment, refetch} = useComments();
  const filteredComments = comments.filter(comment => comment.movieId === id);

  useEffect(() => {
    const favorite = favorites.find(
      movie => movie.id === route?.params.movie.id,
    );
    if (favorite) {
      setIsFavorite(true);
    }
  }, [favorites, route?.params.movie.id]);

  const renderComments = ({item}: {item: CommentType}) => (
    <View style={{width: '100%', margin: 1}}>
      <Card style={{borderRadius: 5}}>
        <Card.Content>
          <View style={{flexDirection: 'row'}}>
            <Avatar.Image
              size={30}
              source={require('../../../assets/images/rick-avatar.png')}
            />
            <View style={{marginLeft: 5}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.commentText}>{item.username}</Text>
                <Text style={{marginLeft: 5, color: 'grey'}}>
                  {item.date.toString()}
                </Text>
              </View>
              <Text style={styles.commentText}>{item.content}</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );

  const handlePressFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(route?.params.movie.id));
    } else {
      dispatch(addToFavorites(route?.params.movie));
    }
    setIsFavorite(!isFavorite);
  };

  const handleAddComment = () => {
    const comment = {
      movieId: id,
      content: newComment,
      username: login,
      date: new Date().toString(),
    };
    console.log('New Comment: ', newComment);
    addComment(comment, {
      onSuccess: () => {
        refetch();
      },
    });
    setNewComment('');
  };
  const handleOpen = () => {
    bottomSheetRef.current?.present();
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <CustomLoading isLoading={isLoading} text="Yükleniyor" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: src}} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'black', 'black']}
        style={styles.linearGradient}>
        <View style={styles.movieDetailBlur}></View>
      </LinearGradient>
      <TouchableOpacity
        style={styles.favoriteIcon}
        onPress={handlePressFavorite}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={30}
          color={isFavorite ? 'red' : 'white'}
        />
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <Text style={styles.titleStyle}>{name}</Text>
        <View style={styles.categoryDirector}>
          <Text style={styles.categoryDirectorText}> *{category}</Text>
          <Text style={styles.categoryDirectorText}> *{director}</Text>
        </View>
        <Text style={styles.summaryText}>{summary}</Text>
      </View>
      <View style={styles.viewComment}>
        <CustomButton title="Yorumları göster" onPress={handleOpen} />
        <Text style={styles.starTitle}>Bu filmi izlediniz mi?</Text>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={30}
          style={styles.rating}
          tintColor="black"
        />
      </View>

      <CustomBottomSheet ref={bottomSheetRef} snapPoints={['100%']}>
        <View style={styles.commentContainer}>
          <FlatList
            data={filteredComments}
            renderItem={renderComments}
            keyExtractor={item => item.id.toString()}
          />
          <View style={styles.commentInputContainer}>
            <TextInput
              style={styles.commentInput}
              placeholder="Yorumunuzu yazın"
              placeholderTextColor={'white'}
              value={newComment}
              onChangeText={setNewComment}
            />
            <TouchableOpacity onPress={handleAddComment}>
              <Ionicons
                name="send"
                style={styles.sendIcon}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default MovieDetails;
