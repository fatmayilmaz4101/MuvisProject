import { StyleSheet } from 'react-native';
import { Color } from '../../utilities/Color';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'absolute',
    zIndex: 1,
    top: '16%',
  },
  avatarContainerKeyboardOpen: {
    top: '0%',
  },
  containerKeyboardOpen: {
    top: 75
  },
  inputContainer: {
    position: 'absolute',
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 50,
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  customText: {
    marginTop: 9
  },
  submit: {
    marginTop: 10,
  },
  rowStyle: {
    flexDirection: 'row',
    marginTop: 500
  },
  rememberMe: {
    marginTop: 5,
  },
  avatarList: {
    marginTop: 10,
    marginBottom: 20,
  },
  avatarOption: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  selectedAvatar: {
    borderColor: Color.CustomGreen,
    borderWidth: 2,
  },
  modalContainer: {
    width: 300,
    flex:1,
    padding: 20,
    margin: 30,
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
  closeButton: {
    marginTop: 10,
  },


});
