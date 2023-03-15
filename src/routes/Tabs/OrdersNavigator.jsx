import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "@/screens/Orders/Orders";
import { useRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  const router = useRoute()
  useEffect(() => {
    console.log(router.name);
  }, []);
  return (
    <Stack.Navigator initialRouteName={`Orders`}>
      <Stack.Screen
        name="Orders"
        component={Orders}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
