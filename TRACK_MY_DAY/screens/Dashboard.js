import {
  StyleSheet,
  Text,
  View,
  FlatList,

} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "../components/dashboardcomp/Item";
import { flexbox } from "@mui/system";


const numOfCols = 1;

const formatData = (data, numCols) => {
  const numberOfFullRows = Math.floor(data.length / numCols);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numCols;
  while (numberOfElementsLastRow !== numCols && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow = numberOfElementsLastRow + 1;
  }

  return data;
};

const HABITS = [
  {
    habitImage: require("../assets/habit-images/water.png"),
    habitName: "WATER",
    habitUnit: "litres",
    habitMax: 10,
    empty: false,
  },
  {
    habitImage: require("../assets/habit-images/sleep.png"),
    habitName: "SLEEP",
    habitUnit: "hours",
    habitMax: 24, 
    empty: false,
  },
  {
    habitImage: require("../assets/habit-images/read.png"),
    habitName: "READ",
    habitUnit: "hours",
    habitMax: 24, 
    empty: false,
  },
  {
    habitImage: require("../assets/habit-images/exercise.png"),
    habitName: "EXERCISE",
    habitUnit: "hours",
    habitMax: 24,
    empty: false,
  },

  {
    habitImage: require("../assets/habit-images/study.png"),
    habitName: "STUDY",
    habitUnit: "hours",
    habitMax: 24, 
    empty: false,
  },

  {
    habitImage: require("../assets/habit-images/pettime.png"),
    habitName: "PET TIME",
    habitUnit: "hours",
    habitMax: 24,
    empty: false,
  },
  {
    habitImage: require("../assets/habit-images/socialmedia.png"),
    habitName: "SOCIAL MEDIA",
    habitUnit: "hours",
    habitMax: 24, 
    empty: false,
  },

];



export default function Dashboard() {
  const renderItem = ({ item }) => (
    <Item habitImage={item.habitImage} habitName={item.habitName} habitUnit={item.habitUnit} habitMax={item.habitMax} empty={item.empty} />
  );

  return (
    <SafeAreaView>
    <FlatList
      numColumns={numOfCols}
      keyExtractor={(item, index) => index.toString()}
      data={formatData(HABITS, numOfCols)}
      renderItem={renderItem}
      style={styles.list}
    ></FlatList>
  </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  list: {
    backgroundColor: "#533326",
    paddingVertical: 8,
  },
});
