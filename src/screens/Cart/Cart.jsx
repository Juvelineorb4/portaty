import { View, Text } from "react-native";
import React from "react";
import CustomCardCart from "@/components/CustomCardCart";
import styles from "@/utils/styles/Cart.module.css";
import CustomButton from "@/components/CustomButton";

const Cart = ({navigation}) => {
  const global = require("@/utils/styles/global.js");
  return (
    <View style={[styles.container, global.bgWhite]}>
      <View>
        <Text style={styles.title}>My Cart</Text>
        <View style={[styles.line, global.bgWhiteSmoke]} />
        <CustomCardCart />
        <CustomCardCart />
      </View>
      <CustomButton
        text={`Checkout`}
        handlePress={() => navigation.navigate('Checkout')}
        textStyles={[styles.textCheckout, global.white]}
        buttonStyles={[styles.checkout, global.mainBgColor]}
      />
    </View>
  );
};

export default Cart;
