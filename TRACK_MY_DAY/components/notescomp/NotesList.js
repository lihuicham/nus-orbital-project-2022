import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Note from './Note'

const NotesList = ({ items }) => {
  return (
    <View style={styles.noteslistwrapper}>
        {
            //the note here refers to each note item in the items array 
            items.map((note) => (
                <Note key={note.key} text={note.text} date={note.date} /> 
        ))}
    </View>
  )
}

export default NotesList

const styles = StyleSheet.create({
    noteslistwrapper: {
        marginTop:30, 
    },
})