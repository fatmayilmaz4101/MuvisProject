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

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
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
