import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {styles} from './customLoading.styles';
import {LoadingComponentProps} from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getThemeColor } from '../../color';

const LoadingComponent = ({isLoading, text}: LoadingComponentProps) => {
  if (!isLoading) {
    return null;
  }
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={themeColors.danger} />
      {text && <Text style={styles.loadingText}>{text}</Text>}
    </View>
  );
};
export default LoadingComponent;
