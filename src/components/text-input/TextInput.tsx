import React from 'react';
import {TextInput} from 'react-native-paper';
import {styles} from './TextInput.styles';
import {TextInputProps} from '@utilities/Types';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utilities/Color';
import { RootState } from '@redux/Store';

const GenericTextInput = ({
  onBlur,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  keyboardType,
  placeholderTextColor,
}: TextInputProps) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  return (
    <TextInput
      mode="outlined"
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholderTextColor={placeholderTextColor}
      outlineColor={themeColors.titleColor}
      activeOutlineColor="red"
      textColor={themeColors.titleColor}
      style={[styles.input, {backgroundColor: themeColors.background}]}
      cursorColor={'red'}
    />
  );
};

export default GenericTextInput;
