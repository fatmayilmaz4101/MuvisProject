import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './customTextInput.styles';
interface CustomTextInputProps {
  onBlur: () => void;
  onChangeText: (text: string) => void; // onChangeText'in parametre aldığından emin olun
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  placeholderTextColor?: string;
}

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
      mode='outlined'
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholderTextColor={placeholderTextColor}
      outlineColor='black'
      activeOutlineColor='red'
      style={styles.input} // Custom styles can be applied here
    />
  );
};

export default CustomTextInput;
