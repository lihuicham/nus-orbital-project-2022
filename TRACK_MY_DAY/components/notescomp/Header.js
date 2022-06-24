import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.headerwrapper}>
      <Text style={styles.header}>My Notes</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerwrapper: {
      marginTop: 10,
      marginHorizontal: 10, 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', 
  },

  header: {
      fontSize: 40, 
      fontWeight: 'bold',
  },

togglewrapper: {
    width: "auto",
    height: "auto",
    padding: 5,
    backgroundColor: "#d9d9d9",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },

});
