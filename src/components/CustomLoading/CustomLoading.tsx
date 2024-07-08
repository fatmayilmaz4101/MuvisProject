import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {styles} from './customLoading.styles';
import {Color} from '../../utilities/Color';
import {LoadingComponentProps} from '../../types';

const LoadingComponent = ({isLoading, text}: LoadingComponentProps) => {
  if (!isLoading) {
    return null;
  }
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={Color.Danger} />
      {text && <Text style={styles.loadingText}>{text}</Text>}
    </View>
  );
};
export default LoadingComponent;
