import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";

import Header from "./HeaderTabs/index";
import Favorites from "@/screens/Favorites/Favorites";
// import Checkout from "@/screens/Favorites/Checkout";
import LeftHeader from "./HeaderTabs/LeftHeader";
import LeftSearch from "./HeaderTabs/LeftSearch";
import CustomPageFavorite from "@/components/CustomPageFavorite";
// import PaymentFavoriteNavigator from "./PaymentFavoriteNavigator";
import PaymentNavigator from "./PaymentNavigator";
import Result from "@/screens/Search/Result";
import CustomSearchSellerProduct from "@/components/CustomSearchSellerProduct";

const Stack = createNativeStackNavigator();

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator id="Favorites_Stack" initialRouteName={`Favorites`}>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Favorite_Product"
        component={CustomPageFavorite}
        options={{ header: (props) => <LeftSearch {...props} /> }}
      />
      <Stack.Screen
          name={`Payment_Navigator`}
          component={PaymentNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
        name="Result"
        component={Result}
        options={{
          animation: "slide_from_right",
          header: (props) => <Header {...props} />,
        }}
      />
      <Stack.Screen
        name="SearchSellerPoduct"
        component={CustomSearchSellerProduct}
        options={{
          animation: "slide_from_right",
          header: (props) => <LeftHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesNavigator;
