import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import React, { useState, useEffect} from "react";
import { DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { db, authentication } from "../../firebase-config";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc } from "firebase/firestore";
import { getDatabase, ref, onValue, update } from "firebase/database";
import * as ImagePicker from 'expo-image-picker';

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

    const getData = () => {
      const db = getDatabase();
      const usernameRef = ref(db, 'users/' + user.uid);
      onValue(usernameRef, (snapshot) => {
        const data = snapshot.val();
        
        if (data) {
        setUsername(data.username);
        setFavQuote(data.favQuote);
        setImage(data.profilePic);
        }
      });
    }
    console.log(user)
    
    useEffect(() => {
      try {
        getData();
      } catch(err) {
        console.log(err.message)
      }
        
    }, [])

    // Image Picker
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      updateProfilePic(user.uid, result.uri);
    }
  };

  console.log(image);

  // Realtime Database
  function updateProfilePic(userId, pic) {
    const db = getDatabase();
    update(ref(db, 'users/' + userId), {
      profilePic: pic,
    });
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView 
        {...props}>
        <ImageBackground
          source={require('../../assets/drawer-pattern.png')} 
          style={styles.drawerPattern}>
          
          {/* <Image 
          source={require('../../assets/user-image.png')}
          style={styles.userImage}
          /> */}

          {image && <Image source={{ uri: image }} style={styles.userImage} />}

          <View style={styles.profilePicWrapper}>
          <TouchableOpacity 
            onPress={pickImage}>
            <View style={styles.addProfilePic}>
              <FontAwesome5 name="camera" size={13} color="#5195bd" style={{ padding: 7 }}/>
            </View>
          </TouchableOpacity>
          </View>
          
          

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
        <TouchableOpacity onPress={() => {contactDeveloper()}} style={styles.lowerButton}>
          <Ionicons name="construct" size={22} />
          <Text style={styles.lowerText}>Report Issues</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {handleLogout()}} style={styles.lowerButton}>
          <Ionicons name="exit" size={22} />
          <Text style={styles.lowerText}>Log Out</Text>
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
    borderRadius: 50,
    // position: 'absolute'
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

  lowerButton: {
    flexDirection: 'row', 
    alignItems:'center', 
    marginBottom: 20, 
  },

  lowerText: {
    marginLeft: 15, 
    fontSize: 15, 
  },

  addProfilePic: {
    borderRadius: 20,
    borderColor: '#BDBDBD',
    borderWidth: 1.5,
    backgroundColor: '#fafafc'
  },

  profilePicWrapper: {
    position: 'absolute',
    marginTop: 90,
    marginLeft: 90
  }
  
});