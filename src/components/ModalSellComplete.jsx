import {
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { es } from "@/utils/constants/lenguage";
import styles from "@/utils/styles/ModalSellComplete.module.css";
// hooks
import usePayment from "@/hooks/usePayment";

// stripe
import {
  initPaymentSheet,
  presentPaymentSheet,
} from "@stripe/stripe-react-native";
// amplify
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { useNavigation } from "@react-navigation/native";

const ModalSellComplete = ({ onHandlePress, item = {} }) => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  const [detail, setDetail] = useState({});
  const global = require("@/utils/styles/global.js");
  const [onCreatePaymentIntent] = usePayment();
  
  const onHandleBuy = async () => {
    const { attributes } = await Auth.currentAuthenticatedUser();
    // 1. Create a payment intent
    const response = await onCreatePaymentIntent({
      amount: Math.floor(item.product.price * 100),
      metadata: {
        id: attributes.sub,
        email: attributes.email,
        name: attributes.name,
      },
    });
    if (response.error) {
      Alert.alert("Ocurrio un Error");
      return;
    }
    const { amount, paymentID, secret } = response;
    // 2. Initialize the Payment sheet
    const initResponse = await initPaymentSheet({
      merchantDisplayName: "portaty.com",
      paymentIntentClientSecret: secret,
    });
    if (initResponse.error) {
      Alert.alert("Error");
      console.log("Init Error:", initResponse.error);
      return;
    }
    // 3. Present the Payment Sheet from Stripe
    const paymentResponse = await presentPaymentSheet();
    if (paymentResponse.error) {
      Alert.alert(
        `Error code: ${paymentResponse.error.code}`,
        paymentResponse.error.message
      );
      return;
    }

    // 4. If payment ok -> create the order
    onCreateOrder({ amount, paymentID, attributes });
  };

  const onCreateOrder = async ({ amount, paymentID, attributes }) => {

    const payment = await API.graphql({
      query: mutations.createPaymentStripe,
      variables: {
        input: {
          paymentStripeID: paymentID
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    const orderDetail = await API.graphql({
      query: mutations.createOrderDetail,
      variables: {
        input: {
          purchaseUserID: attributes.sub,
          salesUserID: item.product.customerID,
          total: item.product.price,
          shippingAddress: {
            country: item.address.country,
            postal: item.address.postal,
            city: item.address.city,
            address: item.address.address,
            phoneNumber: "",
          },
          paymentID: payment.data.createPaymentStripe.id
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    const orderItem = await API.graphql({
      query: mutations.createOrderItem,
      variables: {
        input: {
          orderID: orderDetail.data.createOrderDetail.id,
          itemID: item.product.status.id,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setDetail(orderDetail.data.createOrderDetail.id)
    setModalVisible(!modalVisible)
  };

  return (
    <TouchableOpacity
      style={[
        global.mainBgColor,
        {
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          padding: 15,
        },
      ]}
      onPress={() => onHandleBuy()}
    >
      <Text style={[global.white, { fontFamily: "medium", fontSize: 16 }]}>
        {es.checkout.button}
      </Text>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View
                style={[
                  {
                    borderRadius: 500,
                    width: 180,
                    height: 180,
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                    borderWidth: 0.5,
                    borderColor: "#404040",
                  },
                ]}
              >
                <Image
                  style={{
                    width: 150,
                    height: 150,
                    resizeMode: "contain",
                    alignSelf: "center",
                  }}
                  source={require("@/utils/images/successful.png")}
                />
              </View>

              <Text
                style={[
                  global.black,
                  {
                    fontFamily: "regular",
                    fontSize: 16,
                    textAlign: "center",
                    marginBottom: 10,
                  },
                ]}
              >
                {es.checkout.successful}
              </Text>
              <Text
                style={[
                  global.black,
                  {
                    fontFamily: "light",
                    fontSize: 14,
                    textAlign: "center",
                  },
                ]}
              >
                {es.checkout.subtitle}
              </Text>
            </View>

            <TouchableOpacity
              style={[
                global.mainBgColor,
                {
                  padding: 15,
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate('Order_Preview', {
                  product: item.product,
                  order: detail,
                  images: item.images
                })
              }}
            >
              <Text
                style={[global.white, { fontFamily: "medium", fontSize: 16 }]}
              >
                {es.checkout.order}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default ModalSellComplete;
