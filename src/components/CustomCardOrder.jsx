import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/CustomCardPage.module.css";
import { es } from "@/utils/constants/lenguage";
import { Auth, API } from "aws-amplify";
import * as customProfile from "@/graphql/CustomQueries/Profile";

const CustomCardOrder = ({item, image, customer}) => {
  const global = require("@/utils/styles/global.js");
  return (
    <View style={[styles.container]}>
      <View style={styles.image}>
        <Image
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            alignSelf: "center",
          }}
          // source={{uri: image}}
        />
      </View>
      <View style={styles.content}>
        <Text style={[styles.name, global.topGray]}>{item?.adproduct?.name}</Text>
        <Text style={[styles.price, global.topGray]}>${item.price}.00</Text>
        <Text style={[styles.seller, global.topGray]}>
          {es.page.card.message} {customer}
        </Text>
      </View>
    </View>
  )
};

export default CustomCardOrder;