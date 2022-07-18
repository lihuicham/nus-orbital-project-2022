import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ABOUT US</Text>
      <Text  
        style={{
            fontFamily: 'monospace',
            marginTop: -30,
            padding: 20, 
            color: '#fff7d8',
            fontSize: 16, }}
        >
      Track My Day is a NUS Orbital Project by Cham Li Hui & Pwint Thiri Ko (Team 5295).
      We are a team of Year 1 NUS Business Analytics (School of Computing) students. 
      We started this project in May 2022 and completed it in August 2022. 
      {'\n'}{'\n'}
      We felt that productivity apps usually have limited functions and one has to 
      use different apps to manage their daily workflow. Our objective is  to create 
      an all-in-one productivity app with aesthetically pleasing and user-friendly UI. 
      {'\n'}{'\n'}
      You can track your habits, write to-do lists and take simple notes with Track My Day. 
      You can view a detailed breakdown of your tracked habits by clicking View Details. 
      </Text>
      <TouchableOpacity onPress={() => {Linking.openURL('https://medium.com/@lihuicham/our-journey-of-creating-a-mobile-app-11968f0ccb93')}}>
        <Text style={styles.journey}>Read our journey</Text>
      </TouchableOpacity>
      
      <View style={styles.linksContainer}>
        <TouchableOpacity style={styles.link} onPress={() => {Linking.openURL('https://github.com/lihuicham/nus-orbital-project-2022')}}>
            <FontAwesome5 name="github" size={40} color='white'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => {Linking.openURL('https://youtu.be/-wzJrKG1zDc')}}>
            <FontAwesome5 name="youtube" size={40} color='white'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => {Linking.openURL('https://drive.google.com/file/d/1J-rZ5Fe_WoDgllRyRgNPc7-eXiaExXt9/view?usp=sharing')}}>
            <FontAwesome5 name="image" size={40} color='white'/>
        </TouchableOpacity>

      </View>

      <View>
        <Text style={styles.copyright}>{'\u00A9'} 2022 Track My Day. All Rights Reserved.</Text>
      </View>
    </View>
  )
}

export default AboutUs;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#564779",
        justifyContent: 'space-evenly',
    },

    title: {
        margin: 15,
        fontSize: 40,
        color: '#face05',
        textShadowColor: '#598598',
        textShadowRadius: 0.1,
        textShadowOffset: {
            width: 2,
            height: 2
        },
    },

    journey: {
        textAlign: 'center',
        color: '#b8b6b6',
        textDecorationLine: "underline",
        fontSize: 13,
        marginTop: -20,
    },

    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 17, 
    },

    copyright: {
        color: '#b8b6b6',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
    }

})