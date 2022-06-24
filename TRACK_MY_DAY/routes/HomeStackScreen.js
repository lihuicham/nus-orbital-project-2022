import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
// import ViewDetails from "./ViewDetails";
import Dashboard from "../screens/Dashboard";
import EXERCISE from "../screens/ViewDetails/EXERCISE";
import PETTIME from "../screens/ViewDetails/PETTIME";
import READ from "../screens/ViewDetails/READ";
import SLEEP from "../screens/ViewDetails/SLEEP";
import SOCIALMEDIA from "../screens/ViewDetails/SOCIALMEDIA";
import STUDY from "../screens/ViewDetails/STUDY";
import WATER from "../screens/ViewDetails/WATER";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown:false, headerStyle: {backgroundColor: "#264653"}, headerTintColor: "#fff"}}>
            <HomeStack.Screen name="Home" component={Dashboard} options={{title: "Home"}}/>
            <HomeStack.Screen name="EXERCISE" component={EXERCISE} options={{title: "EXERCISE"}} />
            <HomeStack.Screen name="PETTIME" component={PETTIME} options={{title: "PETTIME"}} />
            <HomeStack.Screen name="READ" component={READ} options={{title: "READ"}} />
            <HomeStack.Screen name="SLEEP" component={SLEEP} options={{title: "SLEEP"}} />
            <HomeStack.Screen name="SOCIALMEDIA" component={SOCIALMEDIA} options={{title: "SOCIALMEDIA"}} />
            <HomeStack.Screen name="STUDY" component={STUDY} options={{title: "STUDY"}} />
            <HomeStack.Screen name="WATER" component={WATER} options={{title: "WATER"}} />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;