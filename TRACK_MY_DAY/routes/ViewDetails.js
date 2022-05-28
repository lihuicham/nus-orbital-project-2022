import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Calendar from '../screens/Calendar';
import Analytics from '../screens/Analytics';
import Suggestion from '../screens/Suggestion';

const TopTab = createMaterialTopTabNavigator();

const ViewDetails = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Calendar" component={Calendar} options={{title:"Calendar"}}/>
            <TopTab.Screen name="Analytics" component={Analytics} options={{title:"Analytics"}}/>
            <TopTab.Screen name="Suggestion" component={Suggestion} options={{title:"Suggestion"}}/>
        </TopTab.Navigator>
    )
}

export default ViewDetails;