import { View, TextInput, TouchableOpacity, Keyboard } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Controller } from "react-hook-form";
import { useNavigation, useIsFocused } from '@react-navigation/native';

import styles from "@/utils/styles/Search.module.css";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const CustomNavSearch = ({
    route,
}) => {
    const navigation = useNavigation()
    const isFocused = useIsFocused();
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [isFocus, setIsFocus] = useState(false)
    const inputRef = useRef(null);
    const global = require("@/utils/styles/global.js");


    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
                navigation.popToTop();
            }
        );

        // Registramos los listeners de los eventos de teclado
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [])


    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        } else {
            setIsFocus(false)
        }
    }, [isFocused, isFocus])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.contentSearch, global.bgWhiteSmoke]} onPress={() => {
                inputRef.current.focus();
            }} activeOpacity={1}>
                <AntDesign name="search1" size={20} color="#9d9d9d" />
                <View style={styles.contentInput}>
                    <TextInput
                        autoFocus={true}
                        onFocus={() => {
                            setIsFocus(true)
                        }}
                        onBlur={() => setIsFocus(false)}
                        placeholder={"Search"}
                        style={styles.inputSearch}
                        ref={inputRef}
                        blurOnSubmit={false}

                    />
                </View>
                <TouchableOpacity
                    style={{
                        height: "100%", paddingRight: 10,
                        flexDirection: "row",
                        alignItems: "center"
                    }}

                >
                    <Ionicons name="options-outline" size={24} color="black" />
                </TouchableOpacity>
            </TouchableOpacity>
        </View >
    );
};

export default CustomNavSearch

