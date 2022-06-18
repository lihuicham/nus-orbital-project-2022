import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SliderPicker } from 'react-native-slider-picker';

const Item = ({ habitImage, habitName, habitUnit, habitMax, empty }) => {
  const navigation = useNavigation();

  const toViewDetails = () => {
    navigation.navigate("ViewDetails");
  };
  const [value, setValue] = useState(0);


  if (empty === true) {
    return <View style={[styles.itemWrapper, styles.itemInvisible]} />;
  }

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.contentWrapper}>
        <Image source={habitImage} style={styles.image} />
        <View style={styles.infoWrapper}>
          <Text style={styles.name}>{habitName}</Text>
          <View style={styles.unitWrapper}>
            <Text style={styles.unitText}>{value}   {habitUnit}</Text>
            <TouchableOpacity
              style={styles.confirmWrapper}
              onPress={() => {}}
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
          
          <SliderPicker
          maxValue={habitMax}
          callback={position => { setValue(position) }}
          defaultValue={value}
          labelFontColor={"#6c7682"}
          labelFontWeight={'600'}
          labelFontSize={10}
          showFill={true}
          fillColor={'green'}
          showNumberScale={false}
          showSeparatorScale={false}
          buttonBackgroundColor={'#fff'}
          buttonBorderColor={"#6c7682"}
          buttonBorderWidth={1}
          scaleNumberFontWeight={'300'}
          scaleNumberFontSize={10}
          buttonDimensionsPercentage={6}
          heightPercentage={1}
          widthPercentage={50}
          style={styles.slider}
          />
        </View>
      </View>



      <View style={styles.bottomWrapper}>
        <Text style={styles.maxText}>Max: {habitMax}</Text>
        <TouchableOpacity
          onPress={() => toViewDetails()}
        >
          <Text style={styles.viewDetailsText}>View Details</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}



export default Item;



const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: "#d7d4cb",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginVertical: 5,
    width: 330,
    height: 170,
    borderRadius: 10,
    marginHorizontal: 20,
  },

  itemInvisible: {
    backgroundColor: "transparent",
  },

  contentWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems:'center',
  },

  infoWrapper: {
    marginLeft: 10,
  },

  imageWrapper: {
    justifyContent:'center',
    alignItems:'center'
  },

  image: {
    width: 100,
    height: 120,
    resizeMode: "contain",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginTop: 15,
  },

  unitWrapper: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 160,
    marginTop: 10, 
  },

  confirmWrapper: {
    backgroundColor: '#D0A78B',
    padding: 5,
    borderRadius: 20,  
  },

  unitText: {
    fontSize: 15,
  },

  bottomWrapper: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width: 200,
    marginLeft: 110, 
  },

  maxText: {
    fontSize: 10,
    color: 'grey'
  },

  viewDetailsText: {
    fontSize: 10,
    fontWeight: '600',
    color:"#16009a",
  },

  confirmText: {
    fontSize: 11
  }



});

