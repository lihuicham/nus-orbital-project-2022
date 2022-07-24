import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase-config";
import { collection, doc, Timestamp, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Slider from "@react-native-community/slider";

// to create firebase firestore unique day id
const today = new Date();

let year = today.getFullYear().toLocaleString();
let month = (today.getMonth() + 1).toLocaleString();
let day = today.getDate().toLocaleString();

month = month < 10 ? "0" + month : month;
day = day < 10 ? "0" + day : day;

const dayId = year + month + day;

// create dayId for tomorrow
var tomorrow = today;
tomorrow.setDate(tomorrow.getDate() + 1);

let tomorrowYear = tomorrow.getFullYear().toLocaleString();
let tomorrowMonth = (tomorrow.getMonth() + 1).toLocaleString();
let tomorrowDay = tomorrow.getDate().toLocaleString();
tomorrowMonth = tomorrowMonth < 10 ? "0" + tomorrowMonth : montomorrowMonthth;
tomorrowDay = tomorrowDay < 10 ? "0" + tomorrowDay : tomorrowDay;
const tomorrowDayId = tomorrowYear + tomorrowMonth + tomorrowDay;

const Item = ({ habitImage, habitName, habitUnit, habitMax, empty }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const navigation = useNavigation();
  const [value, setValue] = useState(0);

  const toViewDetails = () => {
    navigation.navigate(habitName.replace(/\s+/g, ""));
  };

  const handleConfirm = (val) => {
    // add these fields inside dayId document
    const dayRef = doc(
      db,
      "users",
      user.uid,
      "habits",
      habitName,
      "days",
      dayId
    );
    setDoc(dayRef, {
      date: Timestamp.fromDate(new Date()),
      id: dayId,
      name: habitName,
      unit: habitUnit,
      value: val,
    });

    // create new document for tomorrow with value 0 - will be overriden when updating the next day
    const tomorrowDayRef = doc(
      db,
      "users",
      user.uid,
      "habits",
      habitName,
      "days",
      tomorrowDayId
    );
    setDoc(tomorrowDayRef, {
      date: tomorrow,
      id: tomorrowDayId,
      name: habitName,
      unit: habitUnit,
      value: 0,
    });
  };

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
            <Text style={styles.unitText}>
              {value} {habitUnit}
            </Text>
            <TouchableOpacity
              style={styles.confirmWrapper}
              onPress={() => {
                handleConfirm(value);
              }}
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>

          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={habitMax}
            step={1}
            minimumTrackTintColor="#3b7cff"
            maximumTrackTintColor="#000000"
            onValueChange={(position) => setValue(position)}
          />
        </View>
      </View>

      <View style={styles.bottomWrapper}>
        <Text style={styles.maxText}>Max: {habitMax}</Text>
        <TouchableOpacity onPress={() => toViewDetails()}>
          <Text style={styles.viewDetailsText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    marginHorizontal: 16,
  },

  itemInvisible: {
    backgroundColor: "transparent",
  },

  contentWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  infoWrapper: {
    marginLeft: 10,
  },

  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "space-between",
    alignItems: "center",
    width: 160,
    marginTop: 10,
  },

  confirmWrapper: {
    backgroundColor: "#D0A78B",
    padding: 5,
    borderRadius: 20,
  },

  unitText: {
    fontSize: 15,
  },

  bottomWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 200,
    marginLeft: 110,
  },

  maxText: {
    fontSize: 10,
    color: "grey",
  },

  viewDetailsText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#16009a",
  },

  confirmText: {
    fontSize: 11,
  },
});
