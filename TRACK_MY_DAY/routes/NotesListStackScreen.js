import { createStackNavigator } from "@react-navigation/stack";
import NotesList from "../screens/NotesList";
import Notes from "../screens/Notes";

const NotesStack = createStackNavigator();

const NotesListStackScreen = () => {
    return (
        <NotesStack.Navigator screenOptions={{headerShown: false}}>
            <NotesStack.Screen name="Notes" component={Notes} options={{title: "Notes"}}/>
        </NotesStack.Navigator>
    )
}

export default NotesListStackScreen;