import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";
import Register from "../screens/Register";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator screenOptions={{headerShown: false}}>
            <ProfileStack.Screen name="Profile" component={Profile} options={{title: "Profile"}}/>
            <ProfileStack.Screen name="Register" component={Register} options={{title: "Register"}}/>
        </ProfileStack.Navigator>
    )
}

export default ProfileStackScreen;