import * as React from 'react';
import {Avatar} from 'react-native-paper';
import {View} from 'react-native';
import {styles} from './customAvatar.style';
import {CustomAvatarProps} from '../../types';

const CustomAvatar = ({size = 80, source, style}: CustomAvatarProps) => {
  return (
    <View style={style}>
      <Avatar.Image
        size={size}
        source={source}
        style={[styles.avatar, styles.avatarContainer]}
      />
    </View>
  );
};

export default CustomAvatar;
