import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  categoryTitle: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Lora-Bold',
    padding: 20,
  },
  categoryTitleDetail: {
    fontFamily: 'Lora-Bold',
    padding: 15,
    marginLeft: -35,
  },
  categoryTitleDetailText: {
    color: 'grey',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  allMovies:{
    flexDirection: 'row'
  },
  errorText: {
    marginLeft: 25
  }
});
