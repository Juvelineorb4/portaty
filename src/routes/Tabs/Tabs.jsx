import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import OrdersNavigator from "./OrdersNavigator";
import WalletNavigator from "./WalletNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={`Home_Tab`}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={"Home_Tab"}
        component={HomeNavigator}
        key={`Home_Tab`}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name={"Orders_Tab"}
        key={`Orders_Tab`}
        component={OrdersNavigator}
        options={{
          tabBarLabel: "Orders",
        }}
      />
      <Tab.Screen
        name={"Wallet_Tab"}
        key={`Wallet_Tab`}
        component={WalletNavigator}
        options={{
          tabBarLabel: "Wallet",
        }}
      />
      <Tab.Screen
        name={"Profile_Tab"}
        key={`Profile_Tab`}
        component={ProfileNavigator}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
