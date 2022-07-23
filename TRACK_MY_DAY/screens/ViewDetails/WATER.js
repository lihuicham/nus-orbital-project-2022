import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { ContributionGraph, LineChart } from "react-native-chart-kit";
import CircularProgress from 'react-native-circular-progress-indicator';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, update } from "firebase/database";


const WATER = () => {

    const auth = getAuth();
    const user = auth.currentUser;

    const [ourData, setOurData] = useState([0]);
    const [average, setAverage] = useState(0);
    const [waterGoal, setWaterGoal] = useState(0);

    const getDays = async () => {
        const colRef = await getDocs(collection(db, "users", user.uid, "habits", "WATER", "days"));
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

    const getData = () => {
      const db = getDatabase();
      const usernameRef = ref(db, 'users/' + user.uid);
      onValue(usernameRef, (snapshot) => {
        const data = snapshot.val();
        setWaterGoal(data.waterGoal);
      });
    }

    useEffect(() => {
        getDays();
        getData();
    }, [])
    
    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        backgroundGradientFrom: '#F2EFF0', //'#DADEBA',//"#1E2923",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: '#F2EFF0', //'#DADEBA',//"#08130D",
        backgroundGradientToOpacity: 1,
        decimalPlaces: 0, 
        yAxisLabel: "Hours", 
        xAxisLabel: "Days",
        color: (opacity = 1) => `rgba(66, 63, 58, ${opacity})`,  //rgba(26, 255, 146
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
        legend: ["Water liters"], // optional
      };

    // Contribution Graph
    const commitsData = [
      { date: "2017-01-02", count: 1 },
      { date: "2017-01-03", count: 2 },
      { date: "2017-01-04", count: 3 },
      { date: "2017-01-05", count: 4 },
      { date: "2017-01-06", count: 5 },
      { date: "2017-01-30", count: 2 },
      { date: "2017-01-31", count: 3 },
      { date: "2017-03-01", count: 2 },
      { date: "2017-04-02", count: 4 },
      { date: "2017-03-05", count: 2 },
      { date: "2017-02-30", count: 4 }
    ];

  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.text}>Details of your habit</Text>

        <CircularProgress
          value={average} // stats calculation
          radius={70}
          duration={1000}
          progressValueColor={'black'}
          maxValue={waterGoal} // goal amt
          title={'LITRES'}
          titleColor={'black'}
          titleStyle={{fontWeight: 'bold'}}
          activeStrokeColor={'#2465FD'}
          activeStrokeSecondaryColor={'#C25AFF'}
          progressFormatter={ (value) => {
            'worklet';
            return value.toFixed(2); // 2 decimal places
          }}
         
        />

        <ContributionGraph
          values={commitsData}
          endDate={new Date("2017-04-01")}
          numDays={105}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />


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



export default WATER;


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    // justifyContent: "center", 
    // backgroundColor: '#BBA9DC'//'#564779'//'#D0A78B', //"#E9C46A",  //#3e54c1 //#BBA9DC
  },

  text: {
    fontSize: 18, 
    fontWeight: "bold", 
    marginTop: 50,
    marginBottom: 50, 
  }
});



