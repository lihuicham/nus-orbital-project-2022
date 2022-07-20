import { style } from "@mui/system";
import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button,
  useWindowDimensions,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [listView, setListView] = useState(false);
  const [isNoteModalOpen, setNoteModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const onSaveNote = useCallback(() => {
    if (!text) {
      setNoteModalOpen(false);
      return;
    }

    let copyNotes = [...notes];

    if (selectedIndex !== null) {
      copyNotes[selectedIndex] = text;
    } else {
      copyNotes = copyNotes.concat(text);
    }

    setNotes(copyNotes);
    setNoteModalOpen(false);
    setSelectedIndex(null);
  }, [text, notes, setNotes]);

  const onNotePress = (index) => {
    setSelectedIndex(index);
    setText(notes[index]);
    setNoteModalOpen(true);
  };

  let noteStyle = [styles.note];
  const textProps = listView ? { numberOfLines: 3 } : {};

  if (listView) {
    noteStyle = noteStyle.concat(styles.noteListView);
  }

  const dimenstions = useWindowDimensions();

  const onDeleteNote = (index) => {
    let itemsCopy = [...notes];
    itemsCopy.splice(index, 1);
    setNotes(itemsCopy);
    setNoteModalOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={[styles.viewChoiceContainer]}>
        <Button
          title={listView ? "Full View" : "List View"}
          onPress={() => setListView(!listView)}
          color="#2B4C59"
        />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.notesContainer, { height: dimenstions.height }]}>
          {notes.map((note, index) => (
            <TouchableOpacity key={index} onPress={() => onNotePress(index)}>
              <View style={noteStyle}>
                <Text {...textProps}>{note}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.addNoteContainer}>
        <TouchableOpacity onPress={() => {
          setText("");
          setNoteModalOpen(true);
          }}>
          <View style={styles.plusWrapper}>
            <Text style={styles.plus}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal visible={isNoteModalOpen}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeadingContainer}>
            <Text style={styles.modalHeading}>Add a note</Text>
          </View>
          <TextInput
            onChangeText={setText}
            value={text}
            multiline
            placeholder="Write your ideas down!"
            style={styles.input}
          />
          <View style={styles.actionButtonContainer}>
            <View style={styles.actionButton}>
              <Button color="green" onPress={onSaveNote} title={"Save"} />
            </View>
            <View style={styles.actionButton}>
              <Button
                onPress={() => setNoteModalOpen(false)}
                title={"Cancel"}
              />
            </View>
            <View style={styles.actionButton}>
              <Button color="red" onPress={onDeleteNote} title={"Delete"} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C1D1D1'
  },

  notesContainer: {
    marginTop: 10,
    padding: 10,
    paddingRight: 20,
  },
  note: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  noteListView: {
    height: 80,
  },
  viewChoiceContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingRight: 20,
    alignItems: "flex-end",
  },
  addNoteContainer: {
    bottom: 80,
    right: 20,
    position: "absolute",
  },
  actionButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  actionButton: {
    flex: 1,
    padding: 10,
  },

  modalContainer: {
    backgroundColor: "#F7EDE2",
    height: '100%'
  },

  modalHeading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  modalHeadingContainer: {
    alignItems: "center",
    padding: 20,
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },

  plusWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  plus: {
      fontSize: 30,
  },
});

export default Notes;
