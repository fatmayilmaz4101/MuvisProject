import { StyleSheet } from 'react-native';

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
    top: '17%',
  },
  avatarContainerKeyboardOpen: {
    top: '1%',
  },
  inputContainer: {
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    marginBottom: 30
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
    marginTop: 10
  },
  rememberMe: {
    marginTop: 5,
  }
});
