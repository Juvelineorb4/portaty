import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CustomCategory = ({ title, icon, onPress }) => {
  const global = require("@/utils/styles/global.js");
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
      activeOpacity={1}
    >
      <View
        style={[
          global.bgWhiteSmoke,
          {
            //   flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            height: 67,
            width: 67,
          },
        ]}
      >
        <Image
          style={{
            width: 30,
            height: 30,
            resizeMode: "contain",
          }}
          source={{ uri: icon }}
        />
      </View>

      <Text style={{ fontSize: 12, marginTop: 5, textTransform: "capitalize" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomCategory;
