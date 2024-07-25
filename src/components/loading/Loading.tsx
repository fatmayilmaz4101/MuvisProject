import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {styles} from './Loading.styles';
import {LoadingProps} from '@utilities/Types';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utilities/Color';
import { RootState } from '@redux/Store';

const Loading = ({isLoading, text}: LoadingProps) => {
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
export default Loading;
