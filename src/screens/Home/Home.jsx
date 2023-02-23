import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({ data, navigation }) => {
  console.log(data);
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
          marginBottom: 10,
        }}
      >
        <Text>Salir</Text>
      </TouchableOpacity>
      {data.map((item) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.brand)}
          style={{
            backgroundColor: "blue",
            width: 100,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
          key={item.id}
        >
          <Text>{item.brand}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;
