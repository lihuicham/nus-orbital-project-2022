import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { getAuth } from 'firebase/auth';


const SOCIALMEDIA = () => {

    const auth = getAuth();
    const user = auth.currentUser;

    const [ourData, setOurData] = useState([0]);

    const getDays = async () => {
        const colRef = await getDocs(collection(db, "users", user.uid, "habits", "SOCIAL MEDIA", "days"));
        let arr = [];
        for (let doc of colRef.docs) {
            arr.push(doc.data().value)
        };
        setOurData(arr.slice(0, -1)); // remove last item because it's 0 for next day
    };
    
    useEffect(() => {
        getDays();
    }, [])
    
    
    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 1,
        decimalPlaces: 0, 
        yAxisLabel: "Hours", 
        xAxisLabel: "Days",
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        };


    const data = {
        labels: [],
        datasets: [
          {
            data: ourData, 
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2, // optional
          },
        ],
        legend: ["Social Media Hours"], // optional
      };
      

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Details of your habit</Text>
        <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
        />
    </View>

  );
};



export default SOCIALMEDIA;


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center", 
    backgroundColor: "#E9C46A", 
  },

  text: {
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 50, 
  }
});



