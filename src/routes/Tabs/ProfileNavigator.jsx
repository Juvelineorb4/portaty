import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "@/screens/Profile/Profile";
import Permissions from "@/screens/Profile/Permissions";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={`Profile`}>
      <Stack.Screen
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        name="Permissions"
        component={Permissions}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;