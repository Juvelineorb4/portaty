import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/CustomProductPage.module.css";
import CustomButton from "./CustomButton";
<<<<<<< HEAD
=======
import { es } from "@/utils/constants/lenguage";
import { FlatList } from "react-native";
import CustomCardList from "./CustomCardList";
import CustomCardPage from "./CustomCardPage";
import { API, Storage } from "aws-amplify";
import * as customHome from "@/graphql/CustomQueries/Home";

const CustomPageProduct = ({ route, navigation }) => {
  const global = require("@/utils/styles/global.js");
  const { data } = route.params;
<<<<<<< HEAD
=======
  const [items, setItems] = useState([]);
  const fetchData = async () => {
    try {
      const products = await API.graphql({
        query: customHome.listCustomerProductStatus,
        authMode: "AWS_IAM",
      });
      let listItems = [];
      products.data.listCustomerProductStatuses.items.map((item, index) => {
        if (item.product.productID === data.id) listItems.push(item);
      });
      setItems(listItems);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(data)
    fetchData();
  }, []);

>>>>>>> af8975fa0dfb05f90e2c02790b544d746bd8db08
  return (
    <ScrollView style={[global.bgWhite, { flex: 1, paddingTop: 10 }]}>
      <View style={styles.container}>
        <View style={[global.bgWhiteSmoke, styles.containerImages]}>
          <Image
            style={{
              width: 300,
              height: 300,
              resizeMode: "contain",
            }}
            source={
<<<<<<< HEAD
              data.images
                ? { uri: data.images }
=======
              data.images[0]
                ? { uri: data.images[0] }
>>>>>>> af8975fa0dfb05f90e2c02790b544d746bd8db08
                : require("@/utils/images/notimage.png")
            }
          />
        </View>
        <View style={styles.content}>
          <View style={styles.containerTitle}>
            <Text style={[styles.titleProduct, global.black]}>{data.name}</Text>
          </View>
          <View style={[styles.line, global.bgWhiteSmoke]} />

          <View style={styles.containerDetails}>
            <View style={styles.description}>
              <Text style={[styles.title, global.black]}>Description</Text>
              <Text style={[styles.descriptionText, global.midGray]}>
                {data.description
                  ? data.description
                  : "Lorem ipsum dolor sit amet consectetur adipiscing elit tempus lacus cras, nunc et convallis arcu in vivamus rhoncus lobortis ultrices, mollis aliquet at gravida eu euismod est tortor pharetra. Urna pretium eu placerat dis"}
<<<<<<< HEAD
=======
                N/T
>>>>>>> af8975fa0dfb05f90e2c02790b544d746bd8db08
              </Text>
            </View>
            <View style={styles.features}>
              <Text style={[styles.title, global.black]}>Features</Text>
              <View style={styles.featuresBubbles}>
                <View style={styles.feature}>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: "contain",
                    }}
                    source={require("@/utils/images/cpu.png")}
                  />
                  <Text style={styles.featureText}>A15 Bionic</Text>
                </View>
                <View style={styles.feature}>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: "contain",
                    }}
                    source={require("@/utils/images/storage.png")}
                  />
                  <Text style={styles.featureText}>128 GB</Text>
                </View>
                <View style={styles.feature}>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: "contain",
                    }}
                    source={require("@/utils/images/camera-feature.png")}
                  />
                  <Text style={styles.featureText}>48MP + 12MP</Text>
                </View>
                <View style={styles.feature}>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: "contain",
                    }}
                    source={require("@/utils/images/color.png")}
                  />
                  <Text style={styles.featureText}>Midnight</Text>
                </View>
              </View>
            </View>
