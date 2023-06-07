import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from './HeaderTabs/index'
import Notifications from "@/screens/Notifications/Notifications";
import Result from "@/screens/Search/Result";
import PaymentNavigator from "./PaymentNavigator";
import CustomSearchSellerProduct from "@/components/CustomSearchSellerProduct";
import LeftHeader from "./HeaderTabs/LeftHeader";

const Stack = createNativeStackNavigator();

const NotificationsNavigator = ({ route }) => {

  return (
    <Stack.Navigator
      id="Notification_Stack"
      initialRouteName={`Notifications`}
    >
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ header: (props) => <Header {...props} /> }}
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

export default NotificationsNavigator;
