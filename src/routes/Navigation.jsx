import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Drawer from "./Tabs/Drawer";
import LoginNavigator from "./Authentication/LoginNavigator";
const Stack = createNativeStackNavigator();
const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={`Login`}
      >
        <Stack.Screen
          name={`Login_Welcome`}
          component={LoginNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={`Home`}
          component={Drawer}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
