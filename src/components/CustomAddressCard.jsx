import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "@/utils/styles/CustomAddressCard.module.css";

const CustomAddressCard = ({ content = {} }) => {
  const global = require("@/utils/styles/global.js");

  return (
    <TouchableOpacity style={[global.bgWhiteSoft, styles.container]} activeOpacity={1}>
      <View style={styles.content}>
        <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
          }}
          source={require("@/utils/images/location.png")}
        />
        <View style={styles.textContent}>
          <Text>{content.title}</Text>
          <Text>{content.text}</Text>
        </View>
      </View>

      <Image
        style={{
          width: 25,
          height: 25,
          resizeMode: "contain",
        }}
        source={require("@/utils/images/edit.png")}
      />
    </TouchableOpacity>
  );
};

export default CustomAddressCard;
