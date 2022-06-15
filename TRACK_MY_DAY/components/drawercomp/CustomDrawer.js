import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { authentication } from "../../firebase-config";
import { useNavigation } from "@react-navigation/native";

export default function CustomDrawer(props) {
  const navigation = useNavigation();

  const contactDeveloper = () => {
    Linking.openURL('mailto: pwintthiriko2001@gmail.com?subject=Issues With TracK My Day&body=Problem to Fix: ')
  }

  const handleLogout = () => {
    console.log("Logout: " + authentication.currentUser?.email)
    authentication
    .signOut()
    .then(() => {navigation.replace("Login")})
    .catch((error) => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView 
        {...props}>
        <ImageBackground
          source={require('../../assets/drawer-pattern.png')} 
          style={styles.drawerPattern}>
          
          <Image 
          source={require('../../assets/user-image.png')}
          style={styles.userImage}
          />

          <Text style={styles.userName}>Li Hui Cham</Text>
          <View style={styles.statusWrapper}>
            <Text style={styles.userStatus}>Premium Member</Text>
            <FontAwesome5 name="coins" size={14} color="#fff" style={styles.statusIcon}/>
          </View>
        </ImageBackground>

        <View style={styles.drawerItemWrapper}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.drawerBottom}>
        <TouchableOpacity onPress={() => {contactDeveloper()}} style={styles.reportIssuesButton}>
          <Ionicons name="construct" size={22} />
          <Text style={styles.reportIssuesText}>Report Issues</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {handleLogout()}} style={styles.logOutButton}>
          <Ionicons name="exit" size={22} />
          <Text style={styles.logOutText}>Log Out</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 

  drawerPattern: {
    padding: 20, 
    marginTop: -10,
  },

  userImage: {
    height: 100, 
    width: 100,
  },

  userName: {
    backgroundColor: 'black',
    marginTop: 10, 
    color: 'white',
    width: '60%',
    padding: 2,
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 18, 
    borderRadius: 20, 
  },

  userStatus: {
    marginTop: 5, 
    color: 'white',
    padding: 2,
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 15, 
  },

  statusWrapper: {
    flexDirection: 'row',
  },

  statusIcon: {
    padding: 10,
  },

  drawerItemWrapper: {
    flex: 1, 
    backgroundColor:'white', 
    paddingTop: 20, 
  },

  drawerBottom: {
    padding:20, 
    borderTopWidth: 1, 
    borderTopColor: '#ccc',
  },

  reportIssuesButton: {
    flexDirection: 'row', 
    alignItems:'center', 
  },

  reportIssuesText: {
    marginLeft: 15, 
    fontSize: 15, 
  },

  logOutButton: {
    flexDirection: 'row', 
    alignItems:'center', 
    marginTop: 20, 
  },

  logOutText: {
    marginLeft: 15, 
    fontSize: 15, 
  }
});
