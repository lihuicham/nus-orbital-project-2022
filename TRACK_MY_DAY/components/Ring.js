import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import{ VictoryPie } from 'victory-native';

// export default function Ring() {
//     const data = [
//         {quarter: 1, earnings: 13000},
//         {quarter: 2, earnings: 16500},
//         {quarter: 3, earnings: 14250},
//         {quarter: 4, earnings: 19000}
//     ];

//     return (
//         <View style={styles.container}>
//             <VictoryPie
//                 standalone={false}
//                 width={400} height={400}
//                 data={[
//                     { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
//                 ]}
//                 innerRadius={68} labelRadius={100}
//                 style={{ labels: { fontSize: 20, fill: "white" } }}
//                 />
//                 <VictoryLabel
//                 textAnchor="middle"
//                 style={{ fontSize: 20 }}
//                 x={200} y={200}
//                 text="Pie!"
//             />
//         </View>

//     );
// }



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