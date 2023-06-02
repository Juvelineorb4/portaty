import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import CustomCardOrder from "./CustomCardOrder";
import styles from "@/utils/styles/OrderPreview.module.css";
import CustomTimeOrderCard from "./CustomTimeOrderCard";
import { ScrollView } from "react-native-gesture-handler";
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

const OrderPreviewList = ({ route }) => {
  const global = require("@/utils/styles/global.js");
  const { product, images } = route.params;
  return (
    <ScrollView
      style={[global.bgWhite, { padding: 20, flex: 1, paddingTop: 10 }]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Pedido</Text>
      <CustomCardOrder
        item={product}
        image={images[0]}
        customer={product.customer.name}
      />
      <View style={[styles.line, global.bgWhiteSmoke]} />
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>Tiempo estimado</Text>
        <CustomTimeOrderCard
          content={{
            title: "Estándar",
            text: `Fecha estimada: Lunes 17 Abril`,
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
      <View style={{ marginBottom: 95 }}>
        <Text style={styles.title}>Total del pedido</Text>
        <View>
          <Text style={styles.numberOrder}>
            Precio del producto: ${product.price}.00
          </Text>
          <Text style={styles.numberOrder}>Impuestos: $10.00</Text>
          <Text style={styles.numberOrder}>Envio: $10.00</Text>
          <Text style={styles.numberOrder}>Comision: $10.00</Text>
          <View style={[styles.lineTotal, global.bgWhiteSmoke]} />
          <Text style={styles.numberTotal}>Total: $130.00</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderPreviewList;
