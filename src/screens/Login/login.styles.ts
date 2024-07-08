import {StyleSheet} from 'react-native';
import {Color} from '../../utilities/Color';

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
    top: '20%',
  },
  avatarContainerKeyboardOpen: {
    top: '5%',
  },
  inputContainer: {
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    marginBottom: 30,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  customText: {
    marginTop: 9,
    color: 'gray',
  },
  submit: {
    marginTop: 10,
  },
  rowStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  rememberMe: {
    marginTop: 5,
    color: 'gray',
  },
  rememberPassword: {
    color: 'gray',
  },
  errorText: {
    color: Color.Danger,
  },
});
