import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import ModalChangeEmailPassword from '../components/ModalChangeEmailPassword';
import ModalDeleteAccount from '../components/ModalDeleteAccount';

const Settings = ({ navigation }) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const toChangeDetails = () => {
    navigation.navigate("ChangeDetails")
  }

  return (
    <View style={styles.container}> 
      <View style={styles.row}>
        <Text style={styles.text}>Notifications</Text>
        <View style={styles.switch}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>


      <TouchableOpacity 
      onPress={toChangeDetails}
      >
        <View style={styles.row}>
        <Text style={styles.text}> Update Personal Details</Text>
        <Text style={styles.arrow}>☞</Text>
        </View>
      </TouchableOpacity>

      
      <ModalChangeEmailPassword/>
      <ModalDeleteAccount />

    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dccdc3'
  },
  text: {
    fontSize: 17,
    marginLeft: 10
  },
  switch: {
    justifyContent: 'flex-end',
    marginLeft: 166, //150,
    transform: [{ scaleX: 1.5 }, { scaleY: 1.3 }]
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:20,
    marginTop: 20,
    backgroundColor: '#ffffffcc',
    padding: 4,
    borderRadius: 10,
   },
  arrow: {
    fontSize: 33,
    marginLeft: 88
  }
});
