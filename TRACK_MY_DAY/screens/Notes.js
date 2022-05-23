import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import NotesList from "../components/notescomp/NotesList";

//SERVES AS APP.JS
export default function Notes() {
  const [notes, setNotes] = useState([
    {
      key: 1, 
      text: "This is my first note!",
      date: "23/05/2022",
    },

    {
      key: 2, 
      text: "This is my second note!",
      date: "28/05/2022",
    },

    {
      key: 3, 
      text: "This is my third note!",
      date: "30/05/2022",
    },
    
  ]);

  return (
    <View>
      {/* the items prop here refers to an array of notes */}
      <NotesList items={notes} />
    </View>
  );
}

const styles = StyleSheet.create({});
