import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={{
          backgroundColor: "gray",
          width: 100,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Forgot")}
        style={{
          backgroundColor: "orange",
          width: 100,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Forgot</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login