import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sell from "@/screens/Sell/Sell";

const Stack = createNativeStackNavigator();

const SellNavigator = () => {
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