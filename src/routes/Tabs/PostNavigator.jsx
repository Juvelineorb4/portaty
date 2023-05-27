import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Sell from "@/screens/Sell/Sell";
import { useRoute } from "@react-navigation/native";

import Header from './HeaderTabs/index'
import PostProduct from "@/screens/Post/PostProduct";
import PostComplete from "@/screens/Post/PostComplete";
import PreviewProduct from "@/screens/Post/PreviewProduct";


const Stack = createNativeStackNavigator();

const PostNavigator = () => {
  return (
    <Stack.Navigator
      id="Post_Main"
      initialRouteName={`Post_Product`}
    >
      <Stack.Screen
        name="Post_Product"
        component={PostProduct}
        options={{
            animation: "slide_from_right",
          }}
      />
      <Stack.Screen
        name="Post_Complete"
        component={PostComplete}
      />
      <Stack.Screen
        name="Preview_Product"
        component={PreviewProduct}
      />
    </Stack.Navigator>
  );
};

export default PostNavigator;