import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import styles from "@/utils/styles/CustomCardPage.module.css";
import { es } from "@/utils/constants/lenguage";
import { API, Storage } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

const CustomCardPage = ({ onHandlePress, data = {} }) => {
  const global = require("@/utils/styles/global.js");
  const [save, setSave] = useState(false);
  const [keyImages, setKeyImages] = useState([]);
  const getImages = async () => {
    try {
      Storage.list(`product/${data.code}/`, {
        level: "protected",
        pageSize: 10,
      }).then(async (data) => {
        const promises = await Promise.all(
          data.results.map(async (image) => {
            const imageResult = await Storage.get(image.key, {
              level: "protected",
            });
            return imageResult;
          })
        );
        setKeyImages(promises);
      });
    } catch (error) {
      console.error(error);
    }
  };
  // const fetchData = async () => {
  //   try {
  //     const shops = await API.graphql({
  //       query: queries.listCustomerShops,
  //       variables: { owner: data.owner},
  //       authMode: "AMAZON_COGNITO_USER_POOLS",
  //     });
  //     console.log(shops.data.listCustomerShops.items[0].owner === data.owner)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useLayoutEffect(() => {
    // fetchData()
    getImages();
  }, []);
  return (
    <View style={[styles.container]}>
      <View style={styles.image}>
        <Image
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            alignSelf: "center",
          }}
          source={{uri: keyImages[0]}}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 17,
          }}
        >
          <Image
            style={{
              width: 17,
              height: 17,
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("@/utils/images/available.png")}
          />
          <Text style={[styles.available, global.topGray]}>
            {es.page.card.available}
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={[styles.name, global.topGray]}>{data.productFields.name}</Text>
        <Text style={[styles.price, global.topGray]}>${data.price}.00</Text>

        <Text style={[styles.seller, global.topGray]}>
          {es.page.card.message} {data.customer.name}
        </Text>
        <View style={styles.options}>
          <TouchableOpacity onPress={() => setSave(!save)} style={styles.save}>
            {save ? (
              <Image
                style={{
                  width: 27,
                  height: 27,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("@/utils/images/favorites_active.png")}
              />
            ) : (
              <Image
                style={{
                  width: 27,
                  height: 27,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("@/utils/images/favorites_white.png")}
              />
            )}

            <Text style={[styles.textSave, global.topGray]}>
              {es.page.card.favorites}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onHandlePress}
            style={[styles.buy, global.mainBgColor]}
          >
            <Text style={[styles.textBuy, global.white]}>
              {es.page.card.buy}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomCardPage;
