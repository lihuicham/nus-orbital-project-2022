import { React, useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, TextInput } from "react-native";
import { authentication } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ModalChangeEmailPassword() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye')
    

    const handleLogin = () => {
        signInWithEmailAndPassword(authentication, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("Login : " + user.email); 
            // allow change of email and password if correct login details
            user.email &&  navigation.navigate("ChangeNameAndPassword")
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
            else if (email === '' || password === '') {
              Alert.alert("Empty field", "Please enter both fields.")
            }
            else {
              Alert.alert("Error", "Something went wrong, please try again.")
            //alert(error.message)
            }
          })
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
        <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>

                <Text style={styles.loginText}>Log in again to change email or password</Text>
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


                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleLogin}
                >
                <Text style={styles.modalText}>Sign in</Text>
                </Pressable>

                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.modalText}>Go back</Text>
                </Pressable>


            </View>
            </View>
        </Modal>
        <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
        >
            <Text style={styles.buttonText}>Change Email or Password</Text>
            <Text style={styles.arrow}>☞</Text>
        </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    margin: 22
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },

  modalView: {
    marginTop: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingBottom: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 3,
    borderRadius: 10,
    opacity: 0.8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30
  },
  modalText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

  buttonText: {
    fontSize: 17,
    marginLeft: 10
  },

  loginText: {
    marginBottom: 25,
    textAlign: "center",
    fontWeight: "bold"
  },
  arrow: {
    fontSize: 33,
    marginLeft: 68
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
