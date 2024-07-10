import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './customToolTip.style';
import {CustomToolTipType} from '../../types';
import {useState} from 'react';

const CustomToolTip = ({
  content,
  children,
  style,
  onPress,
}: CustomToolTipType) => {
  const [visible, setVisible] = useState(false);

  const handlePress = (event: GestureResponderEvent) => {
    setVisible(!visible);
    setTimeout(() => {
      setVisible(false);
    }, 2000); 

    console.log('handlepresse girildi: ', !visible);
    if (onPress) {
      onPress(event);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={style}>
        {children}
      </TouchableOpacity>
      {visible && (
        <View>
          <View>
            <Text style={styles.tooltipText}>{content}</Text>
          </View>
          <View style={styles.arrowDown} />
        </View>
      )}
    </View>
  );
};
export default CustomToolTip;
