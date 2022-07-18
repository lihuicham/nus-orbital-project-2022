import { StyleSheet, Text, View, Platform } from "react-native";
import React, { useState, useEffect, useRef} from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import BottomTab from './routes/BottomTab';
import Drawer from './routes/Drawer';
import HomeStackScreen from './routes/HomeStackScreen';
import LoginStackScreen from "./routes/LoginStackScreen";
import NotesListStackScreen from './routes/NotesListStackScreen';
import SettingStackScreen from './routes/SettingsStackScreen';
import ToDoStackScreen from './routes/ToDoStackScreen';
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";
import AboutUs from "./screens/AboutUs";
import FAQ from "./screens/FAQ";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {

  async function registerForPushNotificationsAsync() {
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  }

  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync()

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  Notifications.scheduleNotificationAsync({
    content: {
      title: "Have you tracked your habits ?",
      body: 'Record your daily habits using Track My Day !',
    },
    trigger: { 
      hour: 21, 
      minute: 0, 
      repeats: true
    },
  });


  return (
    <NavigationContainer>
      <LoginStackScreen />
    </NavigationContainer>
  );
}
