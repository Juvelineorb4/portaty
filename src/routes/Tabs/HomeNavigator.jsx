import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home/Home";
import Result from '@/screens/Search/Result'
import CustomSearch from "@/components/CustomSearch";
import CustomPageProduct from "@/components/CustomPageProduct";
import CustomSellerProduct from "@/components/CustomSellerProduct";
import { useNavigationState } from '@react-navigation/native';
// Header
import Header from './HeaderTabs/index'

// Hooks
import useHeaderScroll from '@/hooks/useHeaderScroll'



const Stack = createNativeStackNavigator();
const HomeNavigator = ({ route, navigation }) => {
  const state = useNavigationState(state => state)
  const { translateY, headerHeight, handleScroll, handleSnap } = useHeaderScroll({ headerHeight: 128 })
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
    // console.log(navigation.getParent("Home2"))
  }, []);
  return (
    <Stack.Navigator id="Home_Stack" initialRouteName={`Home`}>
      <Stack.Screen
        name="Home"
        options={{ header: (props) => <Header {...props} /> }}
      >
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
      <Stack.Screen
        name="Result_Home"
        component={Result}
        options={{
          animation: "slide_from_right",
          header: (props) => <Header {...props} />
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
