import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import{ VictoryPie } from 'victory-native';

export default function Ring() {

    let pieData = [
        { x: 1, y: 1, label: "sleep" },
        { x: 2, y: 1, label: "water" },
        { x: 3, y: 1, label: "steps" }
    ]

    let colorData = ["tomato", "gold", "navy"]

    return (
        <View>
            <VictoryPie
            data={pieData}
            
            colorScale={colorData}
            innerRadius={90}
            labelRadius={150} // or replace with icons?
            //style={{ labels: { fontSize: 15, fill: "red" } }} //label style

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})