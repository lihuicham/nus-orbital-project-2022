import { Button, TouchableOpacity, Platform, Alert, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { db } from '../firebase-config';
import { collection, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

export default function Profile({ navigation }) {

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const auth = getAuth();
    const user = auth.currentUser;

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [birthday, setBirthday] = useState('Empty');

    const toHome = () => {
        navigation.replace("Drawer");
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) +
        '/' + tempDate.getFullYear();

        setBirthday(fDate);
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);

    }

    // creating new user in firebase
    const [username, setUsername] = useState("")
    const [favQuote, setFavQuote] = useState("")
    const [sleepGoal, setSleepGoal] = useState("0")
    const [waterGoal, setWaterGoal] = useState("0")
    const [exerciseGoal, setExerciseGoal] = useState("0")
    const [studyGoal, setStudyGoal] = useState("0")

    const updateProfile = async () => {
        await setDoc(doc(db, "users", user.uid), {
            username: username, favQuote: favQuote, birthday: birthday, 
            sleepGoal: sleepGoal, waterGoal: waterGoal, exerciseGoal: exerciseGoal,
            studyGoal: studyGoal, id: user.uid
          })
          .then(
              username && 
              Alert.alert("Profile Registered!", "",
            [
              {
                text: "Go to Home",
                onPress: () => toHome()
              },
            ]
          ))
          .catch((error) => 
            alert(error.message));
        if (username == "") {
            Alert.alert("Username empty", "Please enter a username.")
        }
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <ScrollView style={{backgroundColor: '#264653'}}> 
            <View style={styles.section}>
                
                <Text style={styles.heading}> ABOUT ME </Text>

                <View style={styles.container}>
                    
                    <Text style={styles.text}>Enter username:</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='e.g. johndoe'
                    onChangeText={(val) => setUsername(val)}/>

                        <Text style={styles.text}>Enter birthday:</Text>
                            
                        <View style={styles.dateSelector}>
                            <Button title='Select Date' onPress={() => showMode('date')} />
                        </View>

                        { show && (
                            <DateTimePicker
                            testID='dateTimePicker'
                            value={ date }
                            mode={ mode }
                            display='default'
                            onChange = { onChange }
                        />)}

                        <Text style={styles.birthdayText}>Selected date: { birthday }</Text> 

                        <Text style={styles.text}>Enter your favourite quote:</Text>
                        <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={(val) => setFavQuote(val)}/>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}> MY GOALS </Text>    

                    <View style={styles.container}>
                        <Text style={styles.text}>Water goal:</Text>
                        <View style={styles.sliderBox}>
                        <Slider
                        style={{width: 200, height: 40}}
                        minimumValue={0}
                        maximumValue={10}
                        step={1}
                        minimumTrackTintColor="#3b7cff"
                        maximumTrackTintColor="#000000"
                        onValueChange={(val) => setWaterGoal(val)}
                        />
                        <Text style={styles.goals}>{waterGoal} litres</Text>
                        </View>

                        <Text style={styles.text}>Sleep goal:</Text>
                        <View style={styles.sliderBox}>
                        <Slider
                        style={{width: 200, height: 40}}
                        minimumValue={0}
                        maximumValue={24}
                        step={1}
                        minimumTrackTintColor="#3b7cff"
                        maximumTrackTintColor="#000000"
                        onValueChange={(val) => setSleepGoal(val)}
                        />
                        <Text style={styles.goals}>{sleepGoal} hours</Text>
                        </View>

                        <Text style={styles.text}>Exercise goal:</Text>
                        <View style={styles.sliderBox}>
                        <Slider
                        style={{width: 200, height: 40}}
                        minimumValue={0}
                        maximumValue={12}
                        step={0.5}
                        minimumTrackTintColor="#3b7cff"
                        maximumTrackTintColor="#000000"
                        onValueChange={(val) => setExerciseGoal(val)}
                        />
                        <Text style={styles.goals}>{exerciseGoal} hours</Text>
                        </View>

                        <Text style={styles.text}>Study goal:</Text>
                        <View style={styles.sliderBox}>
                        <Slider
                        style={{width: 200, height: 40}}
                        minimumValue={0}
                        maximumValue={24}
                        step={1}
                        minimumTrackTintColor="#3b7cff"
                        maximumTrackTintColor="#000000"
                        onValueChange={(val) => setStudyGoal(val)}
                        />
                        <Text style={styles.goals}>{studyGoal} hours</Text>
                        </View>

                    </View>
                    </View>
               
                    
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity 
                        style={styles.button} 
                        onPress={updateProfile}
                        >
                            <Text style={styles.buttonText}>CONFIRM</Text>
                        </TouchableOpacity>
                    </View>

            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: '#e8dad1',
      alignItems: 'flex-start',
      marginTop: 10,
      marginLeft: 30,
      marginRight: 30
    },

    section: {
        borderWidth: 0.6,
        borderRadius: 15,
        borderColor: "#e5cfc7",
        margin: 20,
        backgroundColor: '#e8dad1',
        paddingBottom: 20
    },

    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      marginTop: 15,
      marginBottom: 15,
      width: 250
    },

    datePickerStyle: {
        width: 230
    },

    dateSelector: {
        marginTop: 15,
        marginBottom: 15
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
    },

    buttonWrapper: {
        flex: 1,
        alignItems: 'center',
      },
    
    button: {
        margin: 7,
        backgroundColor: "#159947",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20
    },

    buttonHome: {
        margin: 7,
        backgroundColor: "#ec791e",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20
    },
      
    buttonText: {
        fontWeight: "600",
        color: '#ffffff',
        fontSize: 15
    },

    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
        color:'#653e25',
        letterSpacing: 1.3
    },

    text: {
        marginTop: 10,
        color: '#264653', 
        fontSize: 15,
    },

    birthdayText: {
        color: "#575454",
        paddingBottom: 10,
    },

    goals: {
        color: "#575454",
        marginBottom: 20,
        // marginLeft: 130
    },

    buttonContainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 30,
    },

    sliderBox: {
        flexDirection: "row",
    }
  });