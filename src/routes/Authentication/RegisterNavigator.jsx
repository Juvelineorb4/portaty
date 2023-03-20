import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "@/screens/Authentication/Register";
import Account from "@/screens/Authentication/Account";
import ConfirmAccount from "@/screens/Authentication/ConfirmAccount";

const Stack = createNativeStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Register`}>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="ConfirmAccount"
        component={ConfirmAccount}
        options={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      />
    </Stack.Navigator>
  );
};

export default RegisterNavigator;
