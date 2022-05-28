import { Button, Pressable, Platform, Alert, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import SleepPicker from '../components/SleepPicker'; 
import WaterPicker from '../components/WaterPicker'; 

export default function Register({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setrepeatPassword] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [favQuote, setFavQuote] = useState('');

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [birthday, setBirthday] = useState('Empty');

    const toLogin = () => {
        navigation.replace("Login")
      }

    // don't need later - dummy function for Register button
    const printAlert = () => {
        Alert.alert('Pressable Called ...')}

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
    
    // this can also be deleted because Firebase will handle this
    const passwordLength = (password) => {
        if(password.length < 7) {
            Alert.alert('Password should be at least 8 characters')
        } else {
            Alert.alert('Correct Password Length - continue')
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <ScrollView style={{backgroundColor: '#fff'}}>
                <View style={styles.container}>

                    <Text>Enter email:</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='e.g. johndoe@gmail.com'
                    onChangeText={(val) => setEmail(val)}/>
                    
                    <Text>Enter username:</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='e.g. johndoe'
                    onChangeText={(val) => setUsername(val)}/>

                    <Text>Enter password:</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={(val) => setPassword(val)}
                    secureTextEntry />

                    <Text>Repeat password:</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={(val) => setrepeatPassword(val)}
                    secureTextEntry />

                    <Text>Enter birthday:</Text>
                        
                    <View style={{margin:20}}>
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

                    <Text>Enter occupation:</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={(val) => setOccupation(val)}/>

                    <Text>Enter your favourite quote:</Text>
                    <TextInput
                    multiline
                    style={styles.input}
                    onChangeText={(val) => setFavQuote(val)}/>

                    <Text>Sleep goal:</Text>
                    <SleepPicker />

                    <Text>Water goal:</Text>
                    <WaterPicker />

                    <View style={styles.pressBox}>
                        <Pressable
                            onPress={passwordLength} // change to function when Register button is pressed
                            style={({ pressed }) => ({
                            backgroundColor: pressed ? '#FF3D00' : '#0080FF'
                            
                            })}>

                            {({ pressed }) => (
                                <Text style={styles.pressable_text}>Register</Text>
                            )}
                                
                        </Pressable>
                    </View>  

                    <View style={styles.buttonWrapper}>
                        <Button style={styles.button} title="Back to Login" onPress={toLogin} />
                    </View>

                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50
    },

    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200
    },

    datePickerStyle: {
        width: 230
    },

    pressable_text: {
        textAlign: 'center',
        fontSize: 15,
        color: '#ffff',
        padding: 4
    },
    
    pressBox: {
        marginTop: 10,
        marginBottom: 10
    },

    buttonWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      button: {
        margin: 15,
        padding: 10, 
      }

  });