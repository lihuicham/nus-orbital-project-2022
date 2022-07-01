import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TextInput, Image, Keyboard, Pressable, ScrollView, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { authentication } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye')

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Drawer")
      }
    })
    return unsubscribe;
  }, [])
  

  const handleLogin = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login : " + user.email);
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert("Invalid email", "Please enter a valid email.")
        }
        else if (error.code === 'auth/user-not-found') {
          Alert.alert("User not found", "Please enter an existing user or create a new account.")
        }
        else if (error.code === 'auth/wrong-password') {
          Alert.alert("Incorrect password", "Please re-enter your password or reset your password.")
        }
        else if (error.code === 'auth/internal-error') {
          Alert.alert("Password field empty", "Please fill up the password or reset your password.")
        }
        else {
          Alert.alert("Error", "Something went wrong, please try again.")
        //alert(error.message)
        }
      })
  };

  const toForgotPassword = () => {
    navigation.replace("ForgotPassword")
  }

  const toRegister = () => {
    navigation.replace("Register")
  }

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
      }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <ScrollView style={{backgroundColor:'#f6e8dc'}}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.image}></Image>
        <View style={styles.section}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.login}>

              <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={(val) => setEmail(val)}/>

              <View style={styles.password}>
                <TextInput
                  style={styles.input}
                  placeholder='Password'
                  onChangeText={(val) => setPassword(val)}
                  secureTextEntry={passwordVisibility} />

                <Pressable 
                onPress={handlePasswordVisibility}
                style={{position: 'absolute', marginLeft: 180}}>
                  <MaterialCommunityIcons name={rightIcon} size={20} color="#232323"/>
                </Pressable>
              </View>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity 
                        style={styles.loginButton} 
                        onPress={handleLogin}
                        >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>  

                <TouchableOpacity 
                    style={styles.resetButton} 
                    onPress={toForgotPassword}
                    >
                    <Text style={styles.buttonText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.registerButton} 
                    onPress={toRegister}
                    >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            
          </KeyboardAvoidingView>
        </View>
        
        <StatusBar style="auto" />
      </View>
      </ScrollView>
    </TouchableWithoutFeedback>

    
)};

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
  
  image: {
    marginTop: 35,
    marginLeft: 20,
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  login: {
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
    backgroundColor: '#28978e',
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

  registerButton: {
    backgroundColor: '#28978e',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 81,
    marginVertical: 18,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3
},

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold'
  },

  section: {
   marginHorizontal: 45,
  },

  loginButton: {
    backgroundColor: '#f36541',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 90,
    marginVertical: 18,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3
  },

  resetButton: {
    backgroundColor: '#163f7d',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 50,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3
  },
  
  password: {
    flexDirection: 'row',
    alignItems: 'center'
  }

});
