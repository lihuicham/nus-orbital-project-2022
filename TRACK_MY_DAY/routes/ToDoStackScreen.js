import { createStackNavigator } from "@react-navigation/stack";
import ToDo from "../screens/ToDo";

const ToDoStack = createStackNavigator();

const ToDoStackScreen = () => {
    return (
        <ToDoStack.Navigator screenOptions={{headerShown: false}}>
            <ToDoStack.Screen name="ToDo" component={ToDo} options={{title: "ToDo"}}/>
        </ToDoStack.Navigator>
    )
}

export default ToDoStackScreen;