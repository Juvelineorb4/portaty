import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import styles from "@/utils/styles/PreviewProduct.module.css";

const PreviewProduct = ({ data = {}, route, navigation }) => {
  const global = require("@/utils/styles/global.js");

  return (
    <ScrollView style={[global.bgWhite, { flex: 1 }]}>
      <View style={[styles.container, { paddingTop: 30}]}>
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
              </View>
            </View>

            <View style={styles.abouts}>
              <Text style={[styles.title, global.black]}>{es.post.preview.about}</Text>
              <View style={styles.bothAbout}>
                <View style={styles.leftAbout}>
                  {product.product.condition ? (
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
                        <Text style={styles.labelTextAbout}>{es.post.preview.condition}</Text>
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
                            width: 25,
                            height: 25,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/question_black.png")}
                        />
                        <Text style={styles.labelTextAbout}>{es.post.preview.condition}</Text>
                      </View>
                      <Text style={styles.textAbout}>{es.post.preview.none}</Text>
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
                        <Text style={styles.labelTextAbout}>{es.post.preview.category}</Text>
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
                        <Text style={styles.labelTextAbout}>{es.post.preview.category}</Text>
                      </View>
                      <Text style={styles.textAbout}>{es.post.preview.none}</Text>
                    </View>
                  )}
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
          <View style={styles.containerStatus}>
            <Image
              style={{
                width: 25,
                height: 25,
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
              <Text style={[styles.titlePriceButton, global.black]}>{es.post.preview.price}</Text>
              <Text style={[styles.priceButton, global.mainColor]}>{product.product.price}$</Text>
            </View>
            <View>
              <CustomButton
                text={es.post.preview.button}
                handlePress={() =>
                  navigation.replace("Profile")
                }
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
