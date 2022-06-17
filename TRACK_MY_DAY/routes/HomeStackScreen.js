import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ViewDetails from "./ViewDetails";
import Dashboard from "../screens/Dashboard";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false, headerStyle: {backgroundColor: "#264653"}, headerTintColor: "#fff"}}>
            <HomeStack.Screen name="Home" component={Dashboard} options={{title: "Home"}}/>
            <HomeStack.Screen name="ViewDetails" component={ViewDetails} options={{title: "ViewDetails"}} />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;