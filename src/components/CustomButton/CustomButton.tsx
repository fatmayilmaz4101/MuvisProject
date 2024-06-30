import React from 'react';
import { Button, useTheme } from 'react-native-paper';
import { styles } from './customButton.styles';
import { Color } from '../../utilities/Color';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  type?: 'customGreen' | 'menu';
}

const CustomButton = ({ title, onPress, type = 'customGreen' }: CustomButtonProps) => {
  const theme = useTheme();

  const buttonStyles = type === 'customGreen' ? styles.customGreenButton : styles.menuButton;
  const buttonTextStyles = type === 'customGreen' ? styles.customGreenButtonText : styles.menuButtonText;

  return (
    <Button
      mode="outlined"
      onPress={onPress}
      style={buttonStyles}
      labelStyle={buttonTextStyles}
      rippleColor={Color.Danger}
      theme={theme}
    >
      {title}
    </Button>
  );
};

export default CustomButton;

