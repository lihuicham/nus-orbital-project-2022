import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { useNavigation } from '@react-navigation/native';


export default function SleepPicker() {
  const [sleepPicker, setSleepPicker] = useState('Unknown');

  //console.log(sleepPicker)
  const navigation = useNavigation();
  const [sleepHours, setSleepHours] = useState("0");
  const sleepData = () => {
    navigation.navigate("Profile", sleepHours)
  }

  
  // console.log("sleepPicker sleepData: ", sleepData())
  // console.log("sleepHours: ", sleepHours)
 
    
    

  return (
    <View style={styles.screen}>
      <Picker
        selectedValue={sleepPicker}
        onValueChange={(value, index) => {setSleepPicker(value); setSleepHours(value)}}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="select" value="Unknown" color="grey" />
        <Picker.Item label="4 hours" value="4" />
        <Picker.Item label="5 hours" value="5" />
        <Picker.Item label="6 hours" value="6" />
        <Picker.Item label="7 hours" value="7" />
        <Picker.Item label="8 hours" value="8" />
        <Picker.Item label="9 hours" value="9" />
        <Picker.Item label="10 hours" value="10" />
        <Picker.Item label="11 hours" value="11" />
        <Picker.Item label="12 hours" value="12" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    picker: {
      width: 150
    },
  });