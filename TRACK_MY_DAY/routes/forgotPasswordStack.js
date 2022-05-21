import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ForgotPassword from '../screens/ForgotPassword';
import Login from '../screens/Login';

const screens = {
    Login: {
      screen: Login
    }, 
    ForgotPassword: {
      screen: ForgotPassword
    }
  };
  
  // home stack navigator screens
  const forgotPasswordStack = createStackNavigator(screens);
  
  export default createAppContainer(forgotPasswordStack);