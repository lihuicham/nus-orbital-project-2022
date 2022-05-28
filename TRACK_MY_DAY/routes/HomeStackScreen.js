import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ViewDetails from "./ViewDetails";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            <HomeStack.Screen name="Home" component={Home} options={{title: "Home"}}/>
            <HomeStack.Screen name="ViewDetails" component={ViewDetails} options={{title: "ViewDetails"}} />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;