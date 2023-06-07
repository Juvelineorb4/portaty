import { View, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "@/utils/styles/Header.module.css";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// Recoil
import { useRecoilState } from "recoil";
import { isFilterShow } from "@/atoms/index";
const Home = ({ version = 1, onSearchHandler }) => {
  const navigation = useNavigation();
  return (
    <>
      {version === 1 && (
        <View style={styles.contentProfile}>
          <TouchableOpacity onPress={() => ("")}>
            <Image
              style={{
                width: 40,
                height: 40,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/profile_default.png")}
            />
          </TouchableOpacity>

          {/* <View style={styles.icon}>
            <Image
              style={{
                width: 35,
                height: 35,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/notification_default.png")}
            />
            <TouchableOpacity
              style={styles.userIcon}
              onPress={() => navigation.openDrawer()}
            >
              <Image
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: "cover",
                }}
                source={require("@/utils/images/hearth_default.png")}
              />
            </TouchableOpacity>
          </View> */}
        </View>
      )}
      <Search version={version} onSearchHandler={onSearchHandler} />
    </>
  );
};

const Search = ({ version, onSearchHandler }) => {
  const global = require("@/utils/styles/global.js");
  const navigation = useNavigation();
  const [isFilter, setFilter] = useRecoilState(isFilterShow);
  return (
    <View style={[styles.containerSearch, {marginTop: version === 1 ? 0 : 20}]}>
      {version === 3 && (
        <TouchableOpacity
          style={[styles.contentBack]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{
              width: 35,
              height: 35,
              resizeMode: "cover",
              marginRight: 10,
            }}
            source={require("@/utils/images/arrow_back.png")}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={[styles.contentSearch, global.bgWhiteSoft]}
        activeOpacity={1}
        onPress={() => {
          onSearchHandler();
        }}
      >
        {/* Icon */}
        <Image
          style={{
            width: 30,
            height: 30,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/search.png")}
        />
        {/* TextInput */}
        <View style={styles.contentInput}>
          <TextInput
            placeholder={"Buscar"}
            style={styles.inputSearch}
            editable={false}
          />
          <TouchableOpacity>
            <Image
              style={{
                width: 27,
                height: 27,
                resizeMode: "cover",
              }}
              source={require("@/utils/images/filter.png")}
            />
          </TouchableOpacity>
        </View>
        {/* icon */}
{/* 
        {version === 3 && (
          <TouchableOpacity
            style={{
              height: "100%",
              // paddingHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => setFilter(!isFilter)}
          >
          </TouchableOpacity>
        )} */}
      </TouchableOpacity>
    </View>
  );
};

export default Home;
