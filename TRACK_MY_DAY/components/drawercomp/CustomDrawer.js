import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import React, { useState, useEffect} from "react";
import { DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { db, authentication } from "../../firebase-config";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc } from "firebase/firestore";
import { getDatabase, ref, onValue} from "firebase/database";

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

  const [username, setUsername] = useState("");
  const [favQuote, setFavQuote] = useState("")

  const user = authentication.currentUser


    // const getData = async () => {
    //     const docRef = doc(db, "users", user.uid)
    //     const docSnap = await getDoc(docRef);
    //     let name = "";
    //     let quote = "";

        // name = docSnap.data().username;
        // quote = docSnap.data().favQuote;
        
        // setUsername(name);
        // setFavQuote(quote);

    // };

    const getData = () => {
      const db = getDatabase();
      const usernameRef = ref(db, 'users/' + user.uid);
      onValue(usernameRef, (snapshot) => {
        const data = snapshot.val();
        setUsername(data.username);
        setFavQuote(data.favQuote);
      });
    }
    
    useEffect(() => {
      try {
        getData();
      } catch(err) {
        console.log(err.message)
      }
        
    }, [])

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

          <Text style={styles.userName}>{username}</Text>
          <Text style={styles.email}>{authentication.currentUser?.email}</Text> 
          <View style={styles.statusWrapper}>
            <Text style={styles.userStatus}>{favQuote}</Text>
            <FontAwesome5 name="coins" size={14} color="#b8f50a" style={styles.statusIcon}/>
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
    marginTop: 10, 
    color: '#FFBB1C',
    width: '80%',
    padding: 2,
    fontWeight: 'bold',
    fontSize: 18, 
    borderRadius: 20, 
  },

  email: {
    color: 'white',
  },

  userStatus: {
    marginTop: 5, 
    color: '#b8f50a',
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
