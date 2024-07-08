import { StyleSheet } from 'react-native';
import { Color } from '../../utilities/Color';

export const styles = StyleSheet.create({
    avatarOption: {
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 10,
    },
    selectedAvatar: {
        borderColor: Color.Danger,
        borderWidth: 3,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: Color.BackgroundColor,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '45%'
    },
    customAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
});
