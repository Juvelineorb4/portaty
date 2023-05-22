import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import styles from "@/utils/styles/CustomSellerProduct.module.css";
import CustomButton from "./CustomButton";
import { productsHome } from "@/utils/constants/products";
import CustomProductCard from "./CustomProductCard";

// amplify
import { API, graphqlOperation, Auth } from "aws-amplify";
import * as queries from "@/graphql/queries";

// hooks
import usePayment from "@/hooks/usePayment";

// stripe
import {
  initPaymentSheet,
  presentPaymentSheet,
} from "@stripe/stripe-react-native";
import { es } from "@/utils/constants/lenguage";

const CustomSellerProduct = ({ route, navigation }) => {
  const global = require("@/utils/styles/global.js");
  const [onCreatePaymentIntent] = usePayment();

  // const { data } = route.params;

  const onHandleBuy = async () => {
    // 1. Create a payment intent
    const response = await onCreatePaymentIntent({
      amount: Math.floor(100 * 100),
    });
    if (response.error) {
      Alert.alert("Ocurrio un Error");
      return;
    }
    // 2. Initialize the Payment sheet
    const initResponse = await initPaymentSheet({
      merchantDisplayName: "portaty.com",
      paymentIntentClientSecret: response,
    });
    if (initResponse.error) {
      Alert.alert("Error");
      console.log("Init Error:", initResponse.error);
      return;
    }
    // 3. Present the Payment Sheet from Stripe
    const paymentResponse = await presentPaymentSheet();
    console.log(paymentResponse)
    if (paymentResponse.error) {
      Alert.alert(
        `Error code: ${paymentResponse.error.code}`,
        paymentResponse.error.message
      );
      return;
    }


    // 4. If payment ok -> create the order
    onCreateOrder();
  };

  const onCreateOrder = async () => {
    Alert.alert("El pedido ha sido enviando");
  };

  return (
    <ScrollView style={[global.bgWhite, { flex: 1 }]}>
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
            source={require("@/utils/images/notimage.png")}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.containerTitle}>
            <Text style={[styles.titleProduct, global.black]}>N/T</Text>
          </View>
          <View style={[styles.line, global.bgWhiteSmoke]} />

          <View style={styles.containerDetails}>
            <View style={styles.description}>
              <Text style={[styles.title, global.black]}>
                {es.post.preview.description}
              </Text>
              <Text style={[styles.descriptionText, global.midGray]}>
                {/* {data.product.description
                  ? data.product.description
                  : "Lorem ipsum dolor sit amet consectetur adipiscing elit tempus lacus cras, nunc et convallis arcu in vivamus rhoncus lobortis ultrices, mollis aliquet at gravida eu euismod est tortor pharetra. Urna pretium eu placerat dis"} */}
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
                        source={require("@/utils/images/question.png")}
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
        </View>
      </View>
      <View style={styles.containerOthersProduct}>
        <Text style={[styles.textOthersProducts, global.black]}>
          Otros productos de Christopher Alvarez
        </Text>
        <View style={styles.containerProducts}>
          <ScrollView style={styles.productsList} horizontal>
            {productsHome.map((item, index) => (
              <View key={index} style={styles.product}>
                <CustomProductCard product={item} />
              </View>
            ))}
          </ScrollView>
        </View>
        <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            position: 'relative',
            right: '-83%',
            top: '-10%'
          }}
          source={require("@/utils/images/arrow_right.png")}
        />
      </View>
    </ScrollView>
  );
};

export default CustomSellerProduct;
