import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Note = ({ text }) => {
  return (
    <View style={styles.notewrapper}>
      <View style={styles.noteheader}>
        <Text>{text}</Text>
      </View>
      <View style={styles.notefooter}>
      <Text>Date</Text>
      <TouchableOpacity>
        <View style={styles.deletewrapper}>
          <Text style={styles.delete}>Delete</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  notewrapper: {
    backgroundColor: "#ffffb3",
    borderRadius: 10,
    padding: 20,
    height: 180,
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 20,
  },

  noteheader: {},

  notefooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  deletewrapper: {
    width: "auto",
    height: "auto",
    padding: 5,
    backgroundColor: "pink",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
