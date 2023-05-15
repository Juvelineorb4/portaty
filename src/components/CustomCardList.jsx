import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "@/utils/styles/CustomCardList.module.css";

const CustomCardList = () => {
  const global = require("@/utils/styles/global.js");
  const [deleteCard, setDeleteCard] = useState(true);

  return deleteCard ? (
    <View style={[styles.container]}>
      <View style={styles.image}>
        <Image
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            alignSelf: "center",
          }}
          source={require("@/utils/images/iphone-14-pro-max.png")}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 17,
          }}
        >
          <Image
            style={{
              width: 17,
              height: 17,
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("@/utils/images/available.png")}
          />
          <Text style={[styles.available, global.topGray]}>Available</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={[styles.name, global.topGray]}>Iphone 14 Pro Max</Text>
        <Text style={[styles.price, global.topGray]}>$999.99</Text>

        <Text style={[styles.seller, global.topGray]}>
          Shipped and sold by Christopher
        </Text>

        <View style={styles.options}>
          <TouchableOpacity
            // onPress={() => setDeleteCard(false)}
            style={styles.option}
          >
            <Image
              style={{
                width: 19,
                height: 19,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              source={require("@/utils/images/info.png")}
            />
            <Text style={[styles.textOption, global.topGray]}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDeleteCard(false)}
            style={styles.option}
          >
            <Image
              style={{
                width: 18,
                height: 18,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              source={require("@/utils/images/delete.png")}
            />
            <Text style={[styles.textOption, global.topGray]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
    <View></View>
  );
};

export default CustomCardList;
