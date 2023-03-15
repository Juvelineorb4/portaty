import { View, Text, Image } from "react-native";
import React from "react";

const CustomCategory = ({ title, icon }) => {
  const global = require("@/utils/styles/global.js");
  return (
    <View
    style={{
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <View style={[
        global.bgWhiteSmoke,
        {
        //   flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
          height: 67,
          width: 67
        },
      ]}>

      <Image
        style={{
          width: 30,
          height: 30,
          resizeMode: "contain",
        }}
        source={icon}
      />
      </View>

      <Text style={{ fontSize: 12, marginTop: 5 }}>{title}</Text>
    </View>
  );
};

export default CustomCategory;
