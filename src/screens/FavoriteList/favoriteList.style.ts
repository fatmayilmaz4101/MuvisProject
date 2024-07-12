import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  movieContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10
  },
  movieImage: {
    width: '90%',
    aspectRatio: 9 / 12, 
    borderRadius: 10,
    margin: 5,
  },
  movieTitle: {
    textAlign: 'center',
  },
  emptyCompText: {
    textAlign: 'center',
    fontFamily: 'Lora-Regular'
  },
  closeIcon:{
    position: 'absolute',
    zIndex:1,
    right:0,
    top:0,
    padding:10,
  }
});
