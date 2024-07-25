import React from 'react';
import {Button} from 'react-native-paper';
import {styles} from './Button.styles';
import {ButtonProps} from '@utilities/Types';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/Store';
import {getThemeColor} from '@utilities/Color';

const GenericButton = ({title, onPress}: ButtonProps) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  return (
    <Button
      mode="outlined"
      onPress={onPress}
      style={styles.updateButton}
      labelStyle={[styles.updateButtonText, {color: themeColors.titleColor}]}
      rippleColor={themeColors.danger}>
      {title}
    </Button>
  );
};

export default GenericButton;
