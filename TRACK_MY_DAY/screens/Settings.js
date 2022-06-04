import { StyleSheet, Text, View, Button, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'

const Settings = () => {

  const [isNotification, setIsNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("Off")

  const toggleNotification = () => {
    setIsNotification(prevState => !prevState);
    if (isNotification) {
      setNotificationText("Off")
    } else {
      setNotificationText("On")
    }
  }

  const [isSound, setIsSound] = useState(false);
  const [soundText, setSoundText] = useState("Off")

  const toggleSound = () => {
    setIsSound(prevState => !prevState);
    if (isSound) {
      setSoundText("Off")
    } else {
      setSoundText("On")
    }
  }



  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.itemWrapper}>

          <View style={styles.item}>
            <View style={styles.titleWrapper}>
              <Text style={styles.itemTitle}>Notification</Text>
              <Text style={styles.itemSubtitle}>Turn on/off notification</Text>
            </View>
            <View style={styles.switchWrapper}>
              <Text style={styles.switchTitle}>{notificationText}</Text>
              <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isNotification ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleNotification}
              value={isNotification}
              />
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.titleWrapper}>
              <Text style={styles.itemTitle}>Sound</Text>
              <Text style={styles.itemSubtitle}>Turn on/off sound</Text>
            </View>
            <View style={styles.switchWrapper}>
              <Text style={styles.switchTitle}>{soundText}</Text>
              <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isSound ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSound}
              value={isSound}
              />
            </View>
          </View>

        </View>
      </View>
    </ScrollView> 

  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  itemWrapper: {
    width: '100%', 
    marginTop: 40, 
    justifyContent: 'center', 
    //borderWidth: 2
  }, 

  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', 
    marginBottom: 10, 
    //borderBottomWidth: 2
  },

  itemTitle: {
    fontSize: 30,
    marginBottom: 10
  }, 

  switchWrapper: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 30
  }, 
  
  switchTitle: {
    fontSize: 20, 
  }

})