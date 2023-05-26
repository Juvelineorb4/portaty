import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  calendarPermissions,
  cameraPermissions,
  contactPermissions,
  locationPermissions,
  notificationPermissions,
  permissionsStatus,
} from "@/atoms";
import * as Contacts from "expo-contacts";
import * as Calendar from "expo-calendar";
import * as Location from "expo-location";
import { Camera } from "expo-camera";
import styles from "@/utils/styles/Home.module.css";
import CustomCategory from "@/components/CustomCategory";
import CustomProductCard from "@/components/CustomProductCard";
import { productsHome } from "@/utils/constants/products";
import CustomFloatButton from "@/components/CustomFloatButton";
import { es } from "@/utils/constants/lenguage";
import { API, Storage } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as customHome from "@/graphql/CustomQueries/Home";
import * as mutations from "@/graphql/mutations";

const Home = ({ data, navigation }) => {
  // console.log(data[0]);
  const global = require("@/utils/styles/global.js");
  const [settings, setSettings] = useState(false);
  const [listCategories, setListCategories] = useState([]);
  const [listBrands, setListBrands] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [status, requestPermission] = Camera.useCameraPermissions();

  const [locationPermission, setLocationPermission] =
    useRecoilState(locationPermissions);
  const [contactPermission, setContactPermission] =
    useRecoilState(contactPermissions);
  const [calendarPermission, setCalendarPermission] =
    useRecoilState(calendarPermissions);
  const [cameraPermission, setCameraPermission] =
    useRecoilState(cameraPermissions);
  const checkPermissions = async () => {
    try {
      setLocationPermission(true);
      setContactPermission(true);
      setCalendarPermission(true);
      setCameraPermission(true);
    } catch (error) {
      setLocationPermission(null);
      setContactPermission(null);
      setCalendarPermission(null);
      setCameraPermission(null);
    }
  };

  const fetchData = async () => {
    try {
      const categories = await API.graphql({
        query: customHome.listADCategories,
        authMode: "AWS_IAM",
      });
      const brands = await API.graphql({
        query: customHome.listADBrands,
        authMode: "AWS_IAM",
      });
      const products = await API.graphql({
        query: customHome.listCustomerProductStatus,
        authMode: "AWS_IAM",
      });
      setListCategories(categories.data.listADCategories.items);
      setListBrands(brands.data.listADBrands.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      const contacts = await Contacts.requestPermissionsAsync();
      const calendar = await Calendar.requestCalendarPermissionsAsync();
      const locationMain = await Location.requestForegroundPermissionsAsync();
      const camera = await Camera.requestCameraPermissionsAsync();
      if (
        contacts.status === "granted" &&
        calendar.status === "granted" &&
        locationMain.status === "granted" &&
        camera.status === "granted"
      ) {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
        let position = await Location.getCurrentPositionAsync({});
        setLocation(position);
        /* Location */
        let text = "Cargando..";
        if (errorMsg) {
          text = errorMsg;
        } else if (location) {
          text = JSON.stringify(location);
          // console.log(text);
        }
        /* Contacts */
        if (data.length > 0) {
          const contact = data;
          // console.log(contact);
        }
        /* Calendars */
        // console.log({ calendars });
        /* Camera */
        // console.log("Done Camera");
        /* check */
        // checkPermissions()
      }
    })();
    fetchData();
  }, []);

  if (settings) Linking.openSettings();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      // nestedScrollEnabled
      style={[styles.container, global.bgWhite]}
    >
      <View style={styles.categoriesOne}>
        {listCategories.map((category, index) => (
          <CustomCategory
            title={category.name}
            icon={category.image}
            key={index}
            onPress={() =>
              navigation.navigate("Home_Search", {
                data: category.products.items,
              })
            }
          />
        ))}
      </View>
      <View style={styles.trendingPopular}>
        <View style={styles.textTrendingPopular}>
          <Text
            style={[styles.textMain, global.black, { letterSpacing: -0.5 }]}
          >
            {es.home.trending.product}
          </Text>
          <Text style={[styles.textAll, global.black, { letterSpacing: -0.5 }]}>
            {es.home.trending.all}
          </Text>
        </View>
        <View style={styles.productsTrendingPopular}>
          {listCategories[0] &&
            listCategories[0].products.items.map((item, index) => (
              <CustomProductCard product={item} key={index} />
            ))}
        </View>
      </View>
      <ScrollView horizontal style={{ flex: 1 }}>
        <View style={styles.categoriesBrand}>
          <View style={styles.sectionBrand}>
            {listBrands.map((brand, index) => (
              <View style={styles.bubbleBrand} key={index}>
                <CustomCategory
                  title={brand.name}
                  icon={brand.image}
                  onPress={() =>
                    navigation.navigate("Home_Search", {
                      data: brand.products.items,
                    })
                  }
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.trendingBrand}>
        <View style={styles.textTrendingBrand}>
          <Text
            style={[styles.textMain, global.black, { letterSpacing: -0.5 }]}
          >
            {es.home.trending.brand}
          </Text>
          <Text style={[styles.textAll, global.black, { letterSpacing: -0.5 }]}>
            {es.home.trending.all}
          </Text>
        </View>
        <View style={styles.productsTrendingPopular}>
          {listBrands[1] &&
            listBrands[1].products.items.map((item, index) => (
              <CustomProductCard product={item} key={index} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
