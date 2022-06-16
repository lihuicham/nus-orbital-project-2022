import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";


const numOfCols = 2;

const formatData = (data, numCols) => {
    const numberOfFullRows = Math.floor(data.length/numCols);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numCols);
    while (numberOfElementsLastRow !== numCols && numberOfElementsLastRow !== 0) {
        data.push({key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }

    return data;
  }  
  const habits = [
    {
      habitImage: require("../assets/habit-images/water.png"),
      habitName: "WATER",
      habitUnit: "cups",
      empty: false, 
    },
    {
      habitImage: require("../assets/habit-images/water.png"),
      habitName: "SLEEP",
      habitUnit: "hours",
      empty: false, 
    },
    {
      habitImage: require("../assets/habit-images/water.png"),
      habitName: "STUDY",
      habitUnit: "hours",
      empty: false, 
    },
    {
      habitImage: require("../assets/habit-images/water.png"),
      habitName: "EXERCISE",
      habitUnit: "hours",
      empty: false, 
    },
    {
      habitImage: require("../assets/habit-images/water.png"),
      habitName: "CALORIES",
      habitUnit: "kcal",
      empty: false, 
    },
    {
        habitImage: require("../assets/habit-images/water.png"),
        habitName: "CALORIES",
        habitUnit: "kcal",
        empty: false, 
      },
      {
        habitImage: require("../assets/habit-images/water.png"),
        habitName: "CALORIES",
        habitUnit: "kcal",
        empty: false, 
      },
      {
        habitImage: require("../assets/habit-images/water.png"),
        habitName: "CALORIES",
        habitUnit: "kcal",
        empty: false, 
      },
      {
        habitImage: require("../assets/habit-images/water.png"),
        habitName: "CALORIES",
        habitUnit: "kcal",
        empty: false, 
      },
      {
        habitImage: require("../assets/habit-images/water.png"),
        habitName: "CALORIES",
        habitUnit: "kcal",
        empty: false, 
      },  
      {
        habitImage: require("../assets/habit-images/water.png"),
        habitName: "CALORIES",
        habitUnit: "kcal",
        empty: false, 
      },
  ];

export default class Dashboard extends React.Component {
  
    renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.itemWrapper, styles.itemInvisible]} />;
        }
        return (
            <View style={styles.itemWrapper}>
                <Image source={item.habitImage} style={styles.image}/>
                <Text>{item.habitName}</Text>
                <Text>{item.habitUnit}</Text>
                <TouchableOpacity>
                    <Text>View Details</Text>
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        return (
            <SafeAreaView>
                <FlatList
                    numColumns={numOfCols}
                    keyExtractor={(item, index) => index.toString()}
                    data={formatData(habits, numOfCols)}
                    renderItem={this.renderItem}
                    style={styles.list}
                ></FlatList>
            </SafeAreaView>
        )
    };
}


const styles = StyleSheet.create({

    itemWrapper: {
        backgroundColor: 'orange', 
        alignItems: "center", 
        justifyContent: 'center', 
        flex: 1, 
        margin: 1,
        width:  150, 
        height: 170,
    }, 

    itemInvisible: {
        backgroundColor: 'transparent', 
    },

    image: {
        width: 40, 
        height: 100, 
        resizeMode:'contain',
        marginLeft: 15, 
    }
})
