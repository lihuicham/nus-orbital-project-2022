import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import React, { useState } from "react";
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import Slider from '@react-native-community/slider';

export default function ChangeDetails({ navigation }) {

  const toSettings = () => {
    navigation.replace("Settings")
  };

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const auth = getAuth();
  const user = auth.currentUser;

  const [newUsername, setNewUsername] = useState("")
  const [newFavQuote, setNewFavQuote] = useState("")
  const [newSleepGoal, setNewSleepGoal] = useState("0")
  const [newWaterGoal, setNewWaterGoal] = useState("0")
  const [newExerciseGoal, setNewExerciseGoal] = useState("0")
  const [newStudyGoal, setNewStudyGoal] = useState("0")

  const updateUsername = async (id, newUsername) => {
    const newFields = {username: newUsername}
    const userDoc = doc(db, "users", id)
    await updateDoc(userDoc, newFields)
    .then(Alert.alert("Username updated!"))
  }

  const updateQuote = async (id, newFavQuote) => {
    const newFields = {favQuote: newFavQuote}
    const userDoc = doc(db, "users", id)
    await updateDoc(userDoc, newFields)
    .then(Alert.alert("Favourite quote updated!"))
  }

  const updateWaterGoal = async (id, newWaterGoal) => {
    const newFields = {waterGoal: newWaterGoal}
    const userDoc = doc(db, "users", id)
    await updateDoc(userDoc, newFields)
    .then(Alert.alert("Water goal updated!"))
  }

  const updateSleepGoal = async (id, newSleepGoal) => {
    const newFields = {sleepGoal: newSleepGoal}
    const userDoc = doc(db, "users", id)
    await updateDoc(userDoc, newFields)
    .then(Alert.alert("Sleep goal updated!"))
  }

  const updateExerciseGoal = async (id, newExerciseGoal) => {
    const newFields = {exerciseGoal: newExerciseGoal}
    const userDoc = doc(db, "users", id)
    await updateDoc(userDoc, newFields)
    .then(Alert.alert("Exercise goal updated!"))
  }

  const updateStudyGoal = async (id, newStudyGoal) => {
    const newFields = {studyGoal: newStudyGoal}
    const userDoc = doc(db, "users", id)
    await updateDoc(userDoc, newFields)
    .then(Alert.alert("Study goal updated!"))
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
  }}>
      <ScrollView style={{backgroundColor: '#264653'}}>

        

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

        <View style={styles.container}>
          
            <View style={styles.section}>
                <Text style={styles.heading}> ABOUT ME </Text>
                <Text style={styles.text}> Enter new username: </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(val) => setNewUsername(val)}/>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => updateUsername(user.uid, newUsername)}
                        >
                        <Text style={styles.buttonText}>Update username</Text>
                    </TouchableOpacity>
                </View>
                

                <Text style={styles.text}> Enter new favourite quote: </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(val) => setNewFavQuote(val)}/>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => updateQuote(user.uid, newFavQuote)}
                        >
                        <Text style={styles.buttonText}>Update quote</Text>
                    </TouchableOpacity>
                </View>
            </View>

       
        <View style={styles.section}>
            <Text style={styles.heading}> GOALS </Text>
            <Text style={styles.text}> New water goal: </Text>
            <View style={styles.sliderBox}>
                <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={10}
                step={1}
                minimumTrackTintColor="#3b7cff"
                maximumTrackTintColor="#000000"
                onValueChange={(val) => setNewWaterGoal(val)}
                />
                <Text>{newWaterGoal} litres</Text>
            </View>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => updateWaterGoal(user.uid, newWaterGoal)}
                    >
                    <Text style={styles.buttonText}>Update water goal</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}> New sleep goal: </Text>
            <View style={styles.sliderBox}>
                <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={24}
                step={1}
                minimumTrackTintColor="#3b7cff"
                maximumTrackTintColor="#000000"
                onValueChange={(val) => setNewSleepGoal(val)}
                />
                <Text>{newSleepGoal} hours</Text>
            </View>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => updateSleepGoal(user.uid, newSleepGoal)}
                    >
                    <Text style={styles.buttonText}>Update water goal</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}>New exercise goal:</Text>
            <View style={styles.sliderBox}>
                <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={12}
                step={0.5}
                minimumTrackTintColor="#3b7cff"
                maximumTrackTintColor="#000000"
                onValueChange={(val) => setNewExerciseGoal(val)}
                />
                <Text>{newExerciseGoal} hours</Text>
            </View>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => updateExerciseGoal(user.uid, newExerciseGoal)}
                    >
                    <Text style={styles.buttonText}>Update water goal</Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.text}>New study goal:</Text>
            <View style={styles.sliderBox}>
                <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={24}
                step={1}
                minimumTrackTintColor="#3b7cff"
                maximumTrackTintColor="#000000"
                onValueChange={(val) => setNewStudyGoal(val)}
                />
                <Text>{newStudyGoal} hours</Text>
            </View>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => updateStudyGoal(user.uid, newStudyGoal)}
                    >
                    <Text style={styles.buttonText}>Update water goal</Text>
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
    backgroundColor: "#264653",
  },
  pressable_text: {
    textAlign: "center",
    fontSize: 15,
    color: "#ffff",
    padding: 4,
    fontWeight: "500"
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 5,
    margin: 10,
    width: 200,
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color:'#653e25',
    letterSpacing: 1.3
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 12,
    paddingTop: 12,
    paddingBottom: 15,
    
  },
  section: {
    flex: 1,
    borderWidth: 0.6,
    borderRadius: 15,
    borderColor: "#e5cfc7",
    backgroundColor: '#e8dad1',
    margin: 20,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#6A8FE9",
    borderRadius: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    
  },
  buttonText: {
    fontWeight: "600",
    color: '#ffffff',
  },
  text: {
    color: '#264653',
    marginTop: 4,
    marginBottom: 4,
    fontSize: 15
  },
  sliderBox: {
    flexDirection: "row",
  }

});
