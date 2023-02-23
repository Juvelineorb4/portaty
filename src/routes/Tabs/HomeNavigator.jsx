import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home/Home";
import Product from "@/screens/Home/Product";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const [data, setData] = useState([]);

  function getData() {
    fetch(
      "https://2f2lpcsj7h.execute-api.us-east-1.amazonaws.com/dev/sendDefault",
      { method: "POST" }
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <Stack.Navigator initialRouteName={`Home`}>
      <Stack.Screen name="Home">
      {(props) => <Home data={data} {...props} />}
      </Stack.Screen>
      {data.map((item, index) => (
        <Stack.Screen
          name={`${item.brand}`}
          component={Product}
          key={index}
          initialParams={item}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
