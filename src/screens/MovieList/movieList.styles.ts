import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  mainContainer: {
    flex: 1,
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
