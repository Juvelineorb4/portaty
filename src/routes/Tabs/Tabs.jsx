import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import OrdersNavigator from "./OrdersNavigator";
import WalletNavigator from "./WalletNavigator";
import ProfileNavigator from "./ProfileNavigator";
import SellNavigator from "./SellNavigator";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: "#ffffff",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={`Home_Tab`}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 50,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name={"Home_Tab"}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {focused ? (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "contain",
                  }}
                  source={require("@/utils/images/home-active.png")}
                />
              ) : (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "contain",
                  }}
                  source={require("@/utils/images/home.png")}
                />
              )}
              <Text
                style={{ fontSize: 11, color: focused ? "#1F1F1F" : "#656565" }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={"Orders_Tab"}
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {focused ? (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "contain",
                  }}
                  source={require("@/utils/images/orders-active.png")}
                />
              ) : (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "contain",
                  }}
                  source={require("@/utils/images/orders.png")}
                />
              )}
              <Text
                style={{ fontSize: 11, color: focused ? "#1F1F1F" : "#656565" }}
              >
                Orders
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={"Sell_Tab"}
        component={SellNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain",
              }}
              source={require("@/utils/images/plus.png")}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen
        name={"Wallet_Tab"}
        component={WalletNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {focused ? (
                <Image
                  style={{
                    width: 27,
                    height: 30,
                    resizeMode: "contain",
                  }}
                  source={require("@/utils/images/wallet-active.png")}
                />
              ) : (
                <Image
                  style={{
                    width: 28,
                    height: 30,
                    resizeMode: "contain",
                  }}
                  source={require("@/utils/images/wallet.png")}
                />
              )}
              <Text
                style={{ fontSize: 11, color: focused ? "#1F1F1F" : "#656565" }}
              >
                Wallet
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={"Profile_Tab"}
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {focused ? (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "contain",
                  }}
                  source={require("@/utils/images/profile-active.png")}
                />
              ) : (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "cover",
                  }}
                  source={require("@/utils/images/profile.png")}
                />
              )}
              <Text
                style={{ fontSize: 11, color: focused ? "#1F1F1F" : "#656565" }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7FF5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
