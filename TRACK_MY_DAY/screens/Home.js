import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Button} from "react-native";
import React from "react";
import Ring from "../components/Ring";

export default function Home({ navigation }) {
  const toViewDetails = () => {
    navigation.navigate("ViewDetails");
  };

  const toLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* replace name with user's name here */}
        <Text style={styles.welcome}>Welcome (replace name)!</Text>
        <View style={styles.ring}>
          <Ring />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            style={styles.button}
            title="ViewDetails"
            onPress={toViewDetails}
          />
        </View>

        <View style={styles.wrapper}>
          <Button
            style={styles.button}
            title="Logout"
            onPress={toLogin}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  welcome: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    padding: 10,
    marginTop: 50,
  },

  buttonWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    marginTop: 10,
    padding: 10,
  },
});
