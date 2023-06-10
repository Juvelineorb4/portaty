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
  const [keyImages, setKeyImages] = useState([]);
  const navigation = useNavigation()
  const { paths, customer, price, adproduct } = data.items.items[0].item.product
  const date = new Date(data.items.items[0].createdAt);
    const formattedDate = date.toLocaleDateString('es-ES');
  const getImages = async () => {
    try {
        const promises = await Promise.all(
          paths.map(async (image) => {
            const imageResult = await Storage.get(image, {
              level: "protected",
              identityId: customer.identityId
            });
            return imageResult;
          })
        );
        setKeyImages(promises);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    getImages();
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
        <Text style={[styles.name, global.topGray]}>{adproduct.name}</Text>
        <Text style={[styles.price, global.topGray]}>${price}.00</Text>

        <Text style={[styles.seller, global.topGray]}>
          {status === 'sell' ? `Vendido el ${formattedDate}` : `Comprado el ${formattedDate}`}
        </Text>

        <View style={styles.options}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewOrderList', {
              product: data.items.items[0].item.product,
              images: keyImages,
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
