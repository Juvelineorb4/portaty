import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "@/screens/Authentication/Register";
import ConfirmAccount from "@/screens/Authentication/ConfirmAccount";
import LeftHeader from "../Tabs/HeaderTabs/LeftHeader";

const Stack = createNativeStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Register`}>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          header: (props) => <LeftHeader {...props} />,
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
