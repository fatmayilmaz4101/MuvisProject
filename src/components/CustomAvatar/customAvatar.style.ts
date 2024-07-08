import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    borderColor: 'red',
    borderWidth: 2,
    backgroundColor: 'red',
    // Shadow properties for iOS
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    // Elevation for Android
    elevation: 10,
  },
});
