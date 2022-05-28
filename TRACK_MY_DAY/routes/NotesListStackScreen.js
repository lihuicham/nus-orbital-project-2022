import { createStackNavigator } from "@react-navigation/stack";
import NotesList from "../screens/NotesList";

const NotesStack = createStackNavigator();

const NotesListStackScreen = () => {
    return (
        <NotesStack.Navigator screenOptions={{headerShown: false}}>
            <NotesStack.Screen name="Notes" component={NotesList} options={{title: "Notes"}}/>
        </NotesStack.Navigator>
    )
}

export default NotesListStackScreen;