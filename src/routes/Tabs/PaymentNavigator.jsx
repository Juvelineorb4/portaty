import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Checkout from "@/screens/Favorites/Checkout";
import AddressEdit from "@/components/AddressEdit";
import LeftHeader from "./HeaderTabs/LeftHeader";
import OrderPreview from "@/components/OrderPreview";

const Stack = createNativeStackNavigator();

const PaymentNavigator = ({ route }) => {
  return (
    <Stack.Navigator id="Payment_Stack" initialRouteName={`Checkout`}>
      <Stack.Screen
        name="Checkout"
        initialParams={route.params}
        component={Checkout}
        options={{ header: (props) => <LeftHeader {...props} /> }}
      />
      <Stack.Screen
        name="Address_Edit"
        component={AddressEdit}
        options={{
          animation: "slide_from_right",
          header: (props) => <LeftHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="Order_Preview"
        component={OrderPreview}
        options={{
          animation: "slide_from_right",
          header: (props) => <LeftHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default PaymentNavigator;
