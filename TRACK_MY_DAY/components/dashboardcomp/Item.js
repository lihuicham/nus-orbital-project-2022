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
import { SliderPicker } from "react-native-slider-picker";
import { db } from "../../firebase-config";
import { doc, Timestamp, setDoc } from "firebase/firestore";

/* import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
}); */

// to create firebase firestore unique day id
const today = new Date();

let year = today.getFullYear().toLocaleString();
let month = (today.getMonth() + 1).toLocaleString();
let day = today.getDate().toLocaleString();

month = month < 10 ? "0" + month : month;
day = day < 10 ? "0" + day : day;

const dayId = year + month + day;


const Item = ({ habitImage, habitName, habitUnit, habitMax, empty }) => {
  const navigation = useNavigation();
  const [value, setValue] = useState(0);

  const toViewDetails = () => {
    navigation.navigate(habitName.replace(/\s+/g, ''))
    
  };

  const handleConfirm = (val) => {
    const habitRef = doc(db, "habits", habitName);
    //console.log(user)
    setDoc(habitRef, {
      name: habitName,
      
    });

    const dayRef = doc(db, "habits", habitName, "days", dayId);
    setDoc(dayRef, {
      date: Timestamp.fromDate(new Date()),
      id: dayId,
      name: habitName,
      unit: habitUnit,
      value: val,
    });
  };

/*   const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync()

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
 */


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

          <SliderPicker
            maxValue={habitMax}
            callback={(position) => {
              setValue(position);
            }}
            defaultValue={value}
            labelFontColor={"#6c7682"}
            labelFontWeight={"600"}
            labelFontSize={10}
            showFill={true}
            fillColor={"green"}
            showNumberScale={false}
            showSeparatorScale={false}
            buttonBackgroundColor={"#fff"}
            buttonBorderColor={"#6c7682"}
            buttonBorderWidth={1}
            scaleNumberFontWeight={"300"}
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
        <TouchableOpacity onPress={() => toViewDetails()}>
          <Text style={styles.viewDetailsText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/* Notifications.scheduleNotificationAsync({
    content: {
      title: "Have you tracked your habits ?",
      body: 'Record your daily habits using Track My Day !',
    },
    trigger: { 
      hour: 21, 
      minute: 0, 
      repeats: true
    },
  });


async function registerForPushNotificationsAsync() {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
} */

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
