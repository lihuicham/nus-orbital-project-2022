import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import Ring from '../components/Ring';

export default function Home() {

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                {/* replace name with user's name here */}
                <Text style={styles.welcome}>Welcome (replace name)!</Text>
                <View style={styles.ring}>
                    <Ring />
                </View>
            </View>
        </TouchableWithoutFeedback>
)};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        padding: 10,
        marginTop: 50
    }
});