import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import styles from "@/utils/styles/PreviewProduct.module.css";
import { API, Storage } from "aws-amplify";
import CustomButton from "@/components/CustomButton";

const PreviewProduct = ({ data = {}, route }) => {
  const global = require("@/utils/styles/global.js");
  const [keyImages, setKeyImages] = useState([]);
  const { product } = route.params;
  const getImages = async () => {
    try {
      Storage.list(`product/${product.product.code}/`, {
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
        console.log("rango", promises.length);
        setKeyImages(promises);
      });
    } catch (error) {
      console.error(error);
    }
  };
  useLayoutEffect(() => {
    getImages();
  }, []);

  return (
    <ScrollView style={[global.bgWhite, { flex: 1 }]}>
      <View style={styles.container}>
        <View style={styles.containerImages}>
          {console.log(product)}
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
        </View>

        <View style={styles.content}>
          <View style={styles.containerTitle}>
            <Text style={[styles.titleProduct, global.black]}>
              {product.product.productFields.name}
            </Text>
          </View>
          <View style={[styles.line, global.bgWhiteSmoke]} />

          <View style={styles.containerDetails}>
            <View style={styles.description}>
              <Text style={[styles.title, global.black]}>Description</Text>
              <Text style={[styles.descriptionText, global.midGray]}>
                {product.product.description
                  ? product.product.description
                  : "Lorem ipsum dolor sit amet consectetur adipiscing elit tempus lacus cras, nunc et convallis arcu in vivamus rhoncus lobortis ultrices, mollis aliquet at gravida eu euismod est tortor pharetra. Urna pretium eu placerat dis"}
              </Text>
            </View>
            <View style={styles.features}>
              <Text style={[styles.title, global.black]}>Features</Text>
              <View style={styles.bothFeatures}>
                <View style={styles.leftFeatures}>
                  {product.product.phoneFields.carrier ? (
                    <View style={styles.feature}>
                      <View style={styles.labelFeature}>
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/carrier.png")}
                        />
                        <Text style={styles.labelTextFeature}>Carrier</Text>
                      </View>
                      <Text style={styles.textFeature}>
                        {product.product.phoneFields.carrier}
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.feature}>
                      <View style={styles.labelFeature}>
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/carrier.png")}
                        />
                        <Text style={styles.labelTextFeature}>Carrier</Text>
                      </View>
                      <Text style={styles.textFeature}>None</Text>
                    </View>
                  )}
                  {product.product.phoneFields.imei ? (
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
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/imei.png")}
                        />
                        <Text style={styles.labelTextFeature}>Imei</Text>
                      </View>
                      <Text style={styles.textFeature}>
                        {product.product.phoneFields.imei}
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
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/imei.png")}
                        />
                        <Text style={styles.labelTextFeature}>Imei</Text>
                      </View>
                      <Text style={styles.textFeature}>None</Text>
                    </View>
                  )}
                  {product.product.phoneFields.batery ? (
                    <View style={styles.feature}>
                      <View style={styles.labelFeature}>
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/batery.png")}
                        />
                        <Text style={styles.labelTextFeature}>Batery</Text>
                      </View>
                      <Text style={styles.textFeature}>
                        {product.product.phoneFields.batery}
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.feature}>
                      <View style={styles.labelFeature}>
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/batery.png")}
                        />
                        <Text style={styles.labelTextFeature}>Batery</Text>
                      </View>
                      <Text style={styles.textFeature}>None</Text>
                    </View>
                  )}
                </View>
                <View style={styles.rightFeatures}>
                  {product.product.phoneFields.model ? (
                    <View style={styles.feature}>
                      <View style={styles.labelFeature}>
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/model.png")}
                        />
                        <Text style={styles.labelTextFeature}>Model</Text>
                      </View>
                      <Text style={styles.textFeature}>
                        {product.product.phoneFields.model}
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.feature}>
                      <View style={styles.labelFeature}>
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/model.png")}
                        />
                        <Text style={styles.labelTextFeature}>Model</Text>
                      </View>
                      <Text style={styles.textFeature}>None</Text>
                    </View>
                  )}
                  {product.product.phoneFields.storage ? (
                    <View style={styles.feature}>
                      <View style={styles.labelFeature}>
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/storage.png")}
                        />
                        <Text style={styles.labelTextFeature}>Storage</Text>
                      </View>
                      <Text style={styles.textFeature}>
                        {product.product.phoneFields.storage}
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.feature}>
                      <View style={styles.labelFeature}>
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/storage.png")}
                        />
                        <Text style={styles.labelTextFeature}>Storage</Text>
                      </View>
                      <Text style={styles.textFeature}>None</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>

            <View style={styles.abouts}>
              <Text style={[styles.title, global.black]}>About</Text>
              <View style={styles.bothAbout}>
                <View style={styles.leftAbout}>
                  {product.product.condition ? (
                    <View style={styles.about}>
                      <View style={styles.labelAbout}>
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/condition.png")}
                        />
                        <Text style={styles.labelTextAbout}>Condition</Text>
                      </View>
                      <Text style={styles.textAbout}>
                        {product.product.condition}
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
                          source={require("@/utils/images/condition.png")}
                        />
                        <Text style={styles.labelTextAbout}>Condition</Text>
                      </View>
                      <Text style={styles.textAbout}>None</Text>
                    </View>
                  )}

                  {product.product.categoryFields.name ? (
                    <View style={styles.about}>
                      <View style={styles.labelAbout}>
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={{ uri: product.product.categoryFields.image }}
                        />
                        <Text style={styles.labelTextAbout}>Category</Text>
                      </View>
                      <Text style={styles.textAbout}>
                        {product.product.categoryFields.name}
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
                          source={{ uri: product.product.categoryFields.image }}
                        />
                        <Text style={styles.labelTextAbout}>Category</Text>
                      </View>
                      <Text style={styles.textAbout}>None</Text>
                    </View>
                  )}
                </View>
                <View style={styles.rightAbout}>
                  {product.product.code ? (
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
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/id.png")}
                        />
                        <Text style={styles.labelTextAbout}>ID</Text>
                      </View>
                      <Text style={{ fontSize: 10, fontFamily: "light" }}>
                        {product.product.code}
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
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/id.png")}
                        />
                        <Text style={styles.labelTextAbout}>ID</Text>
                      </View>
                      <Text style={styles.textAbout}>None</Text>
                    </View>
                  )}
                  {product.product.brandFields.name ? (
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
                          source={{ uri: product.product.brandFields.image }}
                        />
                        <Text style={styles.labelTextAbout}>Brand</Text>
                      </View>
                      <Text style={styles.textAbout}>
                        {product.product.brandFields.name}
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
                          source={{ uri: product.product.brandFields.image }}
                        />
                        <Text style={styles.labelTextAbout}>Brand</Text>
                      </View>
                      <Text style={styles.textAbout}>None</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
            <View style={[styles.lineBot, global.bgWhiteSmoke]} />
          </View>
          <View style={styles.containerStatus}>
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
              source={require("@/utils/images/status.png")}
            />
            <Text style={styles.textStatus}>
              Pending review, we will notify you
            </Text>
          </View>
          <View style={styles.containerEnd}>
            <View style={styles.containerPrice}>
              <Text style={[styles.titlePrice, global.black]}>Price:</Text>
              <Text style={[styles.price, global.mainColor]}>{product.product.price}$</Text>
            </View>
            <View>
              <CustomButton
                text={`Go home`}
                // handlePress={() =>
                //   navigation.navigate("Preview_Product", { product: product })
                // }
                textStyles={[styles.textButton, global.white]}
                buttonStyles={[styles.button, global.mainBgColor]}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PreviewProduct;