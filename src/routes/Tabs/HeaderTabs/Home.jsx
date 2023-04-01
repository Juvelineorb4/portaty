import { View, Image, TouchableOpacity, TextInput } from "react-native";
import React from 'react'
import styles from "@/utils/styles/Header.module.css";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
// Recoil
import { useRecoilState } from 'recoil'
import { isFilterShow } from '@/atoms/index'
const Home = ({ version = 1, onSearchHandler }) => {
    const navigation = useNavigation();
    return (
        <>
            {version === 1 &&
                <View style={styles.contentProfile}>
                    <TouchableOpacity style={styles.userIcon} onPress={() => navigation.openDrawer()}>
                        <Image
                            style={{
                                width: "100%",
                                height: "100%",
                                resizeMode: "cover",
                                tintColor: "black"
                            }}
                            source={require("@/utils/images/profile_default.png")}
                        />
                    </TouchableOpacity>
                    <View style={styles.icon}>
                        <Image
                            style={{
                                width: 25,
                                height: 25,
                                resizeMode: "contain",
                                tintColor: "black"
                            }}
                            source={require("@/utils/images/notification_default.png")}
                        />
                    </View>
                </View>}
            <Search version={version} onSearchHandler={onSearchHandler} />
        </>
    )
}


const Search = ({ version, onSearchHandler }) => {
    const global = require("@/utils/styles/global.js");
    const navigation = useNavigation();
    const [isFilter, setFilter] = useRecoilState(isFilterShow)
    return (
        <View style={[styles.containerSearch]}>
            {
                version === 3 &&
                <TouchableOpacity style={styles.contentBack} onPress={() => navigation.goBack()}>
                    <Image
                        style={{
                            width: 20,
                            height: 15,
                            resizeMode: "cover",
                            tintColor: "black",
                            marginRight: 10
                        }}
                        source={require("@/utils/images/arrow_back.png")}
                    />
                </TouchableOpacity>
            }
            <TouchableOpacity style={[styles.contentSearch, global.bgWhiteSmoke]} activeOpacity={1}
                onPress={() => {
                    onSearchHandler();
                }}
            >
                {/* Icon */}
                <AntDesign name="search1" size={20} color="#9d9d9d" />
                {/* TextInput */}
                <View style={styles.contentInput}>
                    <TextInput
                        placeholder={"Search"}
                        style={styles.inputSearch}
                        editable={false}
                    />
                </View>
                {/* icon */}

                {
                    version === 3 &&
                    <TouchableOpacity
                        style={{
                            height: "100%",
                            paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                        onPress={() => setFilter(!isFilter)}
                    >
                        {
                            isFilter ?
                                <AntDesign name="downcircle" size={24} color="black" />
                                : <Ionicons name="options-outline" size={24} color="black" />
                        }

                    </TouchableOpacity>
                }
            </TouchableOpacity>
        </View >
    )
}

export default Home

