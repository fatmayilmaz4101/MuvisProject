import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  directorName: {
    textAlign: 'center',
    fontFamily: 'Lora-Bold',
  },
  movieContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  directorStyle: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieStyle: {
    flex: 1,
  },
});
