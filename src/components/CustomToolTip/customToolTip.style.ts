import { StyleSheet } from "react-native";
import { Color } from "../../utilities/Color";

export const styles = StyleSheet.create({
      container: {
        position: 'absolute',
        top: '25%',
        right:0,
        bottom:'60%',
        width: '50%',
        zIndex: 1,
      },
      arrowDown: {
        marginLeft:'50%',
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: Color.BackgroundColor,
        alignSelf: 'center',
        marginTop: -5, 
      },
    
      tooltipText: {
        backgroundColor: Color.BackgroundColor,
        padding: 8,
        margin:5,
        borderRadius: 5,
        textAlign: 'center'
      },
})