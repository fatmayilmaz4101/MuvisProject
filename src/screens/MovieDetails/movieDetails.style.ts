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
    left: '4%'
  },
  titleStyle: {
    fontFamily: 'Lora-Regular',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
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
  exampleView: {
    width: 450,
    height: 700,
  },
  categoryDirector: {
    flexDirection: 'row',
    marginBottom: '4%'
  },
  favoriteIcon: {
    position: 'absolute',
    top: '30%',
    right: '2%',
    width: 60,
    height: 60,
    padding: 14
  },
  viewComment:{
    marginTop: '20%'
  },
  starTitle: {
    margin: 20
  },
  rating: {
    position: 'absolute',
    top: '90%',
    left: '4%'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  
});
