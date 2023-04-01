import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CustomCategory = ({
  title,
  icon,
  onPress,
  activeSelect = "",
  itemId,
}) => {
  const global = require("@/utils/styles/global.js");
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 80,
        marginVertical: 10
      }}
      onPress={onPress}
      activeOpacity={1}
    >
      <View
        style={[
          activeSelect === itemId ? global.mainBgColor : global.bgWhiteSmoke,
          {
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

      <Text
        style={{
          flex: 1,
          fontSize: 12,
          marginTop: 5,
          textTransform: "capitalize",
          textAlign: "center",
          fontFamily: 'medium'
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomCategory;
