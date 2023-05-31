import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "@/utils/styles/CustomCardList.module.css";
import { es } from "@/utils/constants/lenguage";

const CustomCardList = ({item = {}}) => {
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
          source={{uri: item.images[0]}}
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
          <Text style={[styles.available, global.topGray]}>{es.favorites.card.available}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={[styles.name, global.topGray]}>{item.product.productFields.name}</Text>
        <Text style={[styles.price, global.topGray]}>${item.product.price}.00</Text>

        <Text style={[styles.seller, global.topGray]}>
          {es.favorites.card.message} {item.product.customer.name}
        </Text>

        <View style={styles.options}>
          {/* <TouchableOpacity
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
            <Text style={[styles.textOption, global.topGray]}>{es.favorites.card.details}</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity
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
            <Text style={[styles.textOption, global.topGray]}>{es.favorites.card.delete}</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  ) : (
    <View></View>
  );
};

export default CustomCardList;
