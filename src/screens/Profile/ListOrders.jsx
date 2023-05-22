import { View, Text, ScrollView } from "react-native";
import styles from "@/utils/styles/ListProducts.module.css";
import React from "react";
import { es } from "@/utils/constants/lenguage";
import CustomCardOrderList from "@/components/CustomCardOrderList";

const ListOrders = ({navigation}) => {
  const global = require("@/utils/styles/global.js");
  const handleNavigate = () => navigation.navigate('ViewOrder')
  return (
    <ScrollView style={[global.bgWhite, { flex: 1 }]}>
      <View style={styles.container}>
        <Text style={styles.title}>{es.list.sell.title}</Text>
        <CustomCardOrderList onHandleNavigation={handleNavigate}/>
        <CustomCardOrderList onHandleNavigation={handleNavigate}/>
      </View>
    </ScrollView>
  );
};

export default ListOrders;
