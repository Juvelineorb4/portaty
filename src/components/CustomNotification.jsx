import { View, Text, Image } from "react-native";
import React from "react";

const CustomNotification = ({ content = {} }) => {
  const global = require("@/utils/styles/global.js");
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: 20,
        borderWidth: 0.5,
        borderRadius: 12,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 50,
            backgroundColor: content.bg,
          }}
        />
        <Image
          style={{
            width: 30,
            height: 30,
            resizeMode: "contain",
          }}
          source={require("@/utils/images/notification_black.png")}
        />
      </View>
      <View style={{ marginTop: 5 }}>
        <View>
          <Text
            style={[global.mainColor, { fontFamily: "regular", fontSize: 15 }]}
          >
            {content.title}
          </Text>
        </View>

        <Text style={{ fontFamily: "light", fontSize: 12, marginTop: 3 }}>
          {content.text}
        </Text>
      </View>
    </View>
  );
};

export default CustomNotification;
