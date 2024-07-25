import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  ImageSourcePropType,
} from 'react-native';
import CustomAvatar from '../avatar/Avatar';
import {styles} from './AvatarSelectionModal.style';
import {avatarImages} from '@api/GetAvatarDatas';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utilities/Color';
import { RootState } from '@redux/Store';

interface AvatarSelectionModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (avatar: ImageSourcePropType) => void;
  selectedAvatar: ImageSourcePropType;
}

const AvatarSelectionModal = ({
  visible,
  onClose,
  onSelect,
  selectedAvatar,
}: AvatarSelectionModalProps) => {
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
