import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../screens/Settings";
import ChangeEmailAndPassword from "../screens/ChangeEmailAndPassword";
import ChangeDetails from "../screens/ChangeDetails";

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
    return (
        <SettingsStack.Navigator screenOptions={{headerShown: false}}>
            <SettingsStack.Screen name="Settings" component={Settings} options={{title: "Settings"}}/>
            <SettingsStack.Screen name="ChangeEmailAndPassword" component={ChangeEmailAndPassword} options={{title: "Change Email And Password"}}/>
            <SettingsStack.Screen name="ChangeDetails" component={ChangeDetails} options={{title: "Change Personal Details"}}/>
        </SettingsStack.Navigator>
    )
}

export default SettingsStackScreen;