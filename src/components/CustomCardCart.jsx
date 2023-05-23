import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "@/utils/styles/CustomCardCart.module.css";

const CustomCardCart = () => {
  const global = require("@/utils/styles/global.js");
  const [deleteCard, setDeleteCard] = useState(true);

  return (
    deleteCard ? <View style={[styles.container, global.bgWhiteSoft]}>
      <View style={styles.image}>
        <Image
          style={{
            width: 110,
            height: 110,
            resizeMode: "contain",
            alignSelf: "center",
          }}
          source={require("@/utils/images/notimage.png")}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>Iphone 14 Pro Max</Text>
        <Text style={styles.seller}>Seller: Christopher</Text>
        <View style={styles.options}>
          <Text style={styles.price}>$999.99</Text>
          <TouchableOpacity onPress={() => setDeleteCard(false)} style={styles.trash}>
            <Image
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              source={require("@/utils/images/delete.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View> : <View></View>
  );
};

export default CustomCardCart;
