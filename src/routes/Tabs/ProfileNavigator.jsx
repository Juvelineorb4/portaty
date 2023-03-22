import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "@/screens/Profile/Profile";
import Permissions from "@/screens/Profile/Permissions";
import { useRoute } from "@react-navigation/native";

// Header 
import Header from './HeaderTabs/index'
import Result from '@/screens/Search/Result'


const Stack = createNativeStackNavigator();
const ProfileNavigator = () => {
  const router = useRoute()
  useEffect(() => {
    console.log(router.name);
  }, []);
  return (
    <Stack.Navigator
      initialRouteName={`Profile`}
      id="Profile_Stack"
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Permissions"
        component={Permissions}
      />
      <Stack.Screen
        name="Result_Profile"
        component={Result}
        options={{
          animation: "slide_from_right",
          header: (props) => <Header {...props} />
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;