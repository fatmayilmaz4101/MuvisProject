import {StyleSheet} from 'react-native';
import { Color } from '../../utilities/Color';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  slide: {
    backgroundColor: Color.BackgroundColor,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    height: 200,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '70%',
    backgroundColor: 'grey'
  },
  textContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BackgroundColor,
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
    color: 'grey'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },




  listContainer: {
    padding: 12,
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    width: 180,
    height: 230,
    margin: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
  },
  movieImg: {
    width: 150,
    height: 150,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },

});
