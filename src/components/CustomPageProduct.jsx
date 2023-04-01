import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "@/utils/styles/CustomProductPage.module.css";
import CustomButton from "./CustomButton";

const CustomPageProduct = ({ route, navigation }) => {
  const global = require("@/utils/styles/global.js");
  const { data } = route.params;
  return (
    <ScrollView style={[global.bgWhite, { flex: 1 }]}>
      <View style={styles.container}>
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
        </View>
        <View style={styles.content}>
          <View style={styles.containerTitle}>
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
          <View style={[styles.line, global.bgWhiteSmoke]} />

          <View style={styles.containerDetails}>
            <View style={styles.description}>
              <Text style={[styles.title, global.black]}>Description</Text>
              <Text style={[styles.descriptionText, global.midGray]}>
                {data.description
                  ? data.description
                  : "Lorem ipsum dolor sit amet consectetur adipiscing elit tempus lacus cras, nunc et convallis arcu in vivamus rhoncus lobortis ultrices, mollis aliquet at gravida eu euismod est tortor pharetra. Urna pretium eu placerat dis"}
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
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomPageProduct;
