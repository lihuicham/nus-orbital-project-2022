import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function ForgotPassword({ navigation }) {

    const toLogin = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text>Enter username or email:</Text>

            <TextInput
                style={styles.input}
                onChangeText={(val) => setPassword(val)}/>

 
            <View style={styles.pressBox}>
                <Pressable
                    onPress={toLogin} // figure this out - based on login details
                    style={({ pressed }) => ({
                    backgroundColor: pressed ? '#FF3D00' : '#0080FF', // colour a bit lighter when pressed
                    
                    })}>

                    {({ pressed }) => (
                        <Text style={styles.pressable_text}>Back to Login</Text>
                    )}
                        
                </Pressable>
            </View>

        </View>
)};

const styles = StyleSheet.create({
    container: { //key-value pairs inside object
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressable_text: {
        textAlign: 'center',
        fontSize: 15,
        color: '#ffff',
        padding: 4
    },

    pressBox: {
        marginTop: 10,
        marginBottom: 10
    },

    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    }
});