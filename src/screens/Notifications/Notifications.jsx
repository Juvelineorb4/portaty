import { View, Text } from "react-native";
import styles from "@/utils/styles/Notifications.module.css";
import React from "react";
import { es } from "@/utils/constants/lenguage";
import CustomNotification from "@/components/CustomNotification";

const Notifications = () => {
  const global = require("@/utils/styles/global.js");
  return (
    <View style={[global.bgWhite, styles.container]}>
      <View>
        <Text style={styles.title}>Mis notificaciones</Text>
        <View style={[styles.line, global.bgWhiteSmoke]} />
        <CustomNotification content={{
          title: 'Notificacion de prueba',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          bg: '#35BF05'
        }} />
        <CustomNotification content={{
          title: 'Notificacion de prueba',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          bg: '#FFC700'
        }}/>
        <CustomNotification content={{
          title: 'Notificacion de prueba',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          bg: '#F60A0A'
        }}/>
      </View>
    </View>
  );
};

export default Notifications;
