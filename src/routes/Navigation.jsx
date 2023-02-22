import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs/Tabs";
import LoginNavigator from "./Authentication/LoginNavigator";
import ItemProductNavigator from "./Products/ItemProductNavigator";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={`Login`}>
        <Stack.Screen
          name={`Login_Welcome`}
          component={LoginNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={`Home`}
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={`ItemProducts`}
          component={ItemProductNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
