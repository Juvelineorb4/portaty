import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from './HeaderTabs/index'
import Checkout from "@/screens/Favorites/Checkout";
import AddressEdit from "@/components/AddressEdit";
import LeftHeader from "./HeaderTabs/LeftHeader";
import OrderPreview from "@/components/OrderPreview";

const Stack = createNativeStackNavigator();

const NotificationsNavigator = ({ route }) => {
  // const router = useRoute()
  useEffect(() => {
    console.log(route.name);
  }, []);
  return (
    <Stack.Navigator
      id="Notification_Stack"
      initialRouteName={`Orders`}
    >
      <Stack.Screen
        name="Notifications"
        component={Checkout}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Address_Edit"
        component={AddressEdit}
        options={{ 
          animation: "slide_from_right",
          header: (props) => <LeftHeader {...props} /> }}
      />
      <Stack.Screen
        name="Order_Preview"
        component={OrderPreview}
        options={{ 
          animation: "slide_from_right",
          headerShown: false, }}
      />
    </Stack.Navigator>
  );
};

export default NotificationsNavigator;
