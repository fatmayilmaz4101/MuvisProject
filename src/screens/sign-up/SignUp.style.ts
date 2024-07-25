import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  keyboardStyle: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarContainer: {
    position: 'absolute',
    zIndex: 1,
    top: '18%',
  },
  avatarContainerKeyboardOpen: {
    top: '0%',
  },
  containerKeyboardOpen: {
    top: 50,
  },
  inputContainer: {
    position: 'absolute',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 50,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },

  customText: {
    marginTop: 9,
  },
  submit: {
    marginTop: 18,
  },
  rowStyle: {
    flexDirection: 'row',
    marginTop: 500,
  },

  avatarOption: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  selectedAvatar: {
    borderWidth: 2,
  },
  modalContainer: {
    width: 300,
    flex: 1,
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
});
