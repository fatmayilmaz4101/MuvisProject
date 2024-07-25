import MaskInput from 'react-native-mask-input';
import {MaskInputType, phoneMask} from '@utilities/Types';
import {View} from 'react-native';
import {styles} from './MaskInput.style';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utilities/Color';
import { RootState } from '@redux/Store';

const GenericMaskInput = ({
  value,
  onChangeText,
  onBlur,
}: MaskInputType) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);
  return (
    <View>
      <MaskInput
        inputMode="tel"
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        mask={phoneMask}
        cursorColor={'red'}
        selectionColor={'red'}
        style={[
          styles.input,
          {
            color: themeColors.titleColor,
            backgroundColor: themeColors.background,
            borderColor: themeColors.titleColor,
          },
        ]}
        placeholder="+90-5XX-XXX-XX-XX"
        placeholderTextColor={themeColors.titleColor}
      />
    </View>
  );
};
export default GenericMaskInput;
