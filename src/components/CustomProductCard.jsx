import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "@/utils/styles/Home.module.css";
import { useNavigation } from "@react-navigation/native";

const CustomProductCard = ({ product = {} }) => {
  const navigation = useNavigation();
  const global = require("@/utils/styles/global.js");
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{ justifyContent: "center", marginBottom: 50 }}
      onPress={() =>
        navigation.navigate(`${product.brand}_${product.id}`, {
          data: product,
        })
      }
    >
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
          source={
            product.images || product.image
              ? product.images || product.image
              : require("@/utils/images/notimage.png")
          }
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
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/favorites.png")}
          />
        </View>
      </View>

      <Text
        style={[
          {
            fontSize: 14,
            // fontWeight: "bold",
            paddingTop: 5,
            textTransform: "capitalize",
            fontFamily: 'light',
            letterSpacing: -0.5,
            marginBottom: 3
          },
        ]}
      >
        {product.name || product.title}
      </Text>
      <Text style={{ fontSize: 16, fontFamily: 'regular', }}>
        ${product.maxPrice || product.price}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomProductCard;
