import React from 'react';
import {TextInput} from 'react-native-paper';
import {styles} from './customTextInput.styles';
import {CustomTextInputProps} from '../../types';

const CustomTextInput = ({
  onBlur,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  keyboardType,
  placeholderTextColor,
}: CustomTextInputProps) => {
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
      outlineColor="black"
      activeOutlineColor="red"
      style={styles.input}
    />
  );
};

export default CustomTextInput;
