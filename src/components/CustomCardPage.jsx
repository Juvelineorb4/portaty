import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "@/utils/styles/CustomCardPage.module.css";
import { es } from "@/utils/constants/lenguage";

const CustomCardPage = ({onHandlePress}) => {
  const global = require("@/utils/styles/global.js");
  const [save, setSave] = useState(false)
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
          <Text style={[styles.available, global.topGray]}>{es.page.card.available}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={[styles.name, global.topGray]}>Iphone 14 Pro Max</Text>
        <Text style={[styles.price, global.topGray]}>$999.99</Text>

        <Text style={[styles.seller, global.topGray]}>
          {es.page.card.message} Christopher
        </Text>

        <View style={styles.options}>
          <TouchableOpacity
            onPress={() => setSave(!save)}
            style={styles.save}
          >
            {save ? <Image
              style={{
                width: 27,
                height: 27,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              source={require("@/utils/images/favorites_active.png")}
            /> : <Image
            style={{
              width: 27,
              height: 27,
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("@/utils/images/favorites_white.png")}
          />}
            
            <Text style={[styles.textSave, global.topGray]}>{es.page.card.favorites}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onHandlePress}
            style={[styles.buy, global.mainBgColor]}
          >
            <Text style={[styles.textBuy, global.white]}>{es.page.card.buy}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

export default CustomCardPage;
