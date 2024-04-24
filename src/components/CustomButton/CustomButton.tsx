import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './customButton.styles';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  type?: 'customGreen' | 'menu';
}
const CustomButton= ({
  title,
  onPress,
  type = 'customGreen',
} : CustomButtonProps ) => {
  
  const buttonStyles =
    type === 'customGreen' ? styles.customGreenButton : styles.menuButton;
    
  const buttonTextStyles =
    type === 'customGreen'
      ? styles.customGreenButtonText
      : styles.menuButtonText;

  return (
    <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
      <Text style={buttonTextStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
