import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loadingContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yarı saydam siyah arka plan
    },
    loadingText: {
      marginTop: 10,
      color: '#ffffff',
    }
  });
  