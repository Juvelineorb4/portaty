import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Forgot from "@/screens/Authentication/Forgot";
import ChangePassword from "@/screens/Authentication/ChangePassword";
import LeftHeader from "../Tabs/HeaderTabs/LeftHeader";

const Stack = createNativeStackNavigator();

const ForgotNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Forgot`}>
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={{
          header: (props) => <LeftHeader {...props} />,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ForgotNavigator;
