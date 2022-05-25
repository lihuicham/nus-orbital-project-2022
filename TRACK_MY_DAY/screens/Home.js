import { StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Ring from '../components/Ring';

export default function Home() {

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome (replace name)!</Text>
                <View style={styles.ring}>
                    <Ring />
                </View>
            </View>
        </TouchableWithoutFeedback>
)};

const styles = StyleSheet.create({
    container: { //key-value pairs inside object
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
    },
    ring: {
        padding: 0
        // just keep in case we need to change the style later
    }
});