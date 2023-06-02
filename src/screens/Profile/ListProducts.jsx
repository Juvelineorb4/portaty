import { View, Text, ScrollView } from "react-native";
import styles from "@/utils/styles/ListProducts.module.css";
import React from "react";
import { es } from "@/utils/constants/lenguage";
import CustomCardProductPublished from "@/components/CustomCardProductPublished";
import CustomCardProductPending from "@/components/CustomCardProductPending";

const ListProducts = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const { data } = route.params;
  return (
    <ScrollView style={[global.bgWhite, { flex: 1 }]} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>{es.list.products.title}</Text>
        {data.map((item, index) => (
          <CustomCardProductPublished
            onHandleNavigation={() =>
              navigation.navigate("EditListProduct", { product: item })
            }
            item={item}
            key={index}
          />
        ))}
        <View style={[styles.line, global.bgWhiteSmoke]} />
        <Text style={styles.title}>{es.list.pending.title}</Text>
        {/* <CustomCardProductPending /> */}
        {/*  */}
        {/* <CustomCardProductPending /> */}
      </View>
    </ScrollView>
  );
};

export default ListProducts;
