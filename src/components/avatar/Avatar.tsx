import React from 'react';
import {Avatar} from 'react-native-paper';
import {View} from 'react-native';
import {styles} from './Avatar.style';
import {AvatarProps} from '@utilities/Types';

const GenericAvatar = ({size = 80, source, style}: AvatarProps) => {
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

export default GenericAvatar;
