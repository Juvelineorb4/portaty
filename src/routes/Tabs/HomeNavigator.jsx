import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home/Home";
import CustomSearch from "@/components/CustomSearch";
import CustomPageProduct from "@/components/CustomPageProduct";
import CustomSellerProduct from "@/components/CustomSellerProduct";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const [data, setData] = useState([]);

  function getData(url, method) {
    fetch(url, { method: method })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error(JSON.stringify(error));
      });
  }

  useEffect(() => {
    getData(
      "https://2f2lpcsj7h.execute-api.us-east-1.amazonaws.com/dev/getAll",
      "GET"
    );
  }, []);
  return (
    <Stack.Navigator initialRouteName={`Home`}>
      <Stack.Screen name="Home">
        {(props) => <Home data={data} {...props} />}
      </Stack.Screen>
      {data.map((item, index) => (
        <Stack.Screen
          name={`${item.title}`}
          component={CustomSearch}
          key={index}
          options={{
            animation: "slide_from_right",
          }}
        />
      ))}
      {data.map((item) =>
        item.brands.map((brand, index) => {
          <Stack.Screen
            name={`${brand.title}_${index}`}
            component={CustomSearch}
            key={index}
            options={{
              animation: "slide_from_right",
            }}
          />;
        })
      )}
      {data.map((item) =>
        item.brands.map((brand) =>
          brand.products.map((product, index) => (
            <Stack.Screen
              name={`${product.brand}_${product.id}`}
              component={CustomPageProduct}
              key={index}
              options={{
                animation: "slide_from_right",
              }}
            />
          ))
        )
      )}
      <Stack.Screen
        name="SellerProduct"
        component={CustomSellerProduct}
        options={{
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
