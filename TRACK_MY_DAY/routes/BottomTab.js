/* import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./HomeStackScreen";
import ToDoStackScreen from "./ToDoStackScreen";
import NotesListStackScreen from "./NotesListStackScreen";

const BottomTabObj = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <BottomTabObj.Navigator screenOptions={{headerShown: false, tabBarIconStyle: { display: "none" }, tabBarLabelStyle: {fontWeight: "700", fontSize: 15}}}>
            <BottomTabObj.Screen name="HomeStackScreen" component={HomeStackScreen} options={{title: "Habits"}}/>
            <BottomTabObj.Screen name="ToDoStackScreen" component={ToDoStackScreen} options={{title: "ToDo"}}/>
            <BottomTabObj.Screen name="NotesListStackScreen" component={NotesListStackScreen} options={{title: "Notes"}}/>
        </BottomTabObj.Navigator>
    )
}

export default BottomTab; */

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStackScreen from "./HomeStackScreen";
import ToDoStackScreen from "./ToDoStackScreen";
import NotesListStackScreen from "./NotesListStackScreen";

const BottomTabObj = createMaterialBottomTabNavigator();

const BottomTab = () => {
    return (
        <BottomTabObj.Navigator screenOptions={{headerShown:false}} initialRouteName="HomeStackScreen" activeColor="#E9C46A" inactiveColor="#f0edf6" barStyle={{ backgroundColor: '#264653' }} >
            <BottomTabObj.Screen name='HomeStackScreen' component={HomeStackScreen} options={{ 
                tabBarLabel: "Habits", tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name='clock-outline' color={color} size={26} />
                )}}
            />
            <BottomTabObj.Screen name='ToDoStackScreen' component={ToDoStackScreen} options={{ 
                tabBarLabel: "ToDo", tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name='checkbox-multiple-marked-outline' color={color} size={26} />
                )}}
            />
            <BottomTabObj.Screen name='NotesListStackScreen' component={NotesListStackScreen} options={{ 
                tabBarLabel: "Notes", tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name='note-text' color={color} size={26} />
                )}}
            />
        </BottomTabObj.Navigator>
    )
}

export default BottomTab;