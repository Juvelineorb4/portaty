import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CustomFloatButton = ({ onHandlePress, icon }) => {
  const global = require("@/utils/styles/global.js");

  return (
    <TouchableOpacity onPress={onHandlePress} style={[global.mainBgColor, {width: 60, height: 60, borderRadius: 50, position: 'absolute', bottom: 10, right: 10}]}>
      <Image
        style={{
          width: 45,
          height: 45,
          resizeMode: "contain",
        }}
        source={{ uri: icon }}
      />
    </TouchableOpacity>
  );
};

export default CustomFloatButton;
