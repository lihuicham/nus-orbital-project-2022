import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Suggestion = ({navigation}) => {

  const toHome = () => {
    navigation.navigate("Home")
  }

  return (
    <View style={styles.wrapper}>
      <Text>Suggestion</Text>
      <Button style={styles.button} title="Back to Home" onPress={toHome} />
    </View>
  )
}

export default Suggestion

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