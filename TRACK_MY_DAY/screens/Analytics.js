import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Analytics = ({ navigation }) => {
  
  const toHome = () => {
    navigation.navigate("Home")
  }

  return (
    <View style={styles.wrapper}>
      <Text>Analytics</Text>
      <Button style={styles.button} title="Back to Home" onPress={toHome} />
    </View>
  )
}

export default Analytics

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  button: {
    margin: 15,
    padding: 10, 
  }
})