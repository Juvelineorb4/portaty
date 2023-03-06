import { View, Text, TouchableOpacity, Linking } from "react-native";
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
import { Camera } from 'expo-camera';

const Home = ({ data, navigation }) => {
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
        camera.status === 'granted'
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
          console.log(text)
        }
        /* Contacts */
        if (data.length > 0) {
          const contact = data;
          console.log(contact);
        }
        /* Calendars */
        console.log({ calendars });
        /* Camera */
        console.log('Done Camera')
        /* check */
        // checkPermissions()
      }
    })();
  }, []);

  if (settings) Linking.openSettings();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
      {data.map((item) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.brand)}
          style={{
            backgroundColor: "blue",
            width: 100,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
          key={item.id}
        >
          <Text>{item.brand}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;
