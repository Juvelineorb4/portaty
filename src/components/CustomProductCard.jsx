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
<<<<<<< HEAD
      style={{ justifyContent: "center", marginBottom: 20 }}
=======
      style={{justifyContent: "center", marginBottom: 30, width: '50%', alignItems: 'center' }}
>>>>>>> af8975fa0dfb05f90e2c02790b544d746bd8db08
      onPress={() =>
        navigation.navigate(`PageProduct`, {
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
              ? {uri: product.images[0]} || {uri: product.image[0]} 
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
              width: 12,
              height: 12,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/favorites.png")}
          />
        </View>
      </View>

      <Text
        style={[
          {
<<<<<<< HEAD
            fontSize: 16,
            // fontWeight: "bold",
            paddingTop: 5,
            textTransform: "capitalize",
            fontFamily: 'medium',
            letterSpacing: -0.5,
            marginBottom: 1
=======
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            flex: 1,
            borderWidth: 0.5,
            padding: 5,
            borderColor: "#404040",
            width: 145
            // backgroundColor: 'rgba(255, 164, 36, 0.8)'
>>>>>>> af8975fa0dfb05f90e2c02790b544d746bd8db08
          },
        ]}
      >
        {product.name || product.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: 110,
          marginBottom: 1
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
            source={require("@/utils/images/star.png")}
          />
          <Text
            style={[
              global.black,
              { fontSize: 12, marginLeft: 3, fontFamily: 'thinItalic', marginRight: 5 },
            ]}
          >
            {product.avgRating || product.reviews}
          </Text>
        </View>
        <Text>|</Text>
        <View
          style={[
            global.bgWhiteSmoke,
            { paddingHorizontal: 5, borderRadius: 7, marginLeft: 5 },
          ]}
        >
<<<<<<< HEAD
          <Text style={[global.black, { fontSize: 12, fontFamily: 'thinItalic' }]}>
            {product.solds} solds
          </Text>
        </View>
=======
          ${product.suggestedPrice || product.price}
        </Text>
>>>>>>> af8975fa0dfb05f90e2c02790b544d746bd8db08
      </View>

      <Text style={{ fontSize: 16, fontFamily: 'semibold' }}>
        ${product.maxPrice || product.price}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomProductCard;
