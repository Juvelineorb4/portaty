import { View, Text } from 'react-native'
import React from 'react'
import styles from "@/utils/styles/Checkout.module.css";
import CustomAddressCard from '@/components/CustomAddressCard';
import CustomCardCart from '@/components/CustomCardCart';
import { ScrollView } from 'react-native-gesture-handler';
import CustomShippingCard from '@/components/CustomShippingCard';

const Checkout = () => {
  const global = require("@/utils/styles/global.js");
  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
        <View style={[styles.line, global.bgWhiteSmoke]} />
        <View style={styles.section}>
        <Text style={styles.title}>Shipping Address</Text>
        <CustomAddressCard content={{
          title: 'Home',
          text: 'Calle 5 #34 - Barquisimeto, Lara'
        }} />
        </View>

        <View style={[styles.line, global.bgWhiteSmoke]} />
        <View style={styles.section}>
        <Text style={styles.title}>Order List</Text>
        <CustomCardCart />
        <CustomCardCart />
        <CustomCardCart />

        </View>
        <View style={[styles.line, global.bgWhiteSmoke]} />
        <View style={styles.section}>
        <Text style={styles.title}>Choose Shipping</Text>
        <CustomShippingCard content={{
          title: 'Regular',
          text: 'Estimated: Monday 17 Abril'
        }} />
        </View>

        <View style={[styles.line, global.bgWhiteSmoke]} />
    </ScrollView>
  )
}

export default Checkout