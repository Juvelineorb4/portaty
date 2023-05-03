import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "@/components/CustomButton";
import styles from "@/utils/styles/PostComplete.module.css";
import { API, Storage } from "aws-amplify";
import * as queries from "@/graphql/queries";

const PostComplete = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const [preview, setPreview] = useState({});
  const { customerProductStatusID } = route.params;

  const fetchData = async () => {
    try {
      const categories = await API.graphql({
        query: queries.getCustomerProductStatus,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: { id: customerProductStatusID },
      });

      Storage.list(`product/${categories.data.getCustomerProductStatus.product.code}/`,{ level: 'protected', pageSize: 10 }).then((data) => {
        data.results.map(async (image) => {
          const imageResult = await Storage.get(image.key, {
            level: "protected",
          });
        })
      })

      setPreview(categories);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [customerProductStatusID]);

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
          Your product is under review, we will notify you once we review it,
          normally it takes 24 hours to review
        </Text>
      </View>
      <CustomButton
        text={`Preview of your product`}
        handlePress={() => navigation.navigate("Preview_Product")}
        textStyles={[styles.textPreview, global.white]}
        buttonStyles={[styles.preview, global.bgBlack]}
      />
    </View>
  );
};

export default PostComplete;
