import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const CustomProductCard = ({ product = {} }) => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState(false);
  const global = require("@/utils/styles/global.js");
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{justifyContent: "center", marginBottom: 30, width: '50%', alignItems: 'center' }}
      onPress={() =>
        navigation.navigate(`PageProduct`, {
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
              ? {uri: product.images[0]} || {uri: product.image[0]} 
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
          {favorites ? (
            <Image
              style={{
                width: 30,
                height: 30,
                height: 30,
                resizeMode: "contain",
              }}
              source={require("@/utils/images/favorites_active.png")}
            />
          ) : (
            <Image
              style={{
                width: 30,
                height: 30,
                height: 30,
                resizeMode: "contain",
              }}
              source={require("@/utils/images/favorites_white.png")}
            />
          )}
        </TouchableOpacity>
      </View>
      <View
        style={[
          {
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            flex: 1,
            borderWidth: 0.5,
            padding: 5,
            borderColor: "#404040",
            width: 145
            // backgroundColor: 'rgba(255, 164, 36, 0.8)'
          },
        ]}
      >
        <Text
          style={[
            global.topGray,
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
          style={[
            global.topGray,
            {
              fontSize: 13,
              textTransform: "uppercase",
              fontFamily: "regular",
              letterSpacing: -1,
              marginBottom: 4,
              width: 120
            },
          ]}
        >
          {product.name || product.title}
        </Text>
        <Text
          style={[
            global.topGray,
            {
              fontSize: 18,
              fontFamily: "regular",
              letterSpacing: -0.6,
              textAlign: "right",
            },
          ]}
        >
          ${product.suggestedPrice || product.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomProductCard;
