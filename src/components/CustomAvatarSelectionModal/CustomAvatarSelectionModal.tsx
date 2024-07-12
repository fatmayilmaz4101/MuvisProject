import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Text,
  ImageSourcePropType,
} from 'react-native';
import CustomAvatar from '../CustomAvatar/CustomAvatar';
import {styles} from './customAvatarSelectionModal.style';
import {avatarImages} from '../../../api/getAvatarDatas';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {getThemeColor} from '../../color';

interface AvatarSelectionModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (avatar: ImageSourcePropType) => void;
  selectedAvatar: ImageSourcePropType;
}

const AvatarSelectionModal: React.FC<AvatarSelectionModalProps> = ({
  visible,
  onClose,
  onSelect,
  selectedAvatar,
}) => {
  const renderAvatar = ({item}: {item: ImageSourcePropType}) => (
    <TouchableOpacity onPress={() => onSelect(item)}>
      <CustomAvatar
        style={[
          styles.avatarOption,
          selectedAvatar === item && styles.selectedAvatar,
        ]}
        size={80}
        source={item}
      />
    </TouchableOpacity>
  );
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View
        style={[
          styles.modalBackground,
          {backgroundColor: themeColors.modalBackground},
        ]}>
        <View
          style={[
            styles.modalContent,
            {backgroundColor: themeColors.modalContent},
          ]}>
          <FlatList
            data={avatarImages}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            renderItem={renderAvatar}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AvatarSelectionModal;
