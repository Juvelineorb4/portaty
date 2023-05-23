import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from './HeaderTabs/index'
import Orders from "@/screens/Orders/Orders";

const Stack = createNativeStackNavigator();

const OrdersNavigator = ({ route }) => {
  // const router = useRoute()
  useEffect(() => {
    console.log(route.name);
  }, []);
  return (
    <Stack.Navigator
      id="Orders_Stack"
      initialRouteName={`Orders`}
    >
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{ header: (props) => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
