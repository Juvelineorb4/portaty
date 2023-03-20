import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home/Home";
import Product from "@/screens/Home/Product";
import SearchCategory from "@/screens/Search/SearchCategory";
import { useRoute } from "@react-navigation/native";

// Header
import Header from './HeaderTabs/index'

// Hooks
import useHeaderScroll from '@/hooks/useHeaderScroll'



const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  const { translateY, headerHeight, handleScroll, handleSnap } = useHeaderScroll({ headerHeight: 128 })

  const router = useRoute();
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
    console.log(router.name);
  }, []);
  return (
    <Stack.Navigator
      initialRouteName={`Home`}
    >
      <Stack.Screen
        name="Home"
        options={{ header: (props) => <Header {...props} /> }}
      >
        {(props) => <Home data={data} {...props} />}
      </Stack.Screen>
      {
        data.map((item, index) => (
          <Stack.Screen
            name={`${item.brand}`}
            component={Product}
            key={index}
            initialParams={item}
          />
        ))
      }
      <Stack.Screen name="SearchCategory" component={SearchCategory} />
    </Stack.Navigator >
  );
};

export default HomeNavigator;
