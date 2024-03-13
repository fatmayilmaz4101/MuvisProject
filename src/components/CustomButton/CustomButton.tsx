import {Text, TouchableOpacity} from 'react-native';
import {styles} from './customButton.styles';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);
