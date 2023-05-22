import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const RecentSearch = ({ item, onHandler }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.result} onPress={() => onHandler(item)}>
        <Image
          style={{
            width: 25,
            height: 25,
            resizeMode: "cover",
            marginRight: 5,
          }}
          source={require("@/utils/images/arrow_diagonal.png")}
        />
        <Text style={styles.text}>{item.title}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <Image
          style={{
            width: 30,
            height: 30,
            resizeMode: "cover",
          }}
          source={require("@/utils/images/cancel.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RecentSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#efeded",
  },
  text: {
    color: "red",
    fontFamily: 'light'
  },
  icon: {
    // width: 30,
    // height: 30,
    // justifyContent: "center",
    // alignItems: "center",
    // borderWidth: 1,
    // borderColor: "#a3a3a3",
    // borderRadius: 10,
  },
  result: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
});
