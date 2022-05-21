import { Button, Pressable, Platform, Alert, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [favQuote, setFavQuote] = useState('');
    const [sleep, setSleep] = useState('');
    const [water, setWater] = useState('');



    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [birthday, setBirthday] = useState('Empty');


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
        console.log(fDate);
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    const passwordLength = (password) => {
        if(password.length < 7) {
            Alert.alert('Password should be at least 8 characters')
        } else {
            // also return details to pass to next page
            Alert.alert('Correct Password Length - continue')
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <ScrollView>
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
                    onChangeText={(val) => setPassword(val)}/>

                    <Text>Enter birthday:</Text>
                        
                    <View style={{margin:20}}>
                        <Button title='Select Date' onPress={() => showMode('date')} />
                        <Text> birthday: { birthday } </Text>
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
                    <TextInput
                    multiline
                    style={styles.input}
                    onChangeText={(val) => setSleep(val)}/>

                    <Text>Water goal:</Text>
                    <TextInput
                    multiline
                    style={styles.input}
                    onChangeText={(val) => setWater(val)}/>

                    <View style={styles.pressBox}>
                        <Pressable
                            onPress={passwordLength} // figure this out - based on register details
                            style={({ pressed }) => ({
                            backgroundColor: pressed ? '#FF3D00' : '#0080FF', // colour a bit lighter when pressed
                            
                            })}>

                            {({ pressed }) => (
                                <Text style={styles.pressable_text}>Register</Text>
                            )}
                                
                        </Pressable>
                    </View>



                    

                    
                    <Text> name: {username} and password: {password} and email: { email } </Text>
                    
                    <Text> occupation: { occupation } and favquote: { favQuote } </Text>

                    

                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: { //key-value pairs inside object
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
    }


  });