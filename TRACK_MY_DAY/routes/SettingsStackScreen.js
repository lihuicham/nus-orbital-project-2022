import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../screens/Settings";

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
    return (
        <SettingsStack.Navigator screenOptions={{headerShown: false}}>
            <SettingsStack.Screen name="Settings" component={Settings} options={{title: "Settings"}}/>
        </SettingsStack.Navigator>
    )
}

export default SettingsStackScreen;