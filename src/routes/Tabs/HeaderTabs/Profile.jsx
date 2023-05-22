import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "@/utils/styles/Header.module.css";
const Profile = ({ onSearchHandler }) => {
  return (
    <View style={styles.contentProfile2}>
      {/* Logo */}
      <View style={styles.logo}>
        <Image
          style={{
            width: 100,
            height: 35,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/portaty_name.png")}
        />
      </View>
      {/* extra */}
      <View style={styles.otherIcon}>
        {/* Notification */}
        <Image
          style={{
            width: 35,
            height: 35,
            resizeMode: "contain",
          }}
          source={require("@/utils/images/notification_default.png")}
        />
        {/* Search */}
        <TouchableOpacity onPress={() => onSearchHandler()}>
          <Image
            style={{
              width: 40,
              height: 40,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/search_black.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
