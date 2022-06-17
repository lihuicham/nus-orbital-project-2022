import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const numOfCols = 2;

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
    habitUnit: "cups",
    empty: false,
  },
  {
    habitImage: require("../assets/habit-images/sleep.png"),
    habitName: "SLEEP",
    habitUnit: "hours",
    empty: false,
  },
  {
    habitImage: require("../assets/habit-images/read.png"),
    habitName: "READ",
    habitUnit: "yes/no",
    empty: false,
  },
  {
    habitImage: require("../assets/habit-images/exercise.png"),
    habitName: "EXERCISE",
    habitUnit: "hours",
    empty: false,
  },
  {
    habitImage: require("../assets/habit-images/calories.png"),
    habitName: "CALORIES",
    habitUnit: "kcal",
    empty: false,
  },
  {
    habitImage: require("../assets/habit-images/journaling.png"),
    habitName: "JOURNALING",
    habitUnit: "yes/no",
    empty: false,
  },
  {
    habitImage: require("../assets/habit-images/cook.png"),
    habitName: "COOK",
    habitUnit: "yes/no",
    empty: false,
  },
  {
    habitImage: require("../assets/habit-images/pettime.png"),
    habitName: "PET TIME",
    habitUnit: "yes/no",
    empty: false,
  },
  {
    habitImage: require("../assets/habit-images/socialmedia.png"),
    habitName: "SOCIAL MEDIA",
    habitUnit: "minutes",
    empty: false,
  },
  {
    habitImage: require("../assets/habit-images/plants.png"),
    habitName: "PLANTS",
    habitUnit: "yes/no",
    empty: false,
  },

  {
    habitImage: require("../assets/habit-images/plants.png"),
    habitName: "PLANTS",
    habitUnit: "yes/no",
    empty: false,
  },
];

const Item = ({habitImage, habitName, habitUnit, empty }) => {
  const navigation = useNavigation();

  const toViewDetails = () => {
    navigation.navigate("ViewDetails");
  };
  if (empty === true) {
    return <View style={[styles.itemWrapper, styles.itemInvisible]} />;
  }
  return (
    <View style={styles.itemWrapper}>
      <Image source={habitImage} style={styles.image} />
      <Text style={styles.name}>{habitName}</Text>
      <Text style={styles.unit}>{habitUnit}</Text>
      <TouchableOpacity style={styles.detailsWrapper} onPress={() => toViewDetails()}>
        <Text>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Dashboard() {
  const renderItem = ({ item }) => (
    <Item habitImage={item.habitImage} habitName={item.habitName} habitUnit={item.habitUnit} empty={item.empty}/>
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
    backgroundColor: "#533326"
  },

  itemWrapper: {
    backgroundColor: "#d7d4cb",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginVertical: 5,
    width: 150,
    height: 280,
    borderRadius: 10, 
    marginHorizontal: 8, 
  },

  itemInvisible: {
    backgroundColor: "transparent",
  },

  image: {
    width: 150,
    height: 100,
    resizeMode: "contain",
    marginLeft: 6,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "Roboto", 
    marginTop: 15,  
  },

  unit: {
    marginVertical: 10, 
  },

  detailsWrapper: {
    backgroundColor: '#D0A78B',
    marginTop: 5, 
    padding: 8,
    borderRadius: 8,

  }
});
