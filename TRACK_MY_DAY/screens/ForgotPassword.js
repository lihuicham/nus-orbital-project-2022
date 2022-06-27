import { Alert, StyleSheet, Image, Keyboard, Text, View, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


export default function ForgotPassword({ navigation }) {
  const toLogin = () => {
    navigation.replace("Login");
  };

  const auth = getAuth();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Password reset email sent!")
      Alert.alert("Password reset email sent!", "Please check your spam folder if it is not in inbox.")
    })
    .catch((error) => {
      if (error.code === 'auth/missing-email') {
        Alert.alert("Missing email", "Please enter a valid email.")
      }
      else if (error.code === 'auth/invalid-email') {
        Alert.alert("Invalid email", "Please enter a valid email.")
      }
      else if (error.code === 'auth/user-not-found') {
        Alert.alert("User not found", "Please enter an existing user or create a new account.")
      }
      else {
        Alert.alert("Error", "Something went wrong, please try again.")
      //alert(error.message)
      }
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
  }}>
      <ScrollView style={{backgroundColor:'#f6e8dc'}}>
          <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.image}></Image>
            <View style={styles.section}>
        
              <View style={styles.reset}>
                <TextInput
                  style={styles.input}
                  placeholder='Email'
                  onChangeText={(val) => setEmail(val)}/>

                  <View style={styles.buttonWrapper}>
                      <TouchableOpacity 
                          style={styles.resetButton} 
                          onPress={handleResetPassword}
                          >
                          <Text style={styles.buttonText}>Send password reset email</Text>
                      </TouchableOpacity>
                 
                      <TouchableOpacity 
                          style={styles.loginButton} 
                          onPress={toLogin}
                          >
                          <Text style={styles.buttonText}>Back to Login</Text>
                      </TouchableOpacity>
                  </View> 
                </View>
              </View>
          </View>
        </ScrollView>
  
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6e8dc',
  },

  input: {
    borderBottomWidth: 1,
    borderColor: '#777',
    padding: 5,
    marginVertical: 10,
    width: 200,
  },

  image: {
    marginTop: 70,
    marginLeft: 20,
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },

  reset: {
    borderWidth: 1,
    padding: 20,
    paddingBottom: 40,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#969696',
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 22},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4
  },

  button: {
    backgroundColor: '#28978e', //2A9D8F
    borderRadius: 2,
    marginHorizontal: 1,
    padding: 10,
    paddingHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 9
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold'
  },

  section: {
    marginHorizontal: 45,
  },

  resetButton: {
    backgroundColor: '#f36541',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginVertical: 18,
  },

  loginButton: {
    backgroundColor: '#163f7d',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 60, 
  },

  buttonWrapper: {
    marginTop: 10
  }
});
