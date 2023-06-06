import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import styles from "@/utils/styles/CustomCardList.module.css";
import { es } from "@/utils/constants/lenguage";
import { API, Storage } from "aws-amplify";
import * as customFavorites from "@/graphql/CustomMutations/Favorites";
import * as customQueries from "@/graphql/CustomQueries/Favorites";
import { useNavigation } from "@react-navigation/native";
// import { userAutenticated } from "@/atoms";e
// import { useRecoilValue } from "recoil";

const CustomCardListFavorite = ({ product }) => {
  const global = require("@/utils/styles/global.js");
  const [deleteCard, setDeleteCard] = useState(true);
  const [keyImages, setKeyImages] = useState([]);
  const [item, setItem] = useState([]);
  const navigation = useNavigation()
  console.log(product.item.status)
  const onDeleteFavorites = async () => {
    const favorites = await API.graphql({
      query: customFavorites.deleteFavoriteItem,
      variables: {
        input: {
          id: product.id,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    setDeleteCard(false);
  };

  const fetchProduct = async () => {
    const productItem = await API.graphql({
      query: customQueries.getCustomerProductStatus,
      variables: {
        id: product.item.product.customerProductStatusId,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    setItem(productItem.data.getCustomerProductStatus);
  };
  const getImages = async (userKey) => {
    try {
      const promises = await Promise.all(
        product.item.product.paths.map(async (image) => {
          const imageResult = await Storage.get(image, {
            level: "protected",
            identityId: product.item.product.customer.identityId,
          });
          return imageResult;
        })
      );
      setKeyImages(promises);
    } catch (error) {
      console.error(error);
    }
  };
  useLayoutEffect(() => {
    getImages();
    fetchProduct();
  }, []);
  return deleteCard ? (
    <View style={[styles.container]}>
      <View style={styles.image}>
        <Image
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            alignSelf: "center",
          }}
          source={{ uri: keyImages[0] }}
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
            {es.favorites.card.available}
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={[styles.name, global.topGray]}>
          {product.item.product.adproduct.name}
        </Text>
        <Text style={[styles.price, global.topGray]}>
          ${product.item.product.price}.00
        </Text>

        <Text style={[styles.seller, global.topGray]}>
          {es.favorites.card.message} {product.item.product.customer.name}
        </Text>

        <View style={styles.options}>
          <TouchableOpacity onPress={() => navigation.navigate('Favorite_Product', {
            product: item.product
          })} style={styles.option}>
            <Image
              style={{
                width: 19,
                height: 19,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              source={require("@/utils/images/info.png")}
            />
            <Text style={[styles.textOption, global.topGray]}>{`Ver`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onDeleteFavorites()}
            style={styles.option}
          >
            <Image
              style={{
                width: 18,
                height: 18,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              source={require("@/utils/images/delete.png")}
            />
            <Text style={[styles.textOption, global.topGray]}>
              {es.favorites.card.delete}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
    <View></View>
  );
};

export default CustomCardListFavorite;
