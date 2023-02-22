import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login_Welcome")}
        style={{
          backgroundColor: "orange",
          width: 100,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Salir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
