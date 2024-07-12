import MaskInput from "react-native-mask-input"
import { CustomMaskInputType } from "../../types"
import { View } from "react-native"
import { styles } from "./customMaskInput.style"
import { Color } from "../../utilities/Color"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { getThemeColor } from "../../color"
const phoneMask = [
    '+',
    '9',
    '0',
    '-',
    '5',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];  
const CustomMaskInput = ({value, onChangeText, onBlur} : CustomMaskInputType) => {
  const theme = useSelector((state:RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);
    return(
        <View>
            <MaskInput
            inputMode="tel"
            onBlur={onBlur}
            value={value}
            onChangeText={onChangeText}
            mask={phoneMask}
            cursorColor={'red'}
            selectionColor={'red'}
            style={[styles.input, {color: themeColors.titleColor, backgroundColor: themeColors.background, borderColor: themeColors.titleColor}]}
            placeholder="+90-5XX-XXX-XX-XX"
            placeholderTextColor={Color.Gray}
          />
        </View>
    )
}
export default CustomMaskInput