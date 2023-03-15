import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  calendarPermissions,
  cameraPermissions,
  contactPermissions,
  locationPermissions,
  notificationPermissions,
  permissionsStatus,
} from "@/atoms";
import * as Contacts from "expo-contacts";
import * as Calendar from "expo-calendar";
import * as Location from "expo-location";
import { Camera } from "expo-camera";
import styles from "@/utils/styles/Home.module.css";
import { categories } from "@/utils/constants/categories";
import CustomCategory from "@/components/CustomCategory";
import CustomProductCard from "@/components/CustomProductCard";
import { products } from "@/utils/constants/products";
import { useRoute } from '@react-navigation/native'
const Home = ({ data, navigation }) => {
  const global = require("@/utils/styles/global.js");
  const [settings, setSettings] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [status, requestPermission] = Camera.useCameraPermissions();
  // const [permissionStatus, setPermissionStatus] =
  //   useRecoilState(permissionsStatus);

  /* Globals */
  // const [notificationsPermission, setNotificationsPermission] = useRecoilState(
  //   notificationPermissions
  // );
  const [locationPermission, setLocationPermission] =
    useRecoilState(locationPermissions);
  const [contactPermission, setContactPermission] =
    useRecoilState(contactPermissions);
  const [calendarPermission, setCalendarPermission] =
    useRecoilState(calendarPermissions);
  const [cameraPermission, setCameraPermission] =
    useRecoilState(cameraPermissions);
  const checkPermissions = async () => {
    try {
      setLocationPermission(true);
      setContactPermission(true);
      setCalendarPermission(true);
      setCameraPermission(true);
    } catch (error) {
      setLocationPermission(null);
      setContactPermission(null);
      setCalendarPermission(null);
      setCameraPermission(null);
    }
  };
  useEffect(() => {
    (async () => {
      const contacts = await Contacts.requestPermissionsAsync();
      const calendar = await Calendar.requestCalendarPermissionsAsync();
      const locationMain = await Location.requestForegroundPermissionsAsync();
      const camera = await Camera.requestCameraPermissionsAsync();
      if (
        contacts.status === "granted" &&
        calendar.status === "granted" &&
        locationMain.status === "granted" &&
        camera.status === "granted"
      ) {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
        let position = await Location.getCurrentPositionAsync({});
        setLocation(position);
        /* Location */
        let text = "Waiting..";
        if (errorMsg) {
          text = errorMsg;
        } else if (location) {
          text = JSON.stringify(location);
          // console.log(text);
        }
        /* Contacts */
        if (data.length > 0) {
          const contact = data;
          // console.log(contact);
        }
        /* Calendars */
        // console.log({ calendars });
        /* Camera */
        // console.log("Done Camera");
        /* check */
        // checkPermissions()
      }
    })();
  }, []);

  if (settings) Linking.openSettings();
  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      <View style={styles.categoriesOne}>
        {categories.partOne.map((category, index) => (
          <CustomCategory
            title={category.title}
            icon={category.icon}
            key={index}
          />
        ))}
      </View>

      <View style={styles.categoriesTwo}>
        {categories.partTwo.map((category, index) => (
          <CustomCategory
            title={category.title}
            icon={category.icon}
            key={index}
          />
        ))}
      </View>

      <View style={styles.trendingPopular}>
        <View style={styles.textTrendingPopular}>
          <Text style={[styles.textMain, global.black]}>Trending Phones</Text>
          <Text style={[styles.textAll, global.black]}>All</Text>
        </View>
        <View style={styles.productsTrendingPopular}>
          <View style={styles.productsTopTrendingPopular}>
            <CustomProductCard product={products[0]} />
            <CustomProductCard product={products[1]} />
          </View>
          <View style={styles.productsBotTrendingPopular}>
            <CustomProductCard product={products[2]} />
            <CustomProductCard product={products[3]} />
          </View>
        </View>
      </View>
      <ScrollView horizontal style={{ flex: 1 }}>
        <View style={styles.categoriesBrand}>
          {categories.brands.map((category, index) => (
            <View style={styles.bubbleBrand} key={index}>
              <CustomCategory title={category.title} icon={category.icon} />
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.trendingBrand}>
        <View style={styles.textTrendingBrand}>
          <Text style={[styles.textMain, global.black]}>
            Trending Apple Products
          </Text>
          <Text style={[styles.textAll, global.black]}>All</Text>
        </View>
        <View style={styles.productsTrendingPopular}>
          <View style={styles.productsTopTrendingPopular}>
            <CustomProductCard product={products[0]} />
            <CustomProductCard product={products[1]} />
          </View>
          <View style={styles.productsBotTrendingPopular}>
            <CustomProductCard product={products[2]} />
            <CustomProductCard product={products[3]} />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", padding: 20, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => setSettings(true)}
          style={{
            backgroundColor: "blue",
            width: 100,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Text>Open Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login_Welcome")}
          style={{
            backgroundColor: "orange",
            width: 100,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Text>Salir</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
