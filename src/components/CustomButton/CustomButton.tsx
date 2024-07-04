import React from 'react';
import { Button, useTheme } from 'react-native-paper';
import { styles } from './customButton.styles';
import { Color } from '../../utilities/Color';
import LinearGradient from 'react-native-linear-gradient';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  type?: 'login' | 'update';
}

const CustomButton = ({ title, onPress, type = 'login' }: CustomButtonProps) => {
  const theme = useTheme();

  const buttonStyles = type === 'login' ? styles.customGreenButton : styles.menuButton;
  const buttonTextStyles = type === 'login' ? styles.customGreenButtonText : styles.menuButtonText;

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

