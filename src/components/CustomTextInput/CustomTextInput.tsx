import React from 'react';
import {TextInput} from 'react-native-paper';
import {styles} from './customTextInput.styles';
import {CustomTextInputProps} from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getThemeColor } from '../../color';

const CustomTextInput = ({
  onBlur,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  keyboardType,
  placeholderTextColor,
}: CustomTextInputProps) => {
  const theme = useSelector((state:RootState) => state.theme.theme);
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
      style={[styles.input,{backgroundColor: themeColors.background}]}
      cursorColor={'red'}
    />
  );
};

export default CustomTextInput;
