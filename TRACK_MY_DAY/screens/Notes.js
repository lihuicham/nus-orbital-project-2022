import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotesList from '../components/notescomp/NotesList'

//SERVES AS APP.JS
export default function Notes() {
  return (
    <View>
      <NotesList />
    </View>
  )
}

const styles = StyleSheet.create({
})