import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTab from "./BottomTab";
import SettingsStackScreen from "./SettingsStackScreen";
import ProfileStackScreen from './ProfileStackScreen';

const DrawerObj = createDrawerNavigator();

const Drawer = () => {
    return (
        <DrawerObj.Navigator>
            <DrawerObj.Screen name="BottomTab" component={BottomTab} options={{title: "Home"}}/>
            <DrawerObj.Screen name="ProfileStackScreen" component={ProfileStackScreen} options={{title: "Profile"}}/>
            <DrawerObj.Screen name="SettingsStackScreen" component={SettingsStackScreen} options={{title: "Settings"}}/>
        </DrawerObj.Navigator>
    )
}

export default Drawer;