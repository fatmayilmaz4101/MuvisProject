import { StyleSheet } from "react-native";
import { Color } from "../../utilities/Color";

export const styles = StyleSheet.create({
      contentText: {
        color: 'white',
        textAlign: 'center',

      },
      toolTipContentStyle: {
        backgroundColor: Color.BackgroundColor,
        padding:10,
        width: '100%',
        borderRadius: 10

      },
      toolTipStyle: {
        width: '100%',
        height:'auto',
        position:'absolute',
        top:'2%',
      },

})