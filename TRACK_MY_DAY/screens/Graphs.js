import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";

import { LineChart } from "react-native-chart-kit";

import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase-config";

const colRef = collection(db, "habits", "EXERCISE", "days");



/* getDocs(colRef)
    .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            days.push(doc.data().value)
        })
        
    }); */

function getData() {
    var days = [] 
    getDocs(colRef)
    .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            days.push(doc.data().value)
        })
        
    });
    return Promise.all(days)
}







//Constants for Line Chart 

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

const data = {
labels: ["January", "February", "March", "April", "May", "June"],
datasets: [
    {
    data: getData(),
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    strokeWidth: 2 // optional
    }
],
legend: ["Rainy Days"] // optional
};

const Graphs = () => {
  return (
   <View style={styles.container}>
        <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
        />
   </View>
  )
}

export default Graphs

const styles = StyleSheet.create({
    container: { 
        display: 'flex', 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    }
})