import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "@/utils/styles/CustomCardList.module.css";
import { es } from "@/utils/constants/lenguage";

const CustomCardProductPublished = ({onHandleNavigation, item}) => {
  const global = require("@/utils/styles/global.js");
  const [deleteCard, setDeleteCard] = useState(true);
  const date = new Date(item.createdAt);
    const formattedDate = date.toLocaleDateString('es-ES');
    console.log(formattedDate)
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
          source={{uri: item.productFields.images}}
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
          <Text style={[styles.available, global.topGray]}>{item.status.status ? es.list.products.card.available : ''}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={[styles.name, global.topGray]}>{item.productFields.name}</Text>
        <Text style={[styles.price, global.topGray]}>${item.price}.00</Text>

        <Text style={[styles.seller, global.topGray]}>
          {es.list.products.card.message}{formattedDate}
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
            <Text style={[styles.textOption, global.topGray]}>{es.list.products.card.details}</Text>
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
            <Text style={[styles.textOption, global.topGray]}>{es.list.products.card.delete}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
    <View></View>
  );
};

export default CustomCardProductPublished;
