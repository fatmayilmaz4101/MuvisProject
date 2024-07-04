import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'black',
    },
    cardContainer: {
      width: '90%',
      backgroundColor: 'black',  
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Kartları opak yapar
      marginVertical: 10,
      borderRadius: 50,
    },
    scrollView: {
      width: '90%',
      margin:20
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Siyah yarı saydam kaplama
    justifyContent: 'center',
    alignItems: 'center',

  },
  categoryTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10
  },
  image: {
    height: 200,
    borderRadius: 20

  },
  title:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5
  }
  
  });
    