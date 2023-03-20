import { View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import styles from "@/utils/styles/Header.module.css";
import CustomSearch from '@/components/CustomNavSearch'
import Header_Home from './Home'
import Header_Profile from './Profile'
const HeaderIndex = ({ navigation, ...props }) => {



    const onSearchHandler = () => {
        navigation.navigate("SearchNavigator", { screen: "Search_NotFound", params: { name: "SearchNavigator" } })
    }


    return (
        <View >
            <View style={[styles.container]}>
                <View style={[styles.headerProfile, {
                    shadowColor: "#000",
                    elevation: 5
                }]}>
                    {
                        headerSwitch(props.route.name, onSearchHandler)

                    }
                </View>
            </View >
        </View>
    )
}

const headerSwitch = (route, onSearchHandler) => {
    switch (route.includes("Search") ? "Search" : route) {
        case "Home":
            return < Header_Home onSearchHandler={onSearchHandler} />
        case "Profile":
            return <Header_Profile onSearchHandler={onSearchHandler} />
        case "Orders":
            return < Header_Home version={2} onSearchHandler={onSearchHandler} />
        case "Sell":
            return < Header_Home version={2} onSearchHandler={onSearchHandler} />
        case "Search":
            return <CustomSearch route={route} />
    }

}






export default HeaderIndex

