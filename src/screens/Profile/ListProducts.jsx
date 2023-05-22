import { View, Text, ScrollView } from "react-native";
import styles from "@/utils/styles/ListProducts.module.css";
import React from "react";
import { es } from "@/utils/constants/lenguage";
import CustomCardProductPublished from "@/components/CustomCardProductPublished";
import CustomCardProductPending from "@/components/CustomCardProductPending";

const ListProducts = ({navigation}) => {
  const global = require("@/utils/styles/global.js");
  const handleNavigate = () => navigation.navigate('EditListProduct')
  return (
    <ScrollView style={[global.bgWhite, { flex: 1 }]}>
      <View style={styles.container}>
        <Text style={styles.title}>{es.list.products.title}</Text>
        <CustomCardProductPublished onHandleNavigation={handleNavigate}/>
        <CustomCardProductPublished onHandleNavigation={handleNavigate}/>
        <View style={[styles.line, global.bgWhiteSmoke]} />
        <Text style={styles.title}>{es.list.pending.title}</Text>
        <CustomCardProductPending />
        <CustomCardProductPending />
      </View>
    </ScrollView>
  );
};

export default ListProducts;
