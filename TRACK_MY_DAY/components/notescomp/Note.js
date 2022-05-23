import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Note = ({key, text, date}) => {
  return (
    <View style={styles.notewrapper}>
      <View style={styles.noteheader}>
          <Text>{text}</Text>
      </View>
      <View style={styles.notefooter}>
          <Text>{date}</Text>
          <Text>Delete</Text>
      </View>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({
    notewrapper: {
        backgroundColor: '#FEF68A',
        borderRadius: 10,
        padding: 20,
        height: 180, 
        justifyContent: 'space-between',
        marginVertical: 10, 
        marginHorizontal: 20,  
    },

    noteheader: {

    },

    notefooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})