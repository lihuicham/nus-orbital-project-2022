import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTab from "./BottomTab";
import SettingsStackScreen from "./SettingsStackScreen";
import CustomDrawer from "../components/drawercomp/CustomDrawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AboutUs from "../screens/AboutUs";
import FAQ from "../screens/FAQ";



const DrawerObj = createDrawerNavigator();

const Drawer = () => {
    return (
        <DrawerObj.Navigator drawerContent={props => <CustomDrawer {...props} />} 
            screenOptions= {{ 
                headerShown: true,
                headerStyle: {backgroundColor: "#264653"}, 
                headerTintColor: "#fff",
                drawerActiveBackgroundColor: '#aa18ea', 
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -15,
                    fontSize:15, 
                }}}>
            <DrawerObj.Screen name="BottomTab" component={BottomTab} options={{ title: "Home", 
                drawerIcon: ({color}) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                )
            }}/>
            <DrawerObj.Screen name="SettingsStackScreen" component={SettingsStackScreen} options={{title: "Settings",
                drawerIcon: ({color}) => (
                    <Ionicons name="settings-outline" size={22} color={color} />
                )
            }}/>
            <DrawerObj.Screen name="AboutUs" component={AboutUs} options={{title: "About Us",
                drawerIcon: ({color}) => (
                    <Ionicons name="information-circle-outline" size={22} color={color} />
                )
            }}/>
            <DrawerObj.Screen name="FAQ" component={FAQ} options={{title: "FAQ",
                drawerIcon: ({color}) => (
                    <Ionicons name="help-circle-outline" size={22} color={color} />
                )
            }}/>
        </DrawerObj.Navigator>
    )
}

export default Drawer;