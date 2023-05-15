import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";

import Header from "./HeaderTabs/index";
import Favorites from "@/screens/Favorites/Favorites";
// import Checkout from "@/screens/Favorites/Checkout";
import LeftHeader from "./HeaderTabs/LeftHeader";

const Stack = createNativeStackNavigator();

const FavoritesNavigator = () => {
  const router = useRoute();
  useEffect(() => {
    console.log(router.name);
  }, []);
  return (
    <Stack.Navigator id="Favorites_Stack" initialRouteName={`Favorites`}>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ header: (props) => <Header {...props} /> }}
      />
      {/* <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{ header: (props) => <LeftHeader {...props} />, }}
      /> */}
    </Stack.Navigator>
  );
};

export default FavoritesNavigator;
