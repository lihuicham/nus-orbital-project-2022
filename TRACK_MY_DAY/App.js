import { StyleSheet, Text, View, Platform } from "react-native";
import React, { useState, useEffect, useRef} from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';


import BottomTab from './routes/BottomTab';
import Drawer from './routes/Drawer';
import HomeStackScreen from './routes/HomeStackScreen';
import LoginStackScreen from "./routes/LoginStackScreen";
import NotesListStackScreen from './routes/NotesListStackScreen';
import SettingStackScreen from './routes/SettingsStackScreen';
import ToDoStackScreen from './routes/ToDoStackScreen';
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";


export default function App() {
  return (
    <NavigationContainer>
      <LoginStackScreen />
    </NavigationContainer>
  );
}
