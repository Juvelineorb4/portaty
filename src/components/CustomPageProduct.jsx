import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/CustomProductPage.module.css";
import CustomButton from "./CustomButton";
import { es } from "@/utils/constants/lenguage";
import { FlatList } from "react-native";
import CustomCardList from "./CustomCardList";
import CustomCardPage from "./CustomCardPage";
import { API, Storage } from "aws-amplify";
import * as customHome from "@/graphql/CustomQueries/Home";
import { useRecoilValue } from "recoil";
import { userAutenticated } from "@/atoms";

const CustomPageProduct = ({ route, navigation }) => {
  const global = require("@/utils/styles/global.js");
  const { data } = route.params;
  const user = useRecoilValue(userAutenticated);
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
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView
      style={[global.bgWhite, { flex: 1, paddingTop: 10 }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.containerImages}>
          <Image
            style={{
              width: 300,
              height: 250,
              marginRight: 10,
              resizeMode: "contain",
              borderRadius: 8,
            }}
            source={
              data.images[0]
                ? { uri: data.images[0] }
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
              <Text style={[styles.title, global.black]}>
                {es.post.preview.description}
              </Text>
              <Text style={[styles.descriptionText, global.midGray]}>
                {data.description
                  ? data.description
                  : "Lorem ipsum dolor sit amet consectetur adipiscing elit tempus lacus cras, nunc et convallis arcu in vivamus rhoncus lobortis ultrices, mollis aliquet at gravida eu euismod est tortor pharetra. Urna pretium eu placerat dis"}
                N/T
              </Text>
            </View>
            <View style={styles.features}>
              <Text style={[styles.title, global.black]}>
                {es.post.preview.features}
              </Text>
              <View style={styles.bothFeatures}>
                <View style={styles.leftFeatures}>
                  <View style={styles.feature}>
                    <View style={styles.labelFeature}>
                      <Image
                        style={{
                          width: 25,
                          height: 25,
                          resizeMode: "contain",
                        }}
                        source={require("@/utils/images/carrier.png")}
                      />
                      <Text style={styles.labelTextFeature}>
                        {es.post.preview.carrier}
                      </Text>
                    </View>
                    <Text style={styles.textFeature}>
                      {es.post.preview.none}
                    </Text>
                  </View>
                  <View style={styles.feature}>
                    <View
                      style={{
                        width: 50,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{
                          width: 25,
                          height: 25,
                          resizeMode: "contain",
                        }}
                        source={require("@/utils/images/imei.png")}
                      />
                      <Text style={styles.labelTextFeature}>
                        {es.post.preview.imei}
                      </Text>
                    </View>
                    <Text style={styles.textFeature}>
                      {es.post.preview.none}
                    </Text>
                  </View>

                  <View style={styles.feature}>
                    <View style={styles.labelFeature}>
                      <Image
                        style={{
                          width: 25,
                          height: 25,
                          resizeMode: "contain",
                        }}
                        source={require("@/utils/images/batery.png")}
                      />
                      <Text style={styles.labelTextFeature}>
                        {es.post.preview.batery}
                      </Text>
                    </View>
                    <Text style={styles.textFeature}>
                      {es.post.preview.none}
                    </Text>
                  </View>
                </View>
                <View style={styles.rightFeatures}>
                  <View style={styles.feature}>
                    <View style={styles.labelFeature}>
                      <Image
                        style={{
                          width: 25,
                          height: 25,
                          resizeMode: "contain",
                        }}
                        source={require("@/utils/images/model.png")}
                      />
                      <Text style={styles.labelTextFeature}>
                        {es.post.preview.model}
                      </Text>
                    </View>
                    <Text style={styles.textFeature}>
                      {es.post.preview.none}
                    </Text>
                  </View>

                  <View style={styles.feature}>
                    <View style={styles.labelFeature}>
                      <Image
                        style={{
                          width: 25,
                          height: 25,
                          resizeMode: "contain",
                        }}
                        source={require("@/utils/images/storage.png")}
                      />
                      <Text style={styles.labelTextFeature}>
                        {es.post.preview.storage}
                      </Text>
                    </View>
                    <Text style={styles.textFeature}>
                      {es.post.preview.none}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

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
                </View>
                <View style={styles.rightAbout}>
                  <View style={styles.about}>
                    <View
                      style={{
                        width: 40,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{
                          width: 25,
                          height: 25,
                          resizeMode: "contain",
                        }}
                        source={require("@/utils/images/id.png")}
                      />
                      <Text style={styles.labelTextAbout}>
                        {es.post.preview.id}
                      </Text>
                    </View>
                    <Text style={styles.textAbout}>{es.post.preview.none}</Text>
                  </View>
                  <View style={styles.about}>
                    <View
                      style={{
                        width: 40,
                        flexDirection: "column",
                        marginRight: 18,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.labelTextAbout}>
                        {es.post.preview.brand}
                      </Text>
                    </View>
                    <Text style={styles.textAbout}>{es.post.preview.none}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.lineBot, global.bgWhiteSmoke]} />
          </View>
          {items.map((item, index) =>
            item.status === "PUBLISHED" &&
            item.product.customerID !== user?.attributes?.sub ? (
              <CustomCardPage
                key={index}
                data={item.product}
                onHandlePress={() =>
                  navigation.navigate("SellerProduct", {
                    product: item.product,
                  })
                }
              />
            ) : item.status === "PUBLISHED" &&
              item.product.customerID === user?.attributes?.sub ? (
              <CustomCardPage
                key={index}
                data={item.product}
                owner
                onHandlePress={() =>
                  navigation.navigate("SellerProduct", {
                    product: item.product,
                  })
                }
              />
            ) : (
              ""
            )
          )}
          {items.length <= 0 ? (
            <Text
              style={{ fontFamily: "light", textAlign: "center", fontSize: 24 }}
            >
              N/T
            </Text>
          ) : (
            ""
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomPageProduct;
