import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "@/screens/Authentication/Register";

const Stack = createNativeStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Register`}>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          animation: 'slide_from_right'
        }}
      />
    </Stack.Navigator>
  );
};

export default RegisterNavigator;
