import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Register from './screens/Register';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{title: "Welcome"}}
        />
        <Stack.Screen 
          name="Register"
          component={Register}
          options={{title: "Register"}}
        />
        <Stack.Screen 
          name="ForgotPassword"
          component={ForgotPassword}
          options={{title: "Reset Password"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: { //key-value pairs inside object
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  login: {
    flex: 0,
    width: 'auto',
    textDecorationColor: '#f1356d',
    padding: 20,
  },
  
  register: {
    flex: 0,
    width: 'auto',
    textDecorationColor: '#f1356d',
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
