import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})