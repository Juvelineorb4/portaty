import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs/Tabs";
import LoginNavigator from "./Authentication/LoginNavigator";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const [data, setData] = useState([]);

  function getData() {
    fetch("https://2f2lpcsj7h.execute-api.us-east-1.amazonaws.com/dev/sendDefault", {method: 'POST'})
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setData(json);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  useEffect(() => {
    getData();
    console.log(data)
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={`Login`}>
        <Stack.Screen
          name={`Login_Welcome`}
          component={LoginNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={`Home`}
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
