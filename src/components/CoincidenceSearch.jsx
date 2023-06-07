import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CoincidenceSearch = ({ item, onHandler, isBrand = false, isProduct = false, brand = "" }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.result} onPress={() => {
        isBrand ? onHandler(item, `brand`) : isProduct ? onHandler(item, `product`) : console.log(`none`)
      }}>
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
        <Text style={[styles.text, isBrand && { fontFamily: 'bold' }]}>
          {item?.name}
          {isBrand ?
            <Text style={{ color: "lightgray", fontFamily: 'light', fontSize: 14, textTransform: 'uppercase' }}>  {`(VER TODOS)`}</Text>
            : isProduct &&
            <Text style={{ color: "lightgray", fontFamily: 'light', fontSize: 14, textTransform: 'uppercase' }}>  ({brand})</Text>
          }
        </Text>
      </TouchableOpacity>
    </View >
  );
};

export default CoincidenceSearch;

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
