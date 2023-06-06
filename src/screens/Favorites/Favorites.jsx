import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/Favorites.module.css";
import { es } from "@/utils/constants/lenguage";
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import * as customQueries from "@/graphql/CustomQueries/Favorites";
import { useRecoilValue } from "recoil";
import { userAutenticated } from "@/atoms";
import { useIsFocused } from "@react-navigation/native";
import CustomCardListFavorite from "@/components/CustomCardListFavorite";

const Favorites = ({ navigation }) => {
  const global = require("@/utils/styles/global.js");
  const userAuth = useRecoilValue(userAutenticated);
  const [favoritesList, setFavoritesList] = useState([]);
  const isFocus = useIsFocused();

  const fetchFavorites = async () => {
    const favoritesItem = await API.graphql({
      query: customQueries.getCustomerShop,
      variables: {
        userID: userAuth.attributes.sub,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    setFavoritesList(favoritesItem.data.getCustomerShop.favorites.items);
  };

  useEffect(() => {
    fetchFavorites();
  }, [userAuth, isFocus]);

  return (
    <View style={[styles.container, global.bgWhite]}>
      <View>
        <Text style={styles.title}>{es.favorites.title}</Text>
        <View style={[styles.line, global.bgWhiteSmoke]} />
        {favoritesList.map((item, index) => (
          <CustomCardListFavorite product={item} key={index} />
        ))}
      </View>
    </View>
  );
};

export default Favorites;
