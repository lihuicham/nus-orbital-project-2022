import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

/*   const toRegister = () => {
    navigation.navigate('Register');
  }

  const forgotPwd = () => {
    navigation.navigate('ForgotPassword');
  }

  const toHome = () => {
    navigation.navigate('Home');
  }
 */
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
          <Image source={require('../assets/title.png')} style={styles.image}></Image>
        
        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={(val) => setEmail(val)}/>
        
        <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={(val) => setPassword(val)}
          secureTextEntry />

        <View style={styles.pressBox}>
          <Pressable
              //onPress={toHome}
              style={({ pressed }) => ({
              backgroundColor: pressed ? '#FF3D00' : '#0080FF'          
              })}>
              {({ pressed }) => (
                  <Text style={styles.pressable_text}>Login</Text>
              )}    
          </Pressable>
        </View>

        <Text> Forgot your password? </Text>
        <View style={styles.onSide}>
          <Pressable
              //onPress={forgotPwd} 
              >
              {({ pressed }) => (
                  <Text style={styles.link}>Reset Password</Text>
              )}   
          </Pressable>
        </View>

        <Text> Don't have an account? </Text>
        <View style={styles.onSide}>
          <Pressable
              //onPress={toRegister}
              >
              {({ pressed }) => (
                  <Text style={styles.link}>Register</Text>
              )}   
          </Pressable>
        </View>
        
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>

    
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
