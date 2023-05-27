<<<<<<< HEAD
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import React from "react";
=======
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
>>>>>>> af8975fa0dfb05f90e2c02790b544d746bd8db08
import styles from "@/utils/styles/CustomSellerProduct.module.css";
import CustomButton from "./CustomButton";
import { productsHome } from "@/utils/constants/products";
import CustomProductCard from "./CustomProductCard";

// amplify
<<<<<<< HEAD
import { API, graphqlOperation, Auth } from 'aws-amplify'
import * as queries from '@/graphql/queries'

=======
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

import { es } from "@/utils/constants/lenguage";

const CustomSellerProduct = ({ route, navigation }) => {
  const global = require("@/utils/styles/global.js");
  const { product } = route.params;
  const [keyImages, setKeyImages] = useState([]);
  const getImages = async () => {
    try {
      Storage.list(`product/${product.code}/`, {
        level: "protected",
        pageSize: 10,
      }).then(async (data) => {
        const promises = await Promise.all(
          data.results.map(async (image) => {
            const imageResult = await Storage.get(image.key, {
              level: "protected",
            });
            return imageResult;
          })
        );
        setKeyImages(promises);
      });
    } catch (error) {
      console.error(error);
    }
  };
  const onHandleNavigation = () =>
  navigation.navigate("Payment_Navigator", { data: product, images: keyImages });

  useLayoutEffect(() => {
    getImages();
  }, []);

  return (
    <ScrollView style={[global.bgWhite, { flex: 1, paddingTop: 10 }]}>
      <View style={styles.container}>
<<<<<<< HEAD
        <View style={[global.bgWhiteSmoke, styles.containerImages]}>
          <Image
            style={{
              width: 300,
              height: 300,
              resizeMode: "contain",
            }}
            source={
              data.images
                ? { uri: data.images }
                : require("@/utils/images/notimage.png")
            }
          />
=======
        <View style={styles.containerImages}>
          {!keyImages.length <= 0 && (
            <FlatList
              data={keyImages}
              keyExtractor={(__, index) => index.toString()}
              horizontal={true}
              renderItem={({ item, index }) => (
                <Image
                  key={index}
                  style={{
                    width: 300,
                    height: 250,
                    marginRight: 10,
                    resizeMode: "contain",
                    borderRadius: 8,
                  }}
                  source={{
                    uri: item,
                  }}
                />
              )}
            />
          )}
>>>>>>> af8975fa0dfb05f90e2c02790b544d746bd8db08
        </View>

        <View style={styles.content}>
          <View style={styles.containerTitle}>
<<<<<<< HEAD
            <Text style={[styles.title, global.black]}>
              {data.name} - {data.brand}
            </Text>
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
              source={require("@/utils/images/favorites-black.png")}
            />
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.containerSolds}>
              <Text>{data.solds ? data.solds : "7430"} sold |</Text>
            </View>
            <View style={styles.containerReviews}>
              <Image
                style={{
                  width: 13,
                  height: 13,
                  resizeMode: "contain",
                }}
                source={require("@/utils/images/star.png")}
              />
              <Text style={styles.textReviews}>
                {data.reviews ? data.reviews : "(4.9) (5389 reviews)"}
              </Text>
            </View>
          </View>
          <View style={styles.containerSeller}>
            <View style={styles.stars}>
              <Image
                style={{
                  width: 18,
                  height: 18,
                  resizeMode: "contain",
                }}
                source={require("@/utils/images/star.png")}
              />
              <Image
                style={{
                  width: 18,
                  height: 18,
                  resizeMode: "contain",
                  marginLeft: 5,
                }}
                source={require("@/utils/images/star.png")}
              />
              <Image
                style={{
                  width: 18,
                  height: 18,
                  resizeMode: "contain",
                  marginLeft: 5,
                }}
                source={require("@/utils/images/star.png")}
              />
              <Image
                style={{
                  width: 18,
                  height: 18,
                  resizeMode: "contain",
                  marginLeft: 5,
                }}
                source={require("@/utils/images/star.png")}
              />
              <Image
                style={{
                  width: 18,
                  height: 18,
                  resizeMode: "contain",
                  marginLeft: 5,
                }}
                source={require("@/utils/images/star.png")}
              />
            </View>
            <Text style={[styles.textSeller, global.black]}>
              - Christopher Alvarez
=======
            <Text style={[styles.titleProduct, global.black]}>
              {product.productFields.name}
>>>>>>> af8975fa0dfb05f90e2c02790b544d746bd8db08
            </Text>
          </View>
          <View style={[styles.line, global.bgWhiteSmoke]} />
          <View style={styles.containerOptions}>
            <CustomButton
              text={`Buy`}
              handlePress={onHandleBuy}
              textStyles={[styles.textBuy, global.white]}
              buttonStyles={[styles.buy, global.mainBgColor]}
            />
            <View style={styles.containerPrice}>
              <Text style={[styles.price, global.black]}>${data.maxPrice}</Text>
              <View style={styles.reportedContainer}>
                <Text style={[styles.reported, global.black]}>
                  Reported product
                </Text>
                <Image
                  style={{
                    width: 16,
                    height: 16,
                    resizeMode: "contain",
                  }}
                  source={require("@/utils/images/reported.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.containerDetails}>
            <View style={styles.description}>
              <Text style={[styles.title, global.black]}>
                {es.post.preview.description}
              </Text>
              <Text style={[styles.descriptionText, global.midGray]}>
                {product.description
                  ? product.description
                  : "Lorem ipsum dolor sit amet consectetur adipiscing elit tempus lacus cras, nunc et convallis arcu in vivamus rhoncus lobortis ultrices, mollis aliquet at gravida eu euismod est tortor pharetra. Urna pretium eu placerat dis"}
              </Text>
            </View>
            <View style={styles.price}>
              <Text style={[styles.title, global.black]}>Precio</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: 'center'
                }}
              >
                <Text style={[styles.priceText, global.midGray]}>
                  ${product.price}.00
                </Text>
                <TouchableOpacity
                  onPress={onHandleNavigation}
                  style={[
                    global.mainBgColor,
                    {
                      padding: 15,
                      width: 150,
                      borderRadius: 8,
                      opacity: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  ]}
                >
                  <Text
                    style={[
                      global.white,
                      { fontFamily: "medium", fontSize: 14 },
                    ]}
                  >
                    Comprar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.features}>
              <Text style={[styles.title, global.black]}>
                {es.post.preview.features}
              </Text>
              <View style={styles.bothFeatures}>
                <View style={styles.leftFeatures}>
                  {product.phoneFields.carrier ? (
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
                        {product.phoneFields.carrier}
                      </Text>
                    </View>
                  ) : (
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
                  )}
                  {product.phoneFields.imei ? (
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
                        {product.phoneFields.imei}
                      </Text>
                    </View>
                  ) : (
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
                  )}
                  {product.phoneFields.batery ? (
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
                        {product.phoneFields.batery}
                      </Text>
                    </View>
                  ) : (
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
                  )}
                </View>
                <View style={styles.rightFeatures}>
                  {product.phoneFields.model ? (
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
                        {product.phoneFields.model}
                      </Text>
                    </View>
                  ) : (
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
                  )}
                  {product.phoneFields.storage ? (
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
                        <Text style={styles.labelTextFeatureStorage}>
                          {es.post.preview.storage}
                        </Text>
                      </View>
                      <Text style={styles.textFeature}>
                        {product.phoneFields.storage}
                      </Text>
                    </View>
                  ) : (
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
                  )}
                </View>
              </View>
            </View>

            <View style={styles.abouts}>
              <Text style={[styles.title, global.black]}>
                {es.post.preview.about}
              </Text>
              <View style={styles.bothAbout}>
                <View style={styles.leftAbout}>
                  {product.condition ? (
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
                      <Text style={styles.textAbout}>{product.condition}</Text>
                    </View>
                  ) : (
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
                      <Text style={styles.textAbout}>
                        {es.post.preview.none}
                      </Text>
                    </View>
                  )}

                  {product.categoryFields.name ? (
                    <View style={styles.about}>
                      <View style={styles.labelAbout}>
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={{ uri: product.categoryFields.image }}
                        />
                        <Text style={styles.labelTextAbout}>
                          {es.post.preview.category}
                        </Text>
                      </View>
                      <Text style={styles.textAbout}>
                        {product.categoryFields.name}
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.about}>
                      <View style={styles.labelAbout}>
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={{ uri: product.categoryFields.image }}
                        />
                        <Text style={styles.labelTextAbout}>
                          {es.post.preview.category}
                        </Text>
                      </View>
                      <Text style={styles.textAbout}>
                        {es.post.preview.none}
                      </Text>
                    </View>
                  )}
                </View>
                <View style={styles.rightAbout}>
                  {product.code ? (
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
                      <Text style={{ fontSize: 10, fontFamily: "light" }}>
                        {product.code}
                      </Text>
                    </View>
                  ) : (
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
                      <Text style={styles.textAbout}>
                        {es.post.preview.none}
                      </Text>
                    </View>
                  )}
                  {product.brandFields.name ? (
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
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={{ uri: product.brandFields.image }}
                        />
                        <Text style={styles.labelTextAbout}>
                          {es.post.preview.brand}
                        </Text>
                      </View>
                      <Text style={styles.textAbout}>
                        {product.brandFields.name}
                      </Text>
                    </View>
                  ) : (
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
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={{ uri: product.brandFields.image }}
                        />
                        <Text style={styles.labelTextAbout}>
                          {es.post.preview.brand}
                        </Text>
                      </View>
                      <Text style={styles.textAbout}>
                        {es.post.preview.none}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.containerOthersProduct, { marginBottom: 60, flex: 1 }]}
      >
        <Text
          style={[styles.textOthersProducts, global.black, { marginTop: 5 }]}
        >
          Otros productos de {product.customer.name}
        </Text>
        {/* <ScrollView style={styles.productsList} horizontal>
          <CustomProductCard product={product} />
          <View style={{ marginLeft: 40 }}>
            <CustomProductCard product={product} />
          </View>
        </ScrollView> */}
        {/* <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            position: "relative",
            right: "-83%",
            top: "-10%",
          }}
          source={require("@/utils/images/arrow_right.png")}
        /> */}
      </View>
>>>>>>> af8975fa0dfb05f90e2c02790b544d746bd8db08
    </ScrollView>
  );
};

export default CustomSellerProduct;
