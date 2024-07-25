import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    slide: {
        borderRadius: 10,
        shadowOffset: {width: 0, height: 2},
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
      },
      textContainer: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
    
})