import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "@/components/CustomButton";
import styles from "@/utils/styles/PostComplete.module.css";
import { API, Storage } from "aws-amplify";
import * as queries from "@/graphql/queries";
import { es } from "@/utils/constants/lenguage";

const PostComplete = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const { product } = route.params;
  return (
    <View style={[styles.container, global.bgWhite]}>
      <View style={styles.imageContent}>
        <Image
          style={{
            width: 350,
            height: 250,
            resizeMode: "contain",
          }}
          source={require("@/utils/images/check.png")}
        />
        <Text style={styles.textComplete}>
          {es.post.complete.text}
        </Text>
      </View>
      <CustomButton
        text={es.post.complete.button}
        handlePress={() => navigation.navigate("Preview_Product", { product: product })}
        textStyles={[styles.textPreview, global.white]}
        buttonStyles={[styles.preview, global.mainBgColor]}
      />
    </View>
  );
};

export default PostComplete;