import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";

//This Search Component is done, but there's problem in NotesList.js

const Search = ({ handleSearchNote }) => {
  return (
    <KeyboardAvoidingView
      style={styles.searchwrapper}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput 
        style={styles.search} 
        placeholder="Type to Search" 
        onChangeText={(text) => handleSearchNote(text)}
        />
    </KeyboardAvoidingView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchwrapper: {
    backgroundColor: "#d1e0e0",
    borderRadius: 10, 
    padding: 2,
    marginVertical: 20, 
    marginHorizontal: 10
  },

  search: {
      marginLeft: 10
  }
});
