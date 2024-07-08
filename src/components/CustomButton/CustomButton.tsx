import React from 'react';
import {Button, useTheme} from 'react-native-paper';
import {styles} from './customButton.styles';
import {Color} from '../../utilities/Color';
import {CustomButtonProps} from '../../types';

const CustomButton = ({title, onPress, type = 'login'}: CustomButtonProps) => {
  const theme = useTheme();

  const buttonStyles =
    type === 'login' ? styles.customLoginButton : styles.updateButton;
  const buttonTextStyles =
    type === 'login' ? styles.customLoginButtonText : styles.updateButtonText;

  return (
    <Button
      mode="outlined"
      onPress={onPress}
      style={buttonStyles}
      labelStyle={buttonTextStyles}
      rippleColor={Color.Danger}
      theme={theme}>
      {title}
    </Button>
  );
};

export default CustomButton;
