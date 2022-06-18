import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

import BottomTab from './routes/BottomTab';
import Drawer from './routes/Drawer';
import HomeStackScreen from './routes/HomeStackScreen';
import LoginStackScreen from "./routes/LoginStackScreen";
import NotesListStackScreen from './routes/NotesListStackScreen';
import ProfileStackScreen from './routes/ProfileStackScreen';
import SettingStackScreen from './routes/SettingsStackScreen';
import ToDoStackScreen from './routes/ToDoStackScreen';
import ViewDetails from "./routes/ViewDetails";
import Dashboard from "./screens/Dashboard";



export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
