import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wallet from "@/screens/Wallet/Wallet";

const Stack = createNativeStackNavigator();

const WalletNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Wallet`}>
      <Stack.Screen
        name="Wallet"
        component={Wallet}
      />
    </Stack.Navigator>
  );
};

export default WalletNavigator;