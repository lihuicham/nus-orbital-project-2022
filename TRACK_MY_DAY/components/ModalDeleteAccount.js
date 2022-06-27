import { React, useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, TextInput } from "react-native";
import { signInWithEmailAndPassword, getAuth, deleteUser } from 'firebase/auth';
import { db, authentication } from '../firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function ModalDeleteAccount() {
    const navigation = useNavigation();

    const auth = getAuth();
    const user = auth.currentUser;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    const deleteAccount = async (id) =>  {
      const userDoc = doc(db, "users", id);
      await deleteDoc(userDoc);  
      deleteUser(user).then(() => {
        handleLogout()
        console.log("user deleted")
        Alert.alert("User deleted")
      }).catch((error) => {
        alert(error.message)
        console.log(error.message)
      });
    }

    const handleLogout = () => {
      console.log("Logout: " + authentication.currentUser?.email)
      authentication
      .signOut()
      .then(() => {navigation.replace("Login")})
      .catch((error) => alert(error.message))
    }


    const handleLogin = () => {
      setPassword('')
        signInWithEmailAndPassword(authentication, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("Login : " + user.email);  
            user && setModalVisible(!modalVisible); // hides after logging in  
            Alert.alert("Login successful.",
            "Deleting your account is irreversible. Do you want to continue?",
            [
              {
                text: "Go back",
                onPress: () => console.log("Cancel Pressed"),
                //style: "cancel"
              },
              { text: "Delete", onPress: () => deleteAccount(user.uid) }
            ]
          )
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
            else if (email === '' || password === '') {
              Alert.alert("Empty field", "Please enter both fields.")
            }
            else {
               Alert.alert("Error", "Something went wrong, please try again.")
            // alert(error.message)
            }
          })
          
    };


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

                <Text style={styles.loginText}>Log in again to delete account</Text>
                <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={(val) => setEmail(val)}/>
                
                <TextInput
                style={styles.input}
                placeholder='Password'
                onChangeText={(val) => setPassword(val)}
                secureTextEntry={isSecureEntry}
                ></TextInput>


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
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
        >
            <Text style={styles.buttonText}>Delete Account</Text>
            <Text style={styles.arrow}>☞</Text>
        </Pressable>
        
        </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    marginHorizontal: 22
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
    marginLeft: 155
  }
});