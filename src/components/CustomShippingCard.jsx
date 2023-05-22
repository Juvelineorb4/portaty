import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "@/utils/styles/CustomShippingCard.module.css";

const CustomShippingCard = ({ content = {} }) => {
  const global = require("@/utils/styles/global.js");

  return (
    <TouchableOpacity style={[global.bgWhite, styles.container]} activeOpacity={1}>
      <View style={styles.content}>
        <Image
          style={{
            width: 35,
            height: 35,
            marginRight: 8,
            resizeMode: "contain",
          }}
          source={require("@/utils/images/shipping.png")}
        />
        <View style={styles.textContent}>
          <Text style={{fontFamily: 'light', fontSize: 14}}>{content.title}</Text>
          <Text style={{fontFamily: 'lightItalic', fontSize: 12}}>{content.text}</Text>
        </View>
      </View>

      <Image
        style={{
          width: 40,
          height: 40,
          resizeMode: "contain",
        }}
        source={require("@/utils/images/edit.png")}
      />
    </TouchableOpacity>
  );
};

export default CustomShippingCard;
