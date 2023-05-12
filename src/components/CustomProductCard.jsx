import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const CustomProductCard = ({ product = {} }) => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState(false)
  const global = require("@/utils/styles/global.js");
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{ justifyContent: "center", marginBottom: 30 }}
      onPress={() =>
        navigation.navigate(`${product.brand}_${product.id}`, {
          data: product,
        })
      }
    >
      <View
        style={[
          // global.bgWhiteSmoke,
          {
            // borderRadius: 12,
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
            height: 145,
            width: 145,
            flex: 1,
            borderWidth: 0.5,
            borderColor: "#404040",
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
        <TouchableOpacity
          style={[
            {
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 10,
              right: 10,
            },
          ]}
          onPress={() => setFavorites(!favorites)}
        >
          {favorites ? <Image
            style={{
              width: 30,
              height: 30,
              height: 30,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/favorites_active.png")}
          /> : <Image
          style={{
            width: 30,
            height: 30,
            height: 30,
            resizeMode: "contain",
          }}
          source={require("@/utils/images/favorites.png")}
        />}
        </TouchableOpacity>
      </View>
      <View style={[ {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flex: 1,
        borderWidth: 0.5,
        padding: 5,
        borderColor: "#404040",
        // backgroundColor: 'rgba(255, 164, 36, 0.8)'
      }]}>
        <Text
          style={[ global.topGray,
            {
              fontSize: 12,
              textTransform: "capitalize",
              fontFamily: "regular",
              letterSpacing: -1,
              marginBottom: 2,
            },
          ]}
        >
          Venezuela, Lara
        </Text>
        <Text
          style={[ global.topGray,
            {
              fontSize: 13,
              // fontWeight: "bold",
              // paddingTop: 5,
              textTransform: 'uppercase',
              fontFamily: "regular",
              letterSpacing: -1,
              marginBottom: 4,
            },
          ]}
        >
          {product.name || product.title}
        </Text>
        <Text style={[global.topGray, { fontSize: 18, fontFamily: "regular", letterSpacing: -0.6, textAlign: 'right'}]}>
          ${product.maxPrice || product.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomProductCard;
