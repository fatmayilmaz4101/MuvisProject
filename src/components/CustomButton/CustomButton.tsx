import React from 'react';
import {Button, useTheme} from 'react-native-paper';
import {styles} from './customButton.styles';
import {Color} from '../../utilities/Color';
import {CustomButtonProps} from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getThemeColor } from '../../color';

const CustomButton = ({title, onPress}: CustomButtonProps) => {
  const theme = useSelector((state:RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);
  
  

  return (
    <Button
      mode="outlined"
      onPress={onPress}
      style={styles.updateButton}
      labelStyle={[styles.updateButtonText,{color: themeColors.titleColor}]}
      rippleColor={Color.Danger}>
      {title}
    </Button>
  );
};

export default CustomButton;
