import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home/Home";
import CustomSearch from "@/components/CustomSearch";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  function getData(url, method, save) {
    fetch(
      url,
      { method: method }
    )
      .then((response) => response.json())
      .then((json) => {
        if (save === 'categories') setCategories(json);
        if (save === 'brands') setBrands(json);
        if (save === 'products') setProducts(json);
      })
      .catch((error) => {
        console.error(JSON.stringify(error));
      });
  }

  useEffect(() => {
    getData("https://2f2lpcsj7h.execute-api.us-east-1.amazonaws.com/dev/getCategories", "GET", 'categories' );
    getData("https://2f2lpcsj7h.execute-api.us-east-1.amazonaws.com/dev/getBrands", "GET", 'brands');
    getData("https://2f2lpcsj7h.execute-api.us-east-1.amazonaws.com/dev/getProducts", "GET", 'products')
  }, []);
  return (
    <Stack.Navigator initialRouteName={`Home`}>
      <Stack.Screen name="Home">
        {(props) => <Home categories={categories} brands={brands} products={products} {...props} />}
      </Stack.Screen>
      {categories.map((item, index) => (
        <Stack.Screen
          name={`${item.title}`}
          component={CustomSearch}
          key={index}
          options={{
            animation: 'slide_from_right'
          }}
        />
      ))}
      {brands.map((item, index) => (
        <Stack.Screen
          name={`${item.title}`}
          component={CustomSearch}
          key={index}
          options={{
            animation: 'slide_from_right'
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
