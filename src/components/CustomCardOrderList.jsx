import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import styles from "@/utils/styles/CustomCardList.module.css";
import { es } from "@/utils/constants/lenguage";
import { API, Storage } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as customProfile from "@/graphql/CustomQueries/Profile";
import { useNavigation } from "@react-navigation/native";

const CustomCardOrderList = ({data = {}, status}) => {
  const global = require("@/utils/styles/global.js");
  const [deleteCard, setDeleteCard] = useState(true);
  const [orderProduct, setOrderProduct] = useState({})
  const [productName, setProductName] = useState('')
  const [date, setDate] = useState('')
  const [keyImages, setKeyImages] = useState([]);
  const navigation = useNavigation()

  const fetchOrder = async () => {
    const orderDetail = await API.graphql({
      query: customProfile.getOrderDetail,
      variables: {
        id: data.items.items[0].orderID,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    const product = await API.graphql({
      query: customProfile.getADProductPrueba,
      variables: {
        id: orderDetail.data.getOrderDetail.items.items[0].item.product.productID,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setProductName(product.data.getADProduct.name)
    setOrderProduct(orderDetail.data.getOrderDetail.items.items[0].item.product)

    const date = new Date(orderDetail.data.getOrderDetail.items.items[0].item.product.createdAt);
    const formattedDate = date.toLocaleDateString('es-ES');
    setDate(formattedDate)
  }
  const getImages = async () => {
    try {
      Storage.list(`product/${orderProduct.code}/`, {
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

  useLayoutEffect(() => {
    getImages();
    fetchOrder()
  }, []);

  return deleteCard ? (
    <View style={[styles.container]}>
      <View style={styles.image}>
        <Image
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            alignSelf: "center",
          }}
          source={{ uri: keyImages[0]}}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 17,
          }}
        >
          <Image
            style={{
              width: 25,
              height: 25,
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("@/utils/images/departure.png")}
          />
          <Text style={[styles.available, global.topGray]}>{es.list.sell.card.available}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={[styles.name, global.topGray]}>{productName}</Text>
        <Text style={[styles.price, global.topGray]}>${orderProduct.price}.00</Text>

        <Text style={[styles.seller, global.topGray]}>
          {status === 'sell' ? `Vendido el ${date}` : `Comprado el ${date}`}
        </Text>

        <View style={styles.options}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewOrderList', {
              product: orderProduct,
              images: keyImages,
              data: date,
            })}
            style={styles.option}
          >
            <Image
              style={{
                width: 19,
                height: 19,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              source={require("@/utils/images/editcard.png")}
            />
            <Text style={[styles.textOption, global.topGray]}>{es.list.sell.card.details}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
    <View></View>
  );
};

export default CustomCardOrderList;
