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
            width: 15,
            height: 15,
            resizeMode: "cover",
            tintColor: "#a3a3a3",
            marginRight: 10,
          }}
          source={require("@/utils/images/arrow_diagonal.png")}
        />
        <Text style={styles.text}>{item.title}</Text>
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
    fontFamily: 'light'
  },
  icon: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#a3a3a3",
    borderRadius: 10,
  },
  result: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
});
