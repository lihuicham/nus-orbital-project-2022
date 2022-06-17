import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

export default BottomTab;