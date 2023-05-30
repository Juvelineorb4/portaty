import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from './HeaderTabs/index'
import Notifications from "@/screens/Notifications/Notifications";

const Stack = createNativeStackNavigator();

const NotificationsNavigator = ({ route }) => {

  return (
    <Stack.Navigator
      id="Notification_Stack"
      initialRouteName={`Notifications`}
    >
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ header: (props) => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

export default NotificationsNavigator;
