import { Alert, Image, Pressable, StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import React, { useState } from 'react';
import { authentication } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase-config';
import { collection } from 'firebase/firestore';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Register({ navigation }) {
    const [password, setPassword] = useState('');
    const [repeatPassword, setrepeatPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye')

    const usersCollectionRef = collection(db, "users");

    const toLogin = () => {
        navigation.replace("Login")
    }
    const toProfile = () => {
        navigation.replace("Profile")
    }

    const handleRegister = () => {
        password == repeatPassword &&
        createUserWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Register : " + user.email);
            Alert.alert(
                "User created!",
                "Please register your details",
                [
                    {
                        text: "Register Profile Details",
                        onPress: () => toProfile(),
                    }
                ]);
        })
        .catch((error) => {
            if (error.code === 'auth/invalid-email') {
                Alert.alert("Invalid email", "Please enter a valid email.")
            }
            else if (error.code === 'auth/weak-password') {
                Alert.alert("Weak password", "Password should be at least 6 characters.")
            }
            else if (error.code === 'auth/internal-error') {
              Alert.alert("Password field empty", "Please fill up the password.")
            }
            else if (error.code === 'auth/email-already-in-use') {
                Alert.alert("Email already in use", "Please log in or register using a different email.")
            }
            else {
              Alert.alert("Error", "Something went wrong, please try again.")
            //alert(error.message)
            }
          })
        password != repeatPassword &&
            Alert.alert("Passwords do not match", "Please re-enter your passwords.")
    };

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
                    
                    <View style={styles.register}>                        
                        <TextInput
                        style={styles.input}
                        placeholder='Email'
                        onChangeText={(val) => setEmail(val)}/>

                        <View style={styles.password}>
                            <TextInput
                            style={styles.input}
                            placeholder='Password (min. 6 char)'
                            onChangeText={(val) => setPassword(val)}
                            secureTextEntry={passwordVisibility} />
                            <Pressable 
                            onPress={handlePasswordVisibility}
                            style={{position: 'absolute', marginLeft: 180}}>
                            <MaterialCommunityIcons name={rightIcon} size={20} color="#232323"/>
                            </Pressable>
                        </View>

                        <View style={styles.password}>
                            <TextInput
                            style={styles.input}
                            placeholder='Repeat password'
                            onChangeText={(val) => setrepeatPassword(val)}
                            secureTextEntry={passwordVisibility} />
                            <Pressable 
                            onPress={handlePasswordVisibility}
                            style={{position: 'absolute', marginLeft: 180}}>
                            <MaterialCommunityIcons name={rightIcon} size={20} color="#232323"/>
                            </Pressable>
                        </View>

                        
                        <TouchableOpacity 
                            style={styles.registerButton} 
                            onPress={handleRegister}
                            >
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={styles.button}
                        onPress={() => toLogin()}
                        >
                        <Text style={styles.buttonText}>Back to Login</Text>
                        </TouchableOpacity>
                        

                    </View>
                    </View>
                    
                </View>
                </ScrollView>
        
        </TouchableWithoutFeedback>
    );
}

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
        marginTop: 30,
        marginLeft: 20,
        width: 350,
        height: 350,
        resizeMode: 'contain',
    },

    register: {
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
        borderRadius: 20,
        paddingVertical: 7,
        paddingHorizontal: 64,
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

    registerButton: {
        backgroundColor: '#f36541',
        borderRadius: 20,
        paddingVertical: 7,
        paddingHorizontal: 80,
        marginTop: 18,
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