import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '40%',
  },
  detailsContainer: {
    position: 'absolute',
    top: '30%',
    left: '4%',
  },
  titleStyle: {
    fontFamily: 'Lora-Regular',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  summaryText: {
    fontFamily: 'Lora-Regular',
    fontSize: 18,
    color: 'white',
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  movieDetailBlur: {
    width: 450,
    height: 700,
  },
  categoryDirector: {
    flexDirection: 'row',
    marginBottom: '4%',
  },
  favoriteIcon: {
    position: 'absolute',
    top: '30%',
    right: '2%',
    width: 60,
    height: 60,
    padding: 14,
  },
  viewComment: {
    marginTop: '20%',
  },
  starTitle: {
    margin: 20,
    color: 'gray',
  },
  rating: {
    position: 'absolute',
    top: '90%',
    left: '4%',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  commentInput: {
    flex: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  commentContainer: {
    flex: 1,
    padding: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  categoryDirectorText: {
    color: 'white',
    fontFamily: 'Lora-Regular',
  },
  commentText: {
    color: 'white',
  },
  sendIcon: {
    marginRight: 15,
  },
});
