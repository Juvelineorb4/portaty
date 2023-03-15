import { View, Text, Image } from "react-native";
import React from "react";
import styles from "@/utils/styles/Home.module.css";

const CustomProductCard = ({ product = {} }) => {
  const global = require("@/utils/styles/global.js");
  return (
    <View style={{ justifyContent: "center" }}>
      <View
        style={[
          global.bgWhiteSmoke,
          {
            borderRadius: 12,
            height: 145,
            width: 145,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={product.image}
        />
        <View
          style={[
            global.bgBlack,
            {
              borderRadius: 50,
              height: 30,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 10,
              right: 10,
            },
          ]}
        >
          <Image
            style={{
              width: 12,
              height: 12,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/favorites.png")}
          />
        </View>
      </View>

      <Text style={[{ fontSize: 16, fontWeight: "bold", paddingTop: 5 }]}>
        {product.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: 110,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
          style={{
            width: 13,
            height: 13,
            resizeMode: "contain",
          }}
          source={require('@/utils/images/star.png')}
        />
          <Text style={[global.black, { fontSize: 12, fontStyle: "italic", marginLeft: 3 }]}>
            {product.reviews}
          </Text>
        </View>
        <Text>|</Text>
        <View
          style={[
            global.bgWhiteSmoke,
            { paddingHorizontal: 5, borderRadius: 7 },
          ]}
        >
          <Text style={[global.black, { fontSize: 12, fontStyle: "italic" }]}>
            {product.solds} solds
          </Text>
        </View>
      </View>

      <Text style={{ fontSize: 16, fontWeight: "bold" }}>${product.price}</Text>
    </View>
  );
};

export default CustomProductCard;
