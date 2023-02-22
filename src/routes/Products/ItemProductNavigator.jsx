import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "@/screens/Home/Product";

const Stack = createNativeStackNavigator();

const ItemProductNavigator = () => {
  const [data, setData] = useState([]);

  function getData() {
    fetch(
      "https://2f2lpcsj7h.execute-api.us-east-1.amazonaws.com/dev/sendDefault",
      { method: "POST" }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <Stack.Navigator initialRouteName={`1`}>
      {data.map((item) => (
        <Stack.Screen
          name={item.id}
          component={Product}
          options={{
            headerShown: false,
          }}
          initialParams={item}
        />
      ))}
    </Stack.Navigator>
  );
};

export default ItemProductNavigator;
