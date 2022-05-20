import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Pressable, Alert, Image } from 'react-native';
import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

      
  const printAlert = () => {
    Alert.alert('Pressable Called ...')
  }

  return (
    <View style={styles.container}>
        <Image source={require('../assets/title.png')} style={styles.image}></Image>
       

      
      <Text>Enter username:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. johndoe'
        onChangeText={(val) => setUsername(val)}/>

      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setPassword(val)}/>

      <Text> name: {username} and password: {password} </Text>

      <View style={styles.pressBox}>
        <Pressable
            onPress={printAlert} // change this to navigate to another page
            style={({ pressed }) => ({
            backgroundColor: pressed ? '#FF3D00' : '#0080FF', // colour a bit lighter when pressed
            
            })}>

            {({ pressed }) => (
                <Text style={styles.pressable_text}>
                {pressed ? 'Clicked!' : 'Login'}
                </Text>
            )}
                
        </Pressable>
      </View>

      <Text> Don't have an account? Register: </Text>

      <View style={styles.pressBox}>

        <Pressable
            onPress={printAlert} // change this to navigate to another page
            style={({ pressed }) => ({
            backgroundColor: pressed ? '#FF3D00' : '#0080FF', // colour a bit lighter when pressed
            
            })}>

            {({ pressed }) => (
                <Text style={styles.pressable_text}>
                {pressed ? 'Clicked!' : 'Register'}
                </Text>
            )}
                
        </Pressable>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}
// make the buttons touchable things!!
const styles = StyleSheet.create({
  container: { //key-value pairs inside object
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  login: {
    flex: 0,
    width: 'auto',
    textDecorationColor: '#f1356d',
    padding: 20,
  },
  
  register: {
    flex: 0,
    width: 'auto',
    textDecorationColor: '#f1356d',
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
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
  
  image: {
    flex: 1,
    width: 250,
    height: 250,
    resizeMode: 'contain'
}


});
