import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Note from './Note'

const NotesList = () => {
  return (
    <View style={styles.noteslistwrapper}>
      <Note />
      <Note />
    </View>
  )
}

export default NotesList

const styles = StyleSheet.create({
    noteslistwrapper: {
        marginTop:30, 
    },
})