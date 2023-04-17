import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";

import Header from './HeaderTabs/index'
import Cart from "@/screens/Cart/Cart";
import Checkout from "@/screens/Cart/Checkout";


const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  const router = useRoute()
  useEffect(() => {
    console.log(router.name);
  }, []);
  return (
    <Stack.Navigator
      id="Cart_Stack"
      initialRouteName={`Cart`}
    >
      <Stack.Screen
        name="Cart"
        component={Cart}
      // options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
      // options={{ header: (props) => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;