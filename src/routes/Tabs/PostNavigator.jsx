import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Sell from "@/screens/Sell/Sell";
import PostProduct from "@/screens/Post/PostProduct";
import PostComplete from "@/screens/Post/PostComplete";
import PreviewProduct from "@/screens/Post/PreviewProduct";
import LeftHeader from "./HeaderTabs/LeftHeader";


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
            header: (props) => <LeftHeader {...props} />,
          }}
      />
      <Stack.Screen
        name="Post_Complete"
        component={PostComplete}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Preview_Product"
        component={PreviewProduct}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PostNavigator;