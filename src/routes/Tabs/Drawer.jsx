import * as React from "react";
import { Button, TouchableOpacity, Text } from "react-native";
import {
  createDrawerNavigator,
  useDrawerProgress,
} from "@react-navigation/drawer";
import SearchNavigator from './SearchNavigator'
import Constants from "expo-constants";
import Tabs from './Tabs'
const Drawer = createDrawerNavigator();
// Documentation: https://reactnavigation.org/docs/drawer-navigator



const CustomDrawerContent = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Wallet_Tab")}
      style={{
        backgroundColor: "orange",
        width: "100%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: Constants.statusBarHeight + 10,
      }}
    >
      <Text>Pa donde me de la gana</Text>
    </TouchableOpacity>
  );
};

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Tabs"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
       
        name="Tabs"
        component={Tabs}
        options={{
          title: "None",
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
      <Drawer.Screen
        name="SearchNavigator"
        component={SearchNavigator}
        options={{
          title: "None",
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
