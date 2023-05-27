import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "@/screens/Profile/Profile";
import Permissions from "@/screens/Profile/Permissions";
import { useRoute } from "@react-navigation/native";

// Header
import Header from "./HeaderTabs/index";
import Result from "@/screens/Search/Result";
import PostNavigator from "./PostNavigator";
import LeftHeader from "./HeaderTabs/LeftHeader";
import ListProducts from "@/screens/Profile/ListProducts";
import ListOrders from "@/screens/Profile/ListOrders";
import CustomPageListProduct from "@/components/CustomPageListProduct";
import OrderPreview from "@/components/OrderPreview";
import Notifications from "@/screens/Notifications/Notifications";
import OrderPreviewList from "@/components/OrderPreviewList";

const Stack = createNativeStackNavigator();
const ProfileNavigator = () => {
  const router = useRoute();
  const [data, setData] = useState([]);

  function getData(url, method) {
    fetch(url, { method: method })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error(JSON.stringify(error));
      });
  }

  useEffect(() => {
    getData(
      "https://2f2lpcsj7h.execute-api.us-east-1.amazonaws.com/dev/getAll",
      "GET"
    );
  }, []);
  return (
    <Stack.Navigator initialRouteName={`Profile`} id="Profile_Stack">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Permissions"
        component={Permissions}
        options={{
          animation: "slide_from_right",
          header: (props) => <LeftHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="Result_Profile"
        component={Result}
        options={{
          animation: "slide_from_right",
          header: (props) => <Header {...props} />,
        }}
      />
      <Stack.Screen
        name="Post_Navigator"
        component={PostNavigator}
        options={{
          animation: "slide_from_right",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ListProducts"
        component={ListProducts}
        options={{
          animation: "slide_from_right",
          header: (props) => <LeftHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ListOrders"
        component={ListOrders}
        options={{
          animation: "slide_from_right",
          header: (props) => <LeftHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="EditListProduct"
        component={CustomPageListProduct}
        options={{
          animation: "slide_from_right",
          header: (props) => <LeftHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ViewOrderList"
        component={OrderPreviewList}
        options={{
          animation: "slide_from_right",
          header: (props) => <LeftHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