<<<<<<< HEAD
          </View>
          <View style={styles.containerSellers}>
            <TouchableOpacity
              style={[styles.containerSeller, global.bgWhiteSmoke]}
              activeOpacity={1}
            >
              <View style={styles.topInfo}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={[styles.priceRef, global.midGray]}>
                  ${data.maxPrice} ref.
                </Text>
              </View>
              <View style={styles.mediumInfo}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    marginLeft: "7%",
                  }}
                  source={
                    data.images
                      ? { uri: data.images }
                      : require("@/utils/images/notimage.png")
                  }
                />
                <Text style={styles.price}>${data.maxPrice}</Text>
              </View>
              <View style={styles.botInfo}>
                <CustomButton
                  text={`Buy`}
                  handlePress={() =>
                    navigation.navigate("SellerProduct", { data: data })
                  }
                  textStyles={[styles.textBuy, global.white]}
                  buttonStyles={[styles.buy, global.mainBgColor]}
                />
                <View style={styles.seller}>
                  <Text style={{fontFamily: 'regular'}}>Christopher Alvarez</Text>
=======

            <View style={styles.abouts}>
              <Text style={[styles.title, global.black]}>
                {es.post.preview.about}
              </Text>
              <View style={styles.bothAbout}>
                <View style={styles.leftAbout}>
                  <View style={styles.about}>
                    <View style={styles.labelAbout}>
                      <Image
                        style={{
                          width: 25,
                          height: 25,
                          resizeMode: "contain",
                        }}
                        source={require("@/utils/images/question_black.png")}
                      />
                      <Text style={styles.labelTextAbout}>
                        {es.post.preview.condition}
                      </Text>
                    </View>
                    <Text style={styles.textAbout}>{es.post.preview.none}</Text>
                  </View>
                  <View style={styles.about}>
                    <View style={styles.labelAbout}>
                      <Text style={styles.labelTextAbout}>
                        {es.post.preview.category}
                      </Text>
                    </View>
                    <Text style={styles.textAbout}>{es.post.preview.none}</Text>
                  </View>
>>>>>>> af8975fa0dfb05f90e2c02790b544d746bd8db08
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.containerSeller, global.bgWhiteSmoke]}
              activeOpacity={1}
            >
              <View style={styles.topInfo}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={[styles.priceRef, global.midGray]}>
                  ${data.maxPrice} ref.
                </Text>
              </View>
              <View style={styles.mediumInfo}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    marginLeft: "7%",
                  }}
                  source={
                    data.images
                      ? { uri: data.images }
                      : require("@/utils/images/notimage.png")
                  }
                />
                <Text style={styles.price}>${data.maxPrice}</Text>
              </View>
              <View style={styles.botInfo}>
                <CustomButton
                  text={`Buy`}
                  handlePress={() =>
                    navigation.navigate("SellerProduct", { data: data })
                  }
                  textStyles={[styles.textBuy, global.white]}
                  buttonStyles={[styles.buy, global.mainBgColor]}
                />
                <View style={styles.seller}>
                  <Text style={{fontFamily: 'regular'}}>Luis Aranguren</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.containerSeller, global.bgWhiteSmoke]}
              activeOpacity={1}
            >
              <View style={styles.topInfo}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={[styles.priceRef, global.midGray]}>
                  ${data.maxPrice} ref.
                </Text>
              </View>
              <View style={styles.mediumInfo}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    marginLeft: "7%",
                  }}
                  source={
                    data.images
                      ? { uri: data.images }
                      : require("@/utils/images/notimage.png")
                  }
                />
                <Text style={styles.price}>${data.maxPrice}</Text>
              </View>
              <View style={styles.botInfo}>
                <CustomButton
                  text={`Buy`}
                  handlePress={() =>
                    navigation.navigate("SellerProduct", { data: data })
                  }
                  textStyles={[styles.textBuy, global.white]}
                  buttonStyles={[styles.buy, global.mainBgColor]}
                />
                <View style={styles.seller}>
                  <Text style={{fontFamily: 'regular'}}>Manolito</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
<<<<<<< HEAD
=======
          {items.map((item, index) => (
            <CustomCardPage
              key={index}
              data={item.product}
              onHandlePress={() =>
                navigation.navigate("SellerProduct", { product: item.product })
              }
            />
          ))}
>>>>>>> af8975fa0dfb05f90e2c02790b544d746bd8db08
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomPageProduct;
