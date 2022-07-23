import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import CircularProgress from 'react-native-circular-progress-indicator';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { getAuth } from 'firebase/auth';

const PETTIME = () => {

    const auth = getAuth();
    const user = auth.currentUser;

    const [ourData, setOurData] = useState([0]);
    const [average, setAverage] = useState(0);

    const getDays = async () => {
        const colRef = await getDocs(collection(db, "users", user.uid, "habits", "PET TIME", "days"));
        let arr = [];
        
        for (let doc of colRef.docs) {
            arr.push(doc.data().value)
        };

        setOurData(arr.slice(0, -1)); // remove last item because it's 0 for next day

        // To calculate average
        let sum = 0;
        for (let elem of arr) {
          sum += elem;
        };

        setAverage(sum/(arr.length - 1)); // -1 because last item is for the next day
    };


    useEffect(() => {
        getDays();
    }, [])

    
    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        backgroundGradientFrom: '#F2EFF0',
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: '#F2EFF0',
        backgroundGradientToOpacity: 1,
        decimalPlaces: 0, 
        yAxisLabel: "Hours", 
        xAxisLabel: "Days",
        color: (opacity = 1) => `rgba(124, 130, 226, ${opacity})`,
        // color: (opacity = 1) => `rgba(166, 170, 235, ${opacity})`,
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
        legend: ["Social media hours"], // optional
      };


  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.text}>DETAILS for PET TIME</Text>

        <Text style={styles.progressText}>AVERAGE</Text>

        <View style={styles.circle}>
        <CircularProgress
          value={average} // stats calculation
          radius={75}
          duration={1000}
          progressValueColor={'black'}
          maxValue={24}
          title={'HOURS'}
          titleColor={'#232323'}
          titleStyle={{fontWeight: 'bold'}}
          activeStrokeColor={'#2465FD'}
          activeStrokeSecondaryColor={'#C25AFF'}
          progressFormatter={ (value) => {
            'worklet';
            return value.toFixed(2); // 2 decimal places
          }}
        />
        <Text style={styles.percentText}>Give your pets some love! <Text style={{fontSize: 24}}>🐶🐢🐹🐟</Text> </Text> 

        </View>

        <Text style={styles.calendarText}>CHART</Text>
        <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
        />

       
    </View>
    </ScrollView>

  );
};

export default PETTIME;


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  },

  text: {
    fontSize: 25, 
    fontWeight: "bold", 
    marginVertical: 25,
    textAlign: 'center'
  },

  progressText: {
    fontSize: 19, 
    fontWeight: "bold", 
    marginBottom: 25,
    marginLeft: 40,
  },
  
  calendarText: {
    fontSize: 19, 
    fontWeight: "bold", 
    marginTop: 20,
    marginLeft: 40,
  },

  circle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30, 
    marginBottom: 20
  },
  
  percentText: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20
  }
});