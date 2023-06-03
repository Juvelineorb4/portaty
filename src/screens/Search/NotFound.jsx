import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

const NotFound = () => {
  const global = require("@/utils/styles/global.js");

  return (
    <View
      style={[
        global.bgWhite,
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          marginTop: 45,
        },
      ]}
    >
      <Image
        style={{
          width: 200,
          height: 200,
          resizeMode: "cover",
          marginBottom: 10,
        }}
        source={require("@/utils/images/not_found.png")}
      />
      {/* Titulo */}
      <View style={{ marginVertical: 5 }}>
        <Text style={[global.black, { fontSize: 20, fontFamily: "thin" }]}>
          Not Found
        </Text>
      </View>
      {/* Contenido */}
      <View style={{ paddingHorizontal: 15 }}>
        <Text
          style={[
            global.black,
            { textAlign: "center", fontSize: 15, fontFamily: "thin" },
          ]}
        >
          Sorry, the keyword you entered cannot be found, please check again or
          search with another keyword.
        </Text>
      </View>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({});
