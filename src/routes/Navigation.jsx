import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./Tabs/Drawer";
import LoginNavigator from "./Authentication/LoginNavigator";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={`Login`}>
        {!false && <Stack.Screen
          name={`Login_Welcome`}
          component={LoginNavigator}
          options={{
            headerShown: false,
          }}
        />}
        <Stack.Screen
          name={`Home`}
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
