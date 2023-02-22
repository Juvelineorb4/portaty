import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotNavigator from "./ForgotNavigator";
import RegisterNavigator from "./RegisterNavigator";
import Login from "@/screens/Authentication/Login";


const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Login`}>
      <Stack.Screen
        name={"Login"}
        component={Login}
        initialParams={{
          HOME: "Home",
        }}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"Register_App"}
        component={RegisterNavigator}
        options={{
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name={"Forgot_App"}
        component={ForgotNavigator}
        options={{
          animation: 'slide_from_right'
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
