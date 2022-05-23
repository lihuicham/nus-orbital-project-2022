import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Note from "../components/notescomp/Note";

//SERVES AS APP.JS
export default function Notes() {
  const [notes, setNotes] = useState('');
  const [notesItems, setNotesItems] = useState([]);
  // to count the character limit 
  const characterLimit = 200;

  const handleChange = (text) => {
    if (characterLimit - text.length >= 0) {
      setNotes(text);
    }
  }

  const handleSave = () => {
    Keyboard.dismiss();
    setNotesItems([...notesItems, notes]);
    setNotes('');
  };

  const deleteNote = (index) => {
    let itemsCopy = [...notesItems];
    itemsCopy.splice(index, 1);
    setNotesItems(itemsCopy);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/*Add notes*/}
        <KeyboardAvoidingView
          style={styles.newnotewrapper}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.newnote}
            multiline={true}
            placeholder="Type to add a note"
            value={notes}
            onChangeText={(text) => handleChange(text)}
          />
          <View style={styles.notefooter}>
            <Text>{characterLimit - notes.length} Remaining</Text>
            <TouchableOpacity onPress={() => handleSave()}>
              <View style={styles.savewrapper}>
                <Text style={styles.save}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        {/*Notes List*/}
        <View style={styles.noteslistwrapper}>
          {notesItems.map((item, index) => {
            return (
              /*FIXTHIS - need to figure out how to delete based on index
              deleteNote function should be implemented in Note.js - Delete*/
              <TouchableOpacity key={index} onPress={() => deleteNote(index)}>
                <Note text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  noteslistwrapper: {
    marginTop: 10,
  },
  
  newnotewrapper: {
    marginTop: 70,
    backgroundColor: "#99ffff",
    borderRadius: 10,
    padding: 20,
    height: 180,
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 20,
  },

  notefooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  savewrapper: {
    width: "auto",
    height: "auto",
    padding: 5,
    backgroundColor: "#FFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
