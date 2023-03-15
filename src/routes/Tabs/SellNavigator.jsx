import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sell from "@/screens/Sell/Sell";
import { useRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const SellNavigator = () => {
  const router = useRoute()
  useEffect(() => {
    console.log(router.name);
  }, []);
  return (
    <Stack.Navigator initialRouteName={`Sell`}>
      <Stack.Screen
        name="Sell"
        component={Sell}
      />
    </Stack.Navigator>
  );
};

export default SellNavigator;