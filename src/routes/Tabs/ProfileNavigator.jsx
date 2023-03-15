import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "@/screens/Profile/Profile";
import Permissions from "@/screens/Profile/Permissions";
import { useRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  const router = useRoute()
  useEffect(() => {
    console.log(router.name);
  }, []);
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