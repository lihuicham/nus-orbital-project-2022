import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

export default function ForgotPassword({ navigation }) {
  const toLogin = () => {
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text>Enter username or email:</Text>

      <TextInput style={styles.input} />

      <View style={styles.pressBox}>
        <View style={{ padding: 10 }}>
          <Pressable
            onPress={toLogin} // change to function that submits the request to reset password
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#FF3D00" : "#0080FF",
            })}
          >
            {({ pressed }) => (
              <Text style={styles.pressable_text}>Reset Password</Text>
            )}
          </Pressable>
        </View>

        <View style={{ padding: 10 }}>
          <Pressable
            onPress={toLogin} // actually goes back to login
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#FF3D00" : "#0080FF",
            })}
          >
            {({ pressed }) => (
              <Text style={styles.pressable_text}>Back to Login</Text>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pressable_text: {
    textAlign: "center",
    fontSize: 15,
    color: "#ffff",
    padding: 4,
  },

  pressBox: {
    marginTop: 10,
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
