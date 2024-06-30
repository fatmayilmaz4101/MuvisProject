import * as React from 'react';
import { Avatar } from 'react-native-paper';
import { View, StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
import { styles } from './customAvatar.style';

interface CustomAvatarProps {
  size?: number;
  source: ImageSourcePropType;
  borderColor?: string;
  borderWidth?: number;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({
  size = 80,
  source,
  style,
}) => {
  return (
    <View style={[{ alignItems: 'center', justifyContent: 'center', margin: 10 }, style]}>
      <Avatar.Image
        size={size}
        source={source}
        style= {[styles.avatar,styles.container]}
      />
    </View>
  );
};

export default CustomAvatar;
