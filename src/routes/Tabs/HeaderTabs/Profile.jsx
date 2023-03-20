import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "@/utils/styles/Header.module.css";
const Profile = ({ onSearchHandler }) => {
    return (
        <View style={styles.contentProfile2}>
            {/* Logo */}
            <View style={styles.logo}>
                <Image
                    style={{
                        width: 100,
                        height: 40,
                        resizeMode: "cover",
                    }}
                    source={require("@/utils/images/portaty_name.png")}
                />
            </View>
            {/* extra */}
            <View style={styles.otherIcon}>
                {/* Notification */}
                <Image
                    style={{
                        width: 25,
                        height: 25,
                        resizeMode: "contain",
                        tintColor: "black"
                    }}
                    source={require("@/utils/images/notification_default.png")}
                />
                {/* Search */}
                <TouchableOpacity onPress={() => onSearchHandler()} >
                    < Image
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: "contain",
                            tintColor: "#000000"
                        }}
                        source={require("@/utils/images/search.png")}
                    />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Profile

