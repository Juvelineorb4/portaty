import { View, Text } from "react-native";
import React from "react";
import styles from "@/utils/styles/Checkout.module.css";
import CustomAddressCard from "@/components/CustomAddressCard";
import CustomCardList from "@/components/CustomCardList";
import { ScrollView } from "react-native-gesture-handler";
import CustomShippingCard from "@/components/CustomShippingCard";

const Checkout = () => {
  const global = require("@/utils/styles/global.js");
  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      <View style={styles.section}>
        <Text style={styles.title}>Shipping Address</Text>
        <View style={[styles.line, global.bgWhiteSmoke]} />

        <CustomAddressCard
          content={{
            title: "Home",
            text: "Calle 5 #34 - Barquisimeto, Lara",
          }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Order List</Text>
        <View style={[styles.line, global.bgWhiteSmoke]} />

        <CustomCardCart />
        <CustomCardCart />
        <CustomCardCart />
      </View>
      <View style={[styles.section, { marginBottom: 100 }]}>
        <Text style={styles.title}>Choose Shipping</Text>
        <View style={[styles.line, global.bgWhiteSmoke]} />
        <CustomShippingCard
          content={{
            title: "Fast",
            text: "Estimated: Monday 17 Abril",
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Checkout;
