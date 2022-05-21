import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, Image } from 'react-native';
import React, { useState } from 'react';
//import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toRegister = () => {
    navigation.navigate('Register')
  }

  const forgotPwd = () => {
    navigation.navigate('ForgotPassword')
  }
      
  const printAlert = () => {
    Alert.alert('Pressable Called ...')
  }

  return (
    <View style={styles.container}>
        <Image source={require('../assets/title.png')} style={styles.image}></Image>
      
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={(val) => setUsername(val)}/>

      
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={(val) => setPassword(val)}/>

      <Text> name: {username} and password: {password} </Text>

      <View style={styles.pressBox}>
        <Pressable
            onPress={printAlert} // figure this out - based on login details
            style={({ pressed }) => ({
            backgroundColor: pressed ? '#FF3D00' : '#0080FF' // colour a bit lighter when pressed
            
            })}>

            {({ pressed }) => (
                <Text style={styles.pressable_text}>Login</Text>
            )}
                
        </Pressable>
      </View>

      <Text> Forgot your password? </Text>
      <View style={styles.pressBox}>

        <Pressable
            onPress={forgotPwd} // change this to navigate to another page
            style={({ pressed }) => ({
            backgroundColor: pressed ? '#FF3D00' : '#0080FF' // colour a bit lighter when pressed
            })}>

            {({ pressed }) => (
                <Text style={styles.pressable_text}>Reset password</Text>
            )}   

        </Pressable>
      </View>

      {/* <View style={styles.onSide}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={toRegister}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View> */}

      <Text> Don't have an account? </Text>

      <View style={styles.onSide}>

        <Pressable
            onPress={toRegister} 
            >

            {({ pressed }) => (
                <Text style={styles.link}>Register</Text>
            )}   

        </Pressable>
      </View>
      
      <StatusBar style="auto" />
    </View>

    
)};

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
      marginBottom: 10,
      marginEnd: 10,
  },

  onSide: {
    flexDirection: 'row',
  },

  link: {
    textAlign: 'center',
    fontSize: 14,
    color: 'blue',
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  
  image: {
    flex: 1,
    width: 250,
    height: 250,
    resizeMode: 'contain'
}


});
