import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import CustomButton from "@/components/CustomButton";
import styles from "@/utils/styles/PostComplete.module.css";
import { API, Storage } from "aws-amplify";
import * as queries from "@/graphql/queries";

const PostComplete = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const [preview, setPreview] = useState({});
  const [images, setImages] = useState([])
  const { productPreview } = route.params;

  const fetchData = async () => {
    try {


      Storage.list(`product/${productPreview.data.createCustomerProductStatus.product.code}/`, { level: 'protected', pageSize: 10 }).then(async (data) => {

        const promises = await Promise.all(data.results.map(async (image) => {
          const imageResult = await Storage.get(image.key, {
            level: "protected",
          });
          return imageResult
        }))
        console.log("Count Prtomises: ", promises.length)
        setImages(promises)
      })

      setPreview(productPreview);
    } catch (error) {
      console.error(error);
    }
  };

  useLayoutEffect(() => {
    fetchData();
  }, [])

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
        {console.log("images: ", images)}
        {
          !images.length <= 0
          &&
          <FlatList
            data={images}
            keyExtractor={(__, index) => index.toString()}
            horizontal={true}
            renderItem={({ item, index }) => (
              <Image
                key={index}
                style={{
                  width: 350,
                  height: 250,
                  resizeMode: "contain",
                }}
                source={{
                  uri: item,
                }}
              />
            )}
          />
        }
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
