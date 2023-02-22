import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Forgot from "@/screens/Authentication/Forgot";

const Stack = createNativeStackNavigator();

const ForgotNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Forgot`}>
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={{
          animation: 'slide_from_right'
        }}
      />
    </Stack.Navigator>
  );
};

export default ForgotNavigator;
