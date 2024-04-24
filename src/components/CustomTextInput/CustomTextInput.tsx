import React from 'react';
import { TextInput, KeyboardTypeOptions } from 'react-native';
import { styles } from './customTextInput.styles';

interface CustomTextInputProps {
  onBlur: () => void;
  onChangeText: () => void;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  placeholderTextColor?: string;
}

const CustomTextInput = ({ onBlur, onChangeText, value, 
  placeholder, secureTextEntry, keyboardType, placeholderTextColor }: CustomTextInputProps) => {
  return (
    <TextInput
      style={[styles.input]}
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
      placeholder = {placeholder}
      secureTextEntry= {secureTextEntry}
      keyboardType = {keyboardType}
      placeholderTextColor = {placeholderTextColor}
    />
  );
};
export default CustomTextInput;
