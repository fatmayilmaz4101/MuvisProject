import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '40%',
  },
  detailsContainer: {
    position: 'absolute',
    top: '36%',
    left: '3%',
  },
  titleStyle: {
    fontFamily: 'Lora-Regular',
    fontSize: 24,
    fontWeight: 'bold',
  },
  summaryText: {
    fontFamily: 'Lora-Regular',
    fontSize: 18,
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
    right: 0,
    bottom:'5%',
    width: 60,
    height: 60,
    padding: 10,
    margin:5
  },
  viewComment: {
    marginTop: '20%',
    marginBottom: '10%'
  },
  starTitle: {
    margin: 20,
  },
  rating: {
    position: 'absolute',
    top: '80%',
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
    marginTop: '7%'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryDirectorText: {
    fontFamily: 'Lora-Regular',
  },
  sendIcon: {
    marginRight: 15,
  },
  contentText: {
    textAlign: 'center',
    fontFamily: 'Lora-Regular'
  },  
});
