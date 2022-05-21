import { createStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';

const screens = {
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    }
  };
  
  // home stack navigator screens
  const loginStack = createStackNavigator(screens);
  
  export default createAppContainer(loginStack);