import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Drawer from './Drawer';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';

const LoginStack = createStackNavigator();

const LoginStackScreen = () => {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen name="Login" component={Login} options={{title: "Login", headerShown: false}}/>
            <LoginStack.Screen name="Drawer" component={Drawer} options={{title: "Home", headerShown: false}}/>
            <LoginStack.Screen name="Register" component={Register} options={{title: "Register"}}/>
            <LoginStack.Screen name="ForgotPassword" component={ForgotPassword} options={{title: "ForgotPassword"}}/>
        </LoginStack.Navigator>
    )
}

export default LoginStackScreen;