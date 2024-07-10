import MaskInput from "react-native-mask-input"
import { CustomMaskInputType } from "../../types"
import { View } from "react-native"
import { styles } from "./customMaskInput.style"
import { Color } from "../../utilities/Color"
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
            style={styles.input}
            placeholder="+90-5XX-XXX-XX-XX"
            placeholderTextColor={Color.Gray}
          />
        </View>
    )
}
export default CustomMaskInput