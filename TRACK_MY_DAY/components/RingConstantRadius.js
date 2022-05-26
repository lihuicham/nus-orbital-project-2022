import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import{ VictoryPie, VictoryContainer } from 'victory-native';

export default function RingConstantRadius() {

    let pieData = [
        { x: 1, y: 1, label: "Sleep" },
        { x: 2, y: 1, label: "Water" },
        { x: 3, y: 1, label: "Steps" }
    ]

    let colorData = ["tomato", "gold", "navy"]

    const [active, setActive] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={() => setActive(!active)}>
        <View>
            <VictoryPie
            data={pieData}           
            colorScale={colorData}
            innerRadius={90}
            radius={({ datum, active }) => (active ? 150 : 140)}

            events={[
                {
                  target: "data",
                  eventHandlers: {
                    onPressIn: () => {
                        return [{
                            eventKey: "all",
                            
                            
                            mutation: () => ({ active: true })
                            }

                            
                        ];
                        }
                   }
                }
              ]}
            />
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})