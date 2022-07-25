import { React, useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, TextInput } from "react-native";
import { signInWithEmailAndPassword, getAuth, deleteUser } from 'firebase/auth';
import { db, authentication } from '../firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { getDatabase, ref, remove } from "firebase/database";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ModalDeleteAccount() {
    const navigation = useNavigation();

    const auth = getAuth();
    const user = auth.currentUser;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye')

    const deleteAccount = async (id) =>  {
      const userDoc = doc(db, "users", id);
      // delete User documents from Firestore
      await deleteDoc(userDoc);  
      // delete User from Firebase Authentication
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
              },
              { text: "Delete", onPress: () => { deleteData(), deleteAccount(user.uid) }  }
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

    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'eye-off') {
          setRightIcon('eye');
          setPasswordVisibility(!passwordVisibility);
        }
    }

    function deleteData () {
      const db = getDatabase();
      remove(ref(db, 'users/' + user.uid))
      .catch((error) => {
        console.log(error);
      });
      
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

                <Text style={styles.loginText}>Log in again to delete account</Text>
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
                style={[styles.button, styles.deleteSignInButton]}
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
            <Text style={styles.buttonText}>Delete Account</Text>
            <Text style={styles.arrow}>☞</Text>
        </TouchableOpacity>
        
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
    backgroundColor: '#D80505',
    padding: 3,
    borderRadius: 10,
    borderColor: '#E20505',
    borderWidth: 0.5,
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
  deleteSignInButton: {
    backgroundColor: '#F70606',
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
    color: '#ffffff',
    fontWeight: 'bold',
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
    marginLeft: 155,
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});