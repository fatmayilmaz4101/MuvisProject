import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F1E21',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
    width: '75%',
    padding: 15
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  errorMessage: {
    marginBottom: 10,
  },
  CustomText: {
    color: 'white',
    fontFamily: 'Lora-Italic',
    marginTop: 100,
  },
});
