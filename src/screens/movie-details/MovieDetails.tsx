import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {styles} from './MovieDetails.style';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-ratings';
import {UseComments} from '../../hooks/UseComments';
import {CommentType} from '../../utilities/Types';
import {Avatar, Card} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/Store';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/actions/FavoriteActions';
import CustomLoading from '../../components/loading/Loading';
import CustomToolTip from '../../components/tool-tip/ToolTip';
import {getThemeColor} from '../../utilities/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovieDetails = ({route}: any) => {
  const dispatch = useAppDispatch();
  const {id, src, name, category, director, summary} = route?.params.movie;
  const [isFavorite, setIsFavorite] = useState(false);
  const [newComment, setNewComment] = useState<string>('');
  const {favorites} = useSelector((state: RootState) => state.favori);
  const [visibleComments, setVisibleComments] = useState(4);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState<boolean>(true);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);
  const [userName, setuserName] = useState<string>('');

  const {data: comments = [], isLoading, addComment, refetch} = UseComments();
  const filteredComments = comments.filter(comment => comment.movieId === id);
  useEffect(() => {
    const getFirstName = async () => {
      const storedFirstName = await AsyncStorage.getItem('firstName');
      setuserName(storedFirstName!);
    };
    getFirstName();
  }, [route]);
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
      <Card
        style={{
          borderRadius: 5,
          backgroundColor: themeColors.commentContainer,
        }}>
        <Card.Content>
          <View style={{flexDirection: 'row'}}>
            <Avatar.Image
              size={30}
              source={require('../../../assets/images/rick-avatar.png')}
            />
            <View style={{marginLeft: 5}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: themeColors.commentInput}}>
                  {item.username}
                </Text>
                <Text
                  style={{marginLeft: 5, color: themeColors.commentDateColor}}>
                  {item.date.toString()}
                </Text>
              </View>
              <Text style={{color: themeColors.commentInput}}>
                {item.content}
              </Text>
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
      username: userName,
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

  const CommentInput = () => {
    return (
      <View
        style={[
          styles.commentInputContainer,
          {backgroundColor: themeColors.sendInputContainer},
        ]}>
        <TextInput
          style={[styles.commentInput, {color: themeColors.titleColor}]}
          placeholder="Yorumunuzu yazın"
          placeholderTextColor={themeColors.titleColor}
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity onPress={handleAddComment}>
          <Ionicons
            name="send"
            style={styles.sendIcon}
            size={24}
            color={themeColors.titleColor}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const loadMoreComments = () => {
    if (!onEndReachedCalledDuringMomentum) {
      setVisibleComments(prev => prev + 4);
      setOnEndReachedCalledDuringMomentum(true);
    }
  };

  if (isLoading) {
    return (
      <View style={{backgroundColor: themeColors.background}}>
        <CustomLoading isLoading={isLoading} text="Yükleniyor" />
      </View>
    );
  }

  const openContentToolTip = () => {
    return (
      <Text style={[styles.contentText, {color: themeColors.titleColor}]}>
        Film favorilere eklendi.
      </Text>
    );
  };
  const closeContentToolTip = () => {
    return (
      <Text style={[styles.contentText, {color: themeColors.titleColor}]}>
        Film favorilerden kaldırıldı.
      </Text>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View
        style={[
          styles.mainContainer,
          {backgroundColor: themeColors.background},
        ]}>
        <Image source={{uri: src}} style={styles.image} />
        <LinearGradient
          colors={themeColors.blurColor}
          style={styles.linearGradient}>
          <View style={styles.movieDetailBlur}></View>
        </LinearGradient>

        <CustomToolTip
          content={isFavorite ? openContentToolTip() : closeContentToolTip()}
          style={styles.favoriteIcon}
          onPress={handlePressFavorite}
          children={
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={30}
              color={isFavorite ? 'red' : 'white'}
            />
          }
        />

        <View style={styles.detailsContainer}>
          <Text style={[styles.titleStyle, {color: themeColors.titleColor}]}>
            {name}
          </Text>
          <View style={styles.categoryDirector}>
            <Text
              style={[
                styles.categoryDirectorText,
                {color: themeColors.titleColor},
              ]}>
              {' '}
              *{category}
            </Text>
            <Text
              style={[
                styles.categoryDirectorText,
                {color: themeColors.titleColor},
              ]}>
              {' '}
              *{director}
            </Text>
          </View>
          <Text style={[styles.summaryText, {color: themeColors.titleColor}]}>
            {summary}
          </Text>
        </View>

        <View style={styles.viewComment}>
          <Text style={[styles.starTitle, {color: themeColors.titleColor}]}>
            Bu filmi izlediniz mi?
          </Text>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={30}
            style={styles.rating}
            tintColor={themeColors.background}
          />
        </View>
        <View style={styles.commentContainer}>
          <FlatList
            data={filteredComments.slice(0, visibleComments)}
            renderItem={renderComments}
            keyExtractor={item => item.id.toString()}
            initialNumToRender={4}
            onEndReached={loadMoreComments}
            onEndReachedThreshold={0.0}
            onMomentumScrollBegin={() => {
              setOnEndReachedCalledDuringMomentum(false);
            }}
            ListFooterComponent={CommentInput()}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MovieDetails;
