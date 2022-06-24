import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";

import { LineChart } from "react-native-chart-kit";

import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";




const Graphs = () => {

    const [ourData, setOurData] = useState([]);

    const getDays = async () => {
        const colRef = await getDocs(collection(db, "habits", "EXERCISE", "days"));
        let arr = [];
        for (let doc of colRef.docs) {
            arr.push(doc.data().value)
        };
        setOurData(arr);
    };
    
    useEffect(() => {
        getDays();
    }, [])
    
    
    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        };


    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: ourData, 
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2, // optional
          },
        ],
        legend: ["Rainy Days"], // optional
      };
      

  return (
    <View style={styles.container}>
        <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
        />
    </View>

  );
};



export default Graphs;


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});



