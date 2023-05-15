import {
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  AppState,
  Image,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

import styles from "@/utils/styles/NavSearch.module.css";

// Reoil
import { useRecoilState } from "recoil";
import { searchGlobal } from "@/atoms/index";

const CustomNavSearch = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");

  const inputRef = useRef(null);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  // const [isFocus, setIsFocus] = useState(false);
  const [search, setSearch] = useRecoilState(searchGlobal);

  // useEffect(() => {
  //     console.log("route", route)
  // }, [])

  useFocusEffect(
    React.useCallback(() => {
      // inputRef.current.focus();
      // setIsFocus(true);

      let prevStatus = undefined;
      if (prevStatus === undefined && AppState.currentState === "active")
        prevStatus = "active";
      const AppStateListener = AppState.addEventListener(
        "change",
        (nextState) => {
          if (prevStatus === "active" && nextState === "background") {
            prevStatus = nextState;
          }
        }
      );
      const KeyBoardHide = Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardVisible(false);
        if (prevStatus === "active") {
          navigation.goBack();
        } else if (
          prevStatus === "background" &&
          AppState.currentState === "active"
        ) {
          prevStatus = AppState.currentState;
        }
      });

      const KeyBoardShow = Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardVisible(true);
      });

      return () => {
        prevStatus = undefined;
        setKeyboardVisible(false);
        AppStateListener.remove();
        KeyBoardHide.remove();
        KeyBoardShow.remove();
      };
    }, [])
  );

  const onHandlePressEnter = () => {
    if (search !== "") {
      navigation.navigate(`Result_${route.params.mainRoute}`, {
        search: search,
      });
    }
  };

  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
        <TouchableOpacity
          style={styles.contentBack}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{
              width: 35,
              height: 40,
              resizeMode: "cover",
              tintColor: "black",
              marginRight: 10,
            }}
            source={require("@/utils/images/arrow_back.png")}
          />
        </TouchableOpacity>
      )}
      <View style={[styles.contentSearch, global.bgWhiteSoft]}>
        <TouchableOpacity activeOpacity={1}>
          <Image
            style={{
              width: 30,
              height: 30,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/search.png")}
          />
        </TouchableOpacity>

        <View style={styles.contentInput}>
          <TextInput
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={onHandlePressEnter}
            // autoFocus={true}
            placeholder={"Search"}
            style={styles.inputSearch}
            ref={inputRef}
            blurOnSubmit={false}
          />
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 27,
                height: 27,
                resizeMode: "contain",
              }}
              source={require("@/utils/images/filter.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomNavSearch;
