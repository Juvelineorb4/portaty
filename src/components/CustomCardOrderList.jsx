import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "@/utils/styles/CustomCardList.module.css";
import { es } from "@/utils/constants/lenguage";

const CustomCardOrderList = ({onHandleNavigation}) => {
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
              width: 25,
              height: 25,
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("@/utils/images/departure.png")}
          />
          <Text style={[styles.available, global.topGray]}>{es.list.sell.card.available}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={[styles.name, global.topGray]}>Iphone 14 Pro Max</Text>
        <Text style={[styles.price, global.topGray]}>$999.99</Text>

        <Text style={[styles.seller, global.topGray]}>
          {es.list.sell.card.message}
        </Text>

        <View style={styles.options}>
          <TouchableOpacity
            onPress={onHandleNavigation}
            style={styles.option}
          >
            <Image
              style={{
                width: 19,
                height: 19,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              source={require("@/utils/images/editcard.png")}
            />
            <Text style={[styles.textOption, global.topGray]}>{es.list.sell.card.details}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
    <View></View>
  );
};

export default CustomCardOrderList;
