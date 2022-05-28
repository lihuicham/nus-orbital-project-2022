import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator screenOptions={{headerShown: false}}>
            <ProfileStack.Screen name="Profile" component={Profile} options={{title: "Profile"}}/>
        </ProfileStack.Navigator>
    )
}

export default ProfileStackScreen;