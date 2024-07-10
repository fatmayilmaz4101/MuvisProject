import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
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
  },
  movieImage: {
    width: '90%',
    aspectRatio: 9 / 12, 
    borderRadius: 10,
    margin: 5,
  },
  movieTitle: {
    textAlign: 'center',
    color: 'white',
  },
  emptyCompText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Lora-Regular'
  }
});
