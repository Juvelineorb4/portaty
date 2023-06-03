import { View, Text, ScrollView } from "react-native";
import styles from "@/utils/styles/ListProducts.module.css";
import React from "react";
import { es } from "@/utils/constants/lenguage";
import CustomCardOrderList from "@/components/CustomCardOrderList";

const ListOrders = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const { purchase, sales } = route.params;
  return (
    <ScrollView style={[global.bgWhite, { flex: 1 }]} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>{es.list.sell.title}</Text>
        {sales.map((item, index) => (
          <CustomCardOrderList key={index} data={item} status={'sell'} />
        ))}
        <Text style={styles.title}>{es.list.buy.title}</Text>
        {purchase.map((item, index) => (
          <CustomCardOrderList key={index} data={item} status={'buy'} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ListOrders;
