import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { ContributionGraph, LineChart } from "react-native-chart-kit";
import CircularProgress from 'react-native-circular-progress-indicator';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";

const WATER = () => {

    const auth = getAuth();
    const user = auth.currentUser;

    const [ourData, setOurData] = useState([0]);
    const [average, setAverage] = useState(0);
    const [waterGoal, setWaterGoal] = useState(0);
    const [dateArray, setDateArray] = useState([]);

    const getDays = async () => {
        const colRef = await getDocs(collection(db, "users", user.uid, "habits", "WATER", "days"));
        let arr = [];
        let dateArr = [];
        
        for (let doc of colRef.docs) {
            arr.push(doc.data().value)

            // push only if goal is met for the day
            if (doc.data().value >= waterGoal) {
              dateArr.push(doc.data().date.toDate())
            }
        };

        setOurData(arr.slice(0, -1)); // remove last item because it's 0 for next day
        setDateArray(dateArr);

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

    const percentage = (average/waterGoal) * 100;
    
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

    const contributionChartConfig = {
        backgroundGradientFrom: '#F2EFF0',
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: '#F2EFF0',
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(124, 130, 226, ${opacity})`,
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
    const calendarData = [];

    for (let i of dateArray) {
      calendarData.push({date: i, count: 1 });
    };


  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.text}>DETAILS</Text>

        <Text style={styles.progressText}>PROGRESS</Text>

        <View style={styles.circle}>
        <CircularProgress
          value={average} // stats calculation
          radius={75}
          duration={1000}
          progressValueColor={'black'}
          maxValue={waterGoal} // goal amt
          title={'LITRES'}
          titleColor={'#232323'}
          titleStyle={{fontWeight: 'bold'}}
          activeStrokeColor={'#2465FD'}
          activeStrokeSecondaryColor={'#C25AFF'}
          progressFormatter={ (value) => {
            'worklet';
            return value.toFixed(2); // 2 decimal places
          }}
        />
        <Text style={styles.percentText}>You've achieved <Text style={{fontSize: 20, fontWeight: '500', color: '#B1303B'}}>{ percentage.toPrecision(3) }%</Text> of your water goal. Keep going!</Text> 
        </View>

        <Text style={styles.calendarText}>CALENDAR</Text>
        <ContributionGraph
          values={calendarData}
          endDate={new Date()}
          numDays={105}
          width={screenWidth}
          height={220}
          chartConfig={contributionChartConfig}
        />

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

export default WATER;


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