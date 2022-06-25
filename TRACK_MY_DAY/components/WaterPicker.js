import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { useNavigation } from '@react-navigation/native';

export default function SleepPicker() {
  const [waterPicker, setWaterPicker] = useState('Unknown');

  const navigation = useNavigation();
  const [waterAmt, setWaterAmt] = useState("0");
  const waterData = () => {
    navigation.navigate("Profile", waterAmt)
  }


  return (
    <View style={styles.screen}>
      <Picker
        selectedValue={waterPicker}
        onValueChange={(value, index) => {setWaterPicker(value); setWaterAmt(value)}}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="select" value="Unknown" color="grey" />
        <Picker.Item label="4 glasses" value="4" />
        <Picker.Item label="5 glasses" value="5" />
        <Picker.Item label="6 glasses" value="6" />
        <Picker.Item label="7 glasses" value="7" />
        <Picker.Item label="8 glasses" value="8" />
        <Picker.Item label="9 glasses" value="9" />
        <Picker.Item label="10 glasses" value="10" />
        <Picker.Item label="11 glasses" value="11" />
        <Picker.Item label="12 glasses" value="12" />
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