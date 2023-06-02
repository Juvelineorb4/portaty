import { View, Text, Image } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CustomCardOrder from "./CustomCardOrder";
import styles from "@/utils/styles/OrderPreview.module.css";
import CustomTimeOrderCard from "./CustomTimeOrderCard";
import { ScrollView } from "react-native-gesture-handler";
import { Auth, API, graphqlOperation } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as customHome from "@/graphql/CustomQueries/Home";
import * as mutations from "@/graphql/mutations";
import CustomButton from "./CustomButton";

const OrderPreview = ({ route, navigation }) => {
  const global = require("@/utils/styles/global.js");
  const { product, order, images } = route.params;
  // const [cardOrder, setCardOrder] = useState({})
  const [orderProduct, setOrderProduct] = useState("");
  const fetchOrder = async () => {
    const orderDetail = await API.graphql({
      query: customHome.getOrderDetailPreview,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        id: order,
      },
    });
    // setCardOrder(orderDetail.data.getOrderDetail.items.items[0].item.product)
    setOrderProduct(
      orderDetail.data.getOrderDetail.items.items[0].item.product
    );
  };
  useLayoutEffect(() => {
    fetchOrder();
  }, []);

  return (
    <ScrollView
      style={[global.bgWhite, { padding: 20, flex: 1, paddingTop: 40 }]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Pedido</Text>
      <CustomCardOrder
        item={orderProduct}
        image={images[0]}
        customer={orderProduct?.customer?.name}
      />
      <View style={[styles.line, global.bgWhiteSmoke]} />
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>Tiempo estimado</Text>
        <CustomTimeOrderCard
          content={{
            title: "Estándar",
            text: "Fecha estimada: Lunes 17 Abril",
          }}
        />
      </View>
      <View style={[styles.line, global.bgWhiteSmoke]} />
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>Seguimiento de tu pedido</Text>
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 5,
              borderWidth: 0.5,
              borderColor: "#404040",
              borderRadius: 12,
              padding: 10,
            },
          ]}
        >
          <View
            style={[
              {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                marginBottom: 10,
                resizeMode: "contain",
              }}
              source={require("@/utils/images/departure.png")}
            />
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
              source={
                true
                  ? require("@/utils/images/yes.png")
                  : require("@/utils/images/circle.png")
              }
            />
            <Text
              style={[global.topGray, { fontFamily: "light", fontSize: 12 }]}
            >
              Embalado
            </Text>
          </View>
          <Image
            style={{
              width: 100,
              height: 30,
              marginBottom: -45,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/lines.png")}
          />
          <View
            style={[
              {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                marginBottom: 10,
                resizeMode: "contain",
              }}
              source={require("@/utils/images/send.png")}
            />
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
              source={
                false
                  ? require("@/utils/images/yes.png")
                  : require("@/utils/images/circle.png")
              }
            />
            <Text
              style={[global.topGray, { fontFamily: "light", fontSize: 12 }]}
            >
              Enviado
            </Text>
          </View>
          <Image
            style={{
              width: 100,
              height: 30,
              marginBottom: -45,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/lines.png")}
          />
          <View
            style={[
              {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                marginBottom: 10,
                resizeMode: "contain",
              }}
              source={require("@/utils/images/arrival.png")}
            />
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
              source={
                false
                  ? require("@/utils/images/yes.png")
                  : require("@/utils/images/circle.png")
              }
            />
            <Text
              style={[global.topGray, { fontFamily: "light", fontSize: 12 }]}
            >
              Llegada
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.line, global.bgWhiteSmoke]} />
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>Total del pedido</Text>
        <View>
          <Text style={styles.numberOrder}>
            Precio del producto: ${orderProduct.price}.00
          </Text>
          <Text style={styles.numberOrder}>Impuestos: $10.00</Text>
          <Text style={styles.numberOrder}>Envio: $10.00</Text>
          <Text style={styles.numberOrder}>Comision: $10.00</Text>
          <View style={[styles.lineTotal, global.bgWhiteSmoke]} />
          <Text style={styles.numberTotal}>Total: $130.00</Text>
        </View>
      </View>
      <View style={{ marginBottom: 115 }}>
        <View>
          <CustomButton
            text={`Ir al inicio`}
            handlePress={() => navigation.replace("Home")}
            textStyles={[styles.textButton, global.white]}
            buttonStyles={[styles.button, global.mainBgColor]}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderPreview;
