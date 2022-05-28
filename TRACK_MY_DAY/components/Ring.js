import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import{ VictoryPie } from 'victory-native';

export default function Ring() {

    let pieData = [
        { x: 1,
            y: 1, 
            label: "Sleep",
            pic: 
            <ImageBackground source={require('../assets/sleep.png')} 
            style={styles.pictureInRing}></ImageBackground> },
        { x: 2, 
            y: 1, 
            label: "Water", 
            pic: 
            <ImageBackground source={require('../assets/water.png')} 
            style={styles.pictureInRing}></ImageBackground> },
        { x: 3, 
            y: 1, 
            label: "Steps", 
            pic: 
            <ImageBackground source={require('../assets/steps.png')} 
            style={styles.pictureInRing}></ImageBackground> }
    ]

    let colorData = ["tomato", "gold", "navy"]

    const [selectedHabit, setSelectedHabit] = useState('')

    function setCorrectHabit(name) {
        let correctHabit = pieData.filter(a => a.label == name)
        setSelectedHabit(correctHabit[0])
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            setSelectedHabit('');
        }}>
            <View>
                <VictoryPie
                data={pieData}           
                colorScale={colorData}
                innerRadius={110}
                radius={({ datum }) => (selectedHabit.label == datum.label) ? 160 : 150 }

                events={[
                    {
                    target: "data",
                    eventHandlers: {
                        onPressIn: () => {
                            return [{
                                
                                mutation: (props) => {
                                    let habit = pieData[props.index].label
                                    setCorrectHabit(habit)
                                }
                            }
                            ];
                        }
                        }
                    }
                ]}
                />
                <View>
                    { selectedHabit.pic }
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },
    pictureInRing: {
        bottom: '160%', //190
        left: '30%',
        height: 150,
        width:150
    }
})