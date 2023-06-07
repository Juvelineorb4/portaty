import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home/Home";
import Result from "@/screens/Search/Result";
import CustomSearch from "@/components/CustomSearch";
import CustomPageProduct from "@/components/CustomPageProduct";
import CustomSellerProduct from "@/components/CustomSellerProduct";

// Header
import Header from "./HeaderTabs/index";

// Hooks

// graphql

// import LeftHeader from "./HeaderTabs/LeftHeader";
import PaymentNavigator from "./PaymentNavigator";
import LeftSearch from "./HeaderTabs/LeftSearch";
import CustomSearchSellerProduct from "@/components/CustomSearchSellerProduct";
import LeftHeader from "./HeaderTabs/LeftHeader";

const Stack = createNativeStackNavigator();
const HomeNavigator = ({ route, navigation }) => {
  return (
    <Stack.Navigator id="Home_Stack" initialRouteName={`Home`}>
      <Stack.Screen
        name="Home"
        options={{ header: (props) => <Header {...props} /> }}
      >
        {(props) => <Home {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name={`Home_Search`}
        component={CustomSearch}
        options={{
          animation: "slide_from_right",
          header: (props) => <LeftSearch {...props} />,
        }}
      />
      <Stack.Screen
        name={`PageProduct`}
        component={CustomPageProduct}
        options={{
          animation: "slide_from_right",
          header: (props) => <LeftSearch {...props} />,
        }}
      />
      <Stack.Screen
        name="SellerProduct"
        component={CustomSellerProduct}
        options={{
          animation: "slide_from_right",
          header: (props) => <LeftSearch {...props} />,
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
      <Stack.Screen
          name={`Payment_Navigator`}
          component={PaymentNavigator}
          options={{
            headerShown: false,
          }}
        />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
