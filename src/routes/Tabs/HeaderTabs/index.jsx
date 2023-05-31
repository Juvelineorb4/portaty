import { View } from "react-native";
import React, { useEffect } from "react";
import styles from "@/utils/styles/Header.module.css";
import CustomSearch from "@/components/CustomNavSearch";
import Header_Home from "./Home";
import Header_Profile from "./Profile";
import { useRoute, useNavigation } from "@react-navigation/native";

const HeaderIndex = ({ route, navigation, ...props }) => {
  const { getId } = navigation;

  // useEffect(() => {
  //     console.log("ID: ", getId())
  // }, [])

  const onSearchHandler = () => {
    navigation.navigate("SearchNavigator", {
      screen: "Search_Recent",
      params: {
        mainRoute: navigation.getParent(getId()).getState().routeNames[0],
      },
    });
    console.log(navigation.getParent(getId()).getState().routeNames[0])
  };

  return (
    <View>
      <View style={[styles.container]}>
        <View
          style={[
            styles.headerProfile,
            {
              shadowColor: "#00000",
              elevation: 1,
            },
          ]}
        >
          {headerSwitch(route, navigation, onSearchHandler)}
        </View>
      </View>
    </View>
  );
};

const headerSwitch = (route, navigation, onSearchHandler) => {
  switch (route.name) {
    case "Home":
      return <Header_Home onSearchHandler={onSearchHandler} />;
    case "Result_Home":
      return <Header_Home version={3} onSearchHandler={onSearchHandler} />;
    case "Profile":
      return <Header_Home onSearchHandler={onSearchHandler} />;
    case "Result_Profile":
      return <Header_Home version={3} onSearchHandler={onSearchHandler} />;
    case "Notifications":
      return <Header_Home onSearchHandler={onSearchHandler} />;
    case "Favorites":
      return <Header_Home onSearchHandler={onSearchHandler} />;
    case "Search_Recent":
      return <CustomSearch navigation={navigation} route={route} />;
  }
};

export default HeaderIndex;
