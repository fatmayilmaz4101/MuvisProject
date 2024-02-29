// Home.js
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';

const Home = ({ route }) => {
    const { userName } = route.params || {};
    return (
        <SafeAreaView>
            <View style={styles.textStyle}>
                <Text style={styles.textColor}> Hoşgeldin {userName}! </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textColor: {
        color: 'black'
    },
    textStyle: {
        alignItems: 'center',
    }
});

export default Home;
