import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "@/utils/styles/Left.module.css";

const LeftHeader = ({ text = "", icon = true, route}) => {
  const global = require('@/utils/styles/global.js');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.pop()} style={styles.back}>
          <Image
            style={{
              width: 40,
              height: 40,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/arrow_back.png")}
          />
        </TouchableOpacity>
    </View>
  );
};

export default LeftHeader;
