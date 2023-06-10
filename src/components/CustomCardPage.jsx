import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import styles from "@/utils/styles/CustomCardPage.module.css";
import { es } from "@/utils/constants/lenguage";
import { API, Storage } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as customFavorites from "@/graphql/CustomMutations/Favorites";
import * as customQueries from "@/graphql/CustomQueries/Favorites";
import { userAutenticated } from "@/atoms";
import { useRecoilValue } from "recoil";
import { useIsFocused } from "@react-navigation/native";

const CustomCardPage = ({ onHandlePress, data = {}, owner }) => {
  const global = require("@/utils/styles/global.js");
  const [save, setSave] = useState("");
  const [keyImages, setKeyImages] = useState([]);
  const userAuth = useRecoilValue(userAutenticated);
  const isFocus = useIsFocused();

  const getImages = async (userKey) => {
    try {
      Storage.list(`products/${data.code}/`, {
        level: "protected",
        pageSize: 10,
        identityId: userKey,
      }).then(async (data) => {
        const promises = await Promise.all(
          data.results.map(async (image) => {
            const imageResult = await Storage.get(image.key, {
              level: "protected",
              identityId: userKey,
            });
            return imageResult;
          })
        );
        setKeyImages(promises);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateFavorites = async () => {
    const favorites = await API.graphql({
      query: customFavorites.createFavoriteItem,
      variables: {
        input: {
          itemID: data.customerProductStatusId,
          customerShopID: userAuth.attributes.sub,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    setSave(favorites.data.createFavoriteItem.id);
  };

  const onDeleteFavorites = async () => {
    const favorites = await API.graphql({
      query: customFavorites.deleteFavoriteItem,
      variables: {
        input: {
          id: save,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    setSave("");
  };

  const fetchFavorites = async () => {
    const favoritesItem = await API.graphql({
      query: customQueries.getCustomerShop,
      variables: {
        userID: userAuth.attributes.sub,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    favoritesItem.data.getCustomerShop.favorites.items.map((item, index) => {
      if (
        item.item.product.customerProductStatusId ===
        data.customerProductStatusId
      ) setSave(item.id);
    });
  };

  useLayoutEffect(() => {
    fetchFavorites();
    getImages(data.customer.identityId);
  }, [userAuth, isFocus]);
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
          source={{ uri: keyImages[0] }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: owner ? 5 : 17,
          }}
        >
          <Image
            style={{
              width: owner ? 35 : 17,
              height: owner ? 35 : 17,
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={
              owner
                ? require("@/utils/images/owner.png")
                : require("@/utils/images/available.png")
            }
          />
          <Text style={[styles.available, global.topGray]}>
            {owner ? "Propietario" : es.page.card.available}
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={[styles.name, global.topGray]}>
          {data.productFields.name}
        </Text>
        <Text style={[styles.price, global.topGray]}>${data.price}.00</Text>

        <Text style={[styles.seller, global.topGray]}>
          {es.page.card.message} {data.customer.name}
        </Text>
        <View style={styles.options}>
          {owner ? (
            ""
          ) : (
            <View style={styles.save}>
              {save ? (
                <TouchableOpacity
                  onPress={() => {
                    onDeleteFavorites();
                  }}
                  style={styles.save}
                >
                  <Image
                    style={{
                      width: 27,
                      height: 27,
                      resizeMode: "contain",
                      alignSelf: "center",
                    }}
                    source={require("@/utils/images/favorites_active.png")}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    onCreateFavorites();
                  }}
                  style={styles.save}
                >
                  <Image
                    style={{
                      width: 27,
                      height: 27,
                      resizeMode: "contain",
                      alignSelf: "center",
                    }}
                    source={require("@/utils/images/favorites_white.png")}
                  />
                </TouchableOpacity>
              )}
              <Text style={[styles.textSave, global.topGray]}>
                {es.page.card.favorites}
              </Text>
            </View>
          )}
          <TouchableOpacity
            onPress={onHandlePress}
            style={[owner ? styles.see : styles.buy, global.mainBgColor]}
          >
            <Text
              style={[owner ? styles.textSee : styles.textBuy, global.white]}
            >
              {owner ? "Ver" : es.page.card.buy}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomCardPage;
