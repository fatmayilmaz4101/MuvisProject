// Home.js
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';

const Home = ({ route }) => {
    const { userName } = route.params || {};
    return (
        <SafeAreaView>
            <View style={styles.textStyle}>
                <Text style={styles.greetingText}> Hoşgeldin {userName}! </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textColor: {
    },
    textStyle: {
        alignItems: 'center',
    },
    greetingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#169D6B', 
        marginTop: 20
    },

});

export default Home;
