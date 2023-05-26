import { View, Text } from "react-native";
import React from "react";
import CustomCardList from "@/components/CustomCardList";
import styles from "@/utils/styles/Favorites.module.css";
import CustomButton from "@/components/CustomButton";
import { es } from "@/utils/constants/lenguage";

const Favorites = ({navigation}) => {
  const global = require("@/utils/styles/global.js");
  return (
    <View style={[styles.container, global.bgWhite]}>
      <View>
        <Text style={styles.title}>{es.favorites.title}</Text>
        <View style={[styles.line, global.bgWhiteSmoke]} />
        {/* <CustomCardList /> */}
        {/* <CustomCardList /> */}
      </View>
      {/* <CustomButton
        text={`Checkout`}
        handlePress={() => navigation.navigate('Checkout')}
        textStyles={[styles.textCheckout, global.white]}
        buttonStyles={[styles.checkout, global.mainBgColor]}
      /> */}
    </View>
  );
};

export default Favorites;
