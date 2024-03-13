import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 1,
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
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
    height: 100,
  },
});
