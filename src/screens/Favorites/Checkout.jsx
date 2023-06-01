import { View, Text} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/Checkout.module.css";
import CustomAddressCard from "@/components/CustomAddressCard";
import CustomCardList from "@/components/CustomCardList";
import { ScrollView } from "react-native-gesture-handler";
import CustomShippingCard from "@/components/CustomShippingCard";
import { es } from "@/utils/constants/lenguage";
import ModalSellComplete from "@/components/ModalSellComplete";
import { useRecoilState, useRecoilValue } from "recoil";
import { addressSelected, userAutenticated } from "@/atoms";
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import * as customQueries from "@/graphql/CustomQueries/ShippingAddress";

const Checkout = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const { data, images } = route.params
  const [address, setAddress] = useState({});
  const user = useRecoilValue(userAutenticated);
  const [activeAddress, setActiveAddress] = useRecoilState(addressSelected);
  console.log(address)
  /* Navegaciones */
  const onHandlePress = () => navigation.navigate("Address_Edit", {
    item: data
  });
  const fetchAddress = async () => {
    const addressItem = await API.graphql({
      query: customQueries.getAddress,
      variables: {
        userID: user.attributes.sub,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setAddress(addressItem.data.getCustomerShop.shippingAddress.items[activeAddress]);
  };
  useEffect(() => {
    fetchAddress();
  }, [activeAddress]);
  // const onHandlePreview = () => navigation.navigate("Order_Preview", { item: data});
  
  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      <View style={styles.section}>
        <Text style={styles.title}>{es.checkout.address.title}</Text>

        <CustomAddressCard
          content={{
            title: address ? address.title : 'Título',
            text: address ? address.address : 'Dirección',
          }}
          handlePress={onHandlePress}
        />
      </View>

      <View style={styles.section}>
        <View style={[styles.line, global.bgWhiteSmoke, { marginTop: 20}]} />

        <Text style={styles.title}>{es.checkout.item.title}</Text>

        <CustomCardList item={{
          product: data,
          images: images
        }} />
        {/* <CustomCardList /> */}
        {/* <CustomCardList /> */}
      </View>
      <View style={[styles.section, { marginBottom: 100 }]}>
        <View style={[styles.line, global.bgWhiteSmoke]} />

        <Text style={styles.title}>{es.checkout.shipping.title}</Text>
        <CustomShippingCard
          content={{
            title: "Estándar",
            text: "Fecha estimada: Lunes 17 Abril",
          }}
        />  
       <ModalSellComplete item={{
          product: data,
          images: images,
          address: address
        }}  />
      </View>
    </ScrollView>
  );
};

export default Checkout;
