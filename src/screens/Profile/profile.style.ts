import {StyleSheet} from 'react-native';
import {Color} from '../../utilities/Color';

export const styles = StyleSheet.create({
  customButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'absolute',
    zIndex: 1,
    top: '5%',
  },
  avatarContainerKeyboardOpen: {
    top: '0%',
  },
  avatarOption: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10,
    margin: 10,
  },
  modalContainer: {
    width: '100%',
    flex: 1,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 350,
  },
  selectedAvatar: {
    borderColor: Color.CustomGreen,
    borderWidth: 2,
  },
});
