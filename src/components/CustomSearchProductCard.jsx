import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import * as customFavorites from "@/graphql/CustomMutations/Favorites";
import * as customQueries from "@/graphql/CustomQueries/Favorites";
import { useIsFocused } from "@react-navigation/native";
import { userAutenticated } from "@/atoms";
import { useRecoilValue } from "recoil";

const CustomSearchProductCard = ({ product = {} }) => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState(false);
  const [keyImages, setKeyImages] = useState([]);
  const [save, setSave] = useState("");
  const userAuth = useRecoilValue(userAutenticated);
  const global = require("@/utils/styles/global.js");
  const isFocus = useIsFocused();
  const getImages = async () => {
    try {
      const promises = await Promise.all(
        product.product.paths.map(async (image) => {
          const imageResult = await Storage.get(image, {
            level: "protected",
            identityId: product.product.customer.identityId,
          });
          return imageResult;
        })
      );
      setKeyImages(promises);
    } catch (error) {
      console.log(error);
    }
  };
  const onCreateFavorites = async () => {
    const favorites = await API.graphql({
      query: customFavorites.createFavoriteItem,
      variables: {
        input: {
          itemID: product.product.customerProductStatusId,
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
      if (item.item.product.customerProductStatusId === product.product.customerProductStatusId) setSave(item.id)
    });
  };
  useLayoutEffect(() => {
    getImages();
    fetchFavorites();
    console.log(save)
  }, [userAuth, isFocus]);
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        justifyContent: "center",
        marginBottom: 30,
        width: "50%",
        alignItems: "center",
      }}
      onPress={() =>
        navigation.navigate(`SearchSellerPoduct`, {
          product: product,
          images: keyImages
        })
      }
    >
      <View
        style={[
          // global.bgWhiteSmoke,
          {
            // borderRadius: 12,
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
            height: 145,
            width: 145,
            flex: 1,
            borderWidth: 0.5,
            borderColor: "#404040",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: keyImages[0] }}
        />
        {save ? (
          <TouchableOpacity
            onPress={() => {
              onDeleteFavorites();
            }}
            style={[
                {
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: 10,
                  right: 10,
                },
              ]}
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
            style={[
                {
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: 10,
                  right: 10,
                },
              ]}
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
      </View>
      <View
        style={[
          {
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            flex: 1,
            borderWidth: 0.5,
            padding: 5,
            borderColor: "#404040",
            width: 145,
            // backgroundColor: 'rgba(255, 164, 36, 0.8)'
          },
        ]}
      >
        <Text
          style={[
            global.topGray,
            {
              fontSize: 12,
              textTransform: "capitalize",
              fontFamily: "regular",
              letterSpacing: -1,
              marginBottom: 2,
            },
          ]}
        >
          Venezuela, Lara
        </Text>
        <Text
          style={[
            global.topGray,
            {
              fontSize: 13,
              textTransform: "uppercase",
              fontFamily: "regular",
              letterSpacing: -1,
              marginBottom: 4,
              width: 120,
            },
          ]}
        >
          {product.product.productFields.name || product.title}
        </Text>
        <Text
          style={[
            global.topGray,
            {
              fontSize: 18,
              fontFamily: "regular",
              letterSpacing: -0.6,
              textAlign: "right",
            },
          ]}
        >
          ${product.suggestedPrice || product.product.price}.00
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomSearchProductCard;
