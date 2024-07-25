declare module 'deprecated-react-native-prop-types' {
    import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
  
    export const ViewPropTypes: {
      style: ViewStyle | ViewStyle[];
    };
    export const TextPropTypes: {
      style: TextStyle | TextStyle[];
    };
    export const ImagePropTypes: {
      style: ImageStyle | ImageStyle[];
    };
  }
  