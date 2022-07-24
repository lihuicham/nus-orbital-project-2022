import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import React, { useState } from "react";
import { db } from '../firebase-config';
import { collection } from 'firebase/firestore';
import { getAuth, updateEmail, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";

export default function ChangeEmailAndPassword({ navigation }) {
  const toLogin = () => {
    navigation.replace("Login");
  };

  const toSettings = () => {
    navigation.replace("Settings")
  };

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const auth = getAuth();
  const user = auth.currentUser;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');


  const handleUpdateEmail = () => {
    // authenticateUser()
      updateEmail(user, email)
        .then(() => {
          emailRealTime(user.uid, email)
        })
        .then(() => {
          if (email === '') {
            Alert.alert("Invalid email", "Please enter a valid email.")
          } else {
            Alert.alert("Success", "Email updated!")
          }
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            Alert.alert("Invalid email", "Please enter a valid email.")
          }
          else if (error.code === 'auth/email-already-in-use') {
            Alert.alert("Email already in use", "Please enter a different email.")
          }
          else {
            Alert.alert("Error", "Something went wrong, please try again.")
          //alert(error.message)
          }
        })
    }

    const handleUpdatePassword = () => {
      password == repeatPassword &&
      updatePassword(user, password).then(() => {
        if (password === "" || repeatPassword === "") {
          Alert.alert("Invalid password", "Password should be at least 6 characters.")
        } else {
        alert("Success", "Password updated!")
        }
      })
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
            Alert.alert("Weak password", "Password should be at least 6 characters.")
        }
        else if (error.code === 'auth/internal-error') {
          Alert.alert("Password field empty", "Please fill up the password.")
        }
        else {
          Alert.alert("Error", "Something went wrong, please try again.")
        //alert(error.message)
        }
      })
      password != repeatPassword &&
        Alert.alert("Passwords do not match", "Please re-enter your passwords.")
    
    }

    // Realtime Database
    function emailRealTime(userId, email) {
      const db = getDatabase();
      update(ref(db, 'users/' + userId), {
        email: email
      });
    }

    // reauthenticate credentials
    const authenticateUser = () => {
      let credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        password
      );

      reauthenticateWithCredential(auth.currentUser, credential)
      .then(result => {
        console.log(result)
      })
      .catch((error) =>
        console.log(error))
      }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
  }}>
      <ScrollView style={{backgroundColor: '#533521'}}>

        <View style={styles.container}>
          <View style={styles.buttonWrapper}>
            <Pressable
              onPress={toSettings}
              style={({ pressed }) => ({
                backgroundColor: pressed ? "#FF3D00" : "#E76F51",
                borderRadius: 20,
                paddingLeft: 10,
                paddingRight: 10,
              })}
            >
              {({ pressed }) => (
                <Text style={styles.pressable_text}>Back</Text>
              )}
            </Pressable>
        </View>
          
        <Text style={styles.heading}> CHANGE EMAIL </Text>
          <View style={styles.section}>
            <Text style={styles.text}> Enter new email: </Text>
            <TextInput 
            style={styles.input}
            onChangeText={(val) => setEmail(val)}/>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleUpdateEmail}
                    >
                    <Text style={styles.buttonText}>Confirm Email</Text>
                </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.heading}> CHANGE PASSWORD </Text>
          
          <View style={styles.section}>
            <Text style={styles.text}> Enter new password: </Text>
            <TextInput 
            style={styles.input}
            onChangeText={(val) => setPassword(val)}
            secureTextEntry/>

            <Text style={styles.text}> Repeat new password: </Text>
            <TextInput 
            style={styles.input}
            onChangeText={(val) => setRepeatPassword(val)}
            secureTextEntry
            />
            <View style={styles.buttonWrapper}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleUpdatePassword}
                    >
                    <Text style={styles.buttonText}>Confirm password</Text>
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
    backgroundColor: "#533521",
    alignItems: "flex-start",
    marginLeft: 30
  },
  pressable_text: {
    textAlign: "center",
    fontSize: 15,
    color: "#ffff",
    padding: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 5,
    margin: 10,
    width: 200
  },

  heading: {
    flex: 1,
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#F4A261',
    letterSpacing: 1.3,
    textShadowColor: '#2A9D8F',
    textShadowRadius: 0.1,
    textShadowOffset: {
      width: 2,
      height: 2
    },
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 12,
    paddingTop: 12,
    paddingBottom: 15,
  },
  button: {
    backgroundColor: "#264653",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginVertical: 2
  },
  buttonText: {
    fontWeight: "600",
    color: '#ffffff',
  },
  section: {
    flex: 1,
    marginVertical: 20,
    paddingLeft: 10,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 7,
    backgroundColor: '#f1e7e1',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  text: {
    color: '#264653',
    marginVertical: 5,
    fontSize: 15,
    marginLeft: 4
  },
});
