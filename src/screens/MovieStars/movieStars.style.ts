import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // Genişliği ebeveyn konteynerinin genişliği ile eşleştir
        height: 300, // Sabit bir yükseklik değeri
      },
      image: {
        width: '100%', // Resmin genişliğini konteynerin genişliği ile eşleştir
        height: '100%', // Resmin yüksekliğini konteynerin yüksekliği ile eşleştir
      }
    })