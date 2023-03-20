import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "@/screens/Orders/Orders";
import { useRoute } from "@react-navigation/native";

// header
import Header from './HeaderTabs/index'

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  const router = useRoute()
  useEffect(() => {
    console.log(router.name);
  }, []);
  return (
    <Stack.Navigator
      initialRouteName={`Orders`}
    >
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{ header: (props) => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
