import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/CustomProductPage.module.css";
import CustomButton from "./CustomButton";
import { es } from "@/utils/constants/lenguage";
import { FlatList } from "react-native";
import CustomCardList from "./CustomCardList";
import CustomCardPage from "./CustomCardPage";
import { API, Storage } from "aws-amplify";
import * as customHome from "@/graphql/CustomQueries/Home";
import { useRecoilState, useRecoilValue } from "recoil";
import { conditionItem, userAutenticated } from "@/atoms";
import CustomFilter from "./CustomFilter";
import CustomModal from "./CustomModal";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";

const CustomPageProduct = ({ route, navigation }) => {
  const { control, handleSubmit, watch } = useForm();
  const { initialPrice, endingPrice } = control;
  const hasUnsavedChanges = Boolean(initialPrice);
  const global = require("@/utils/styles/global.js");
  const { data } = route.params;
  const user = useRecoilValue(userAutenticated);
  const condition = useRecoilValue(conditionItem);
  const [items, setItems] = useState([]);
  const fetchData = async () => {
    try {
      const products = await API.graphql({
        query: customHome.listCustomerProductStatus,
        authMode: "AWS_IAM",
      });
      let listItems = [];
      products.data.listCustomerProductStatuses.items.map((item, index) => {
        if (item.product.productID === data.id) listItems.push(item);
      });
      setItems(listItems);
    } catch (error) {
      console.log(error);
    }
  };

  const backNavigation = () =>
    navigation.addListener("beforeRemove", (e) => {
      if (!hasUnsavedChanges) {
        // If we don't have unsaved changes, then we don't need to do anything
        return;
      }

      // Prevent default behavior of leaving the screen
      e.preventDefault();

      // Prompt the user before leaving the screen
      Alert.alert(
        "Discard changes?",
        "You have unsaved changes. Are you sure to discard them and leave the screen?",
        [
          { text: "Don't leave", style: "cancel", onPress: () => {} },
          {
            text: "Discard",
            style: "destructive",
            // If the user confirmed, then we dispatch the action we blocked earlier
            // This will continue the action that had triggered the removal of the screen
            onPress: () => navigation.dispatch(e.data.action),
          },
        ]
      );
    });

  const conditions = [
    {
      title: "NUEVO",
      id: "NEW",
      bgCondition: "#fff",
      icon: require("@/utils/images/new.png"),
    },
    {
      title: "PERFECTO",
      id: "PERFECT",
      bgCondition: "#fff",
      icon: require("@/utils/images/perfect.png"),
    },
    {
      title: "BUENO",
      id: "GOOD",
      bgCondition: "#fff",
      icon: require("@/utils/images/bueno.png"),
    },
    {
      title: "USADO",
      id: "USED",
      bgCondition: "#fff",
      icon: require("@/utils/images/used.png"),
    },
  ];
  useEffect(() => {
    fetchData();
    backNavigation();
    if (condition === undefined) return condition === "GOOD";
  }, [navigation, hasUnsavedChanges, condition]);

  return (
    <ScrollView
      style={[global.bgWhite, { flex: 1, paddingTop: 10 }]}
      showsVerticalScrollIndicator={false}
    >
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
            source={
              data.images[0]
                ? { uri: data.images[0] }
                : require("@/utils/images/notimage.png")
            }
          />
        </View>
        <View style={styles.content}>
          <View style={styles.containerTitle}>
            <Text style={[styles.titleProduct, global.black]}>{data.name}</Text>
          </View>
          <View style={[styles.line, global.bgWhiteSmoke]} />

          <View style={styles.containerDetails}>
            <View style={styles.description}>
              <Text style={[styles.title, global.black]}>
                {es.post.preview.description}
              </Text>
              <Text style={[styles.descriptionText, global.midGray]}>
                {data.description
                  ? data.description
                  : "Lorem ipsum dolor sit amet consectetur adipiscing elit tempus lacus cras, nunc et convallis arcu in vivamus rhoncus lobortis ultrices, mollis aliquet at gravida eu euismod est tortor pharetra. Urna pretium eu placerat dis"}
                N/T
              </Text>
            </View>
            <View>
              <Text
                style={[
                  {
                    fontFamily: "light",
                    fontSize: 16,
                    marginTop: 20,
                    // marginBottom: 25,
                  },
                  global.black,
                ]}
              >{`Filtrar lista`}</Text>
              {/* <Touchable style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 10}}> */}
              <View style={[styles.lineMid, global.bgWhiteSmoke]} />

              <CustomModal
                control={control}
                name={`condition`}
                placeholder={es.post.product.condition.placeholder}
                text={es.post.product.condition.title}
                modal={{
                  text: es.post.product.condition.modal,
                }}
                data={conditions}
                dataValue={""}
              />
              <Text
                style={[
                  {
                    fontFamily: "light",
                    fontSize: 14,
                    marginTop: 20,
                    marginBottom: 3,
                  },
                  global.black,
                ]}
              >
                Precio
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 15,
                  // justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "thinItalic",
                      marginRight: 5,
                      fontSize: 14,
                      alignSelf: "flex-end",
                    }}
                  >
                    Min:
                  </Text>
                  <View>
                    <CustomInput
                      control={control}
                      name={`initialPrice`}
                      placeholder={`0$`}
                      styled={{
                        text: styles.textInput,
                        label: [styles.labelInput],
                        error: styles.errorInput,
                        input: [styles.inputContainer],
                        placeholder: styles.placeholder,
                      }}
                      numeric={true}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "thinItalic",
                      marginRight: 5,
                      fontSize: 14,
                      alignSelf: "flex-end",
                    }}
                  >
                    Max:
                  </Text>
                  <View>
                    <CustomInput
                      control={control}
                      name={`endingPrice`}
                      placeholder={`1000$`}
                      styled={{
                        text: styles.textInput,
                        label: [styles.labelInput],
                        error: styles.errorInput,
                        input: [styles.inputContainer],
                        placeholder: styles.placeholder,
                      }}
                      numeric={true}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.textList}>
              <Text
                style={[
                  styles.textMain,
                  global.black,
                  { letterSpacing: -0.5 },
                  global.mainColor,
                ]}
              >
                {`Lista de productos disponibles`}
              </Text>
            </View>
            <View style={[styles.lineBot, global.bgWhiteSmoke]} />
          </View>
          {items.map((item, index) =>
            item.status === "PUBLISHED" &&
            item.product.condition === condition.id &&
            item.product.customerID !== user?.attributes?.sub ? (
              <CustomCardPage
                key={index}
                data={item.product}
                onHandlePress={() =>
                  navigation.navigate("SellerProduct", {
                    product: item.product,
                  })
                }
              />
            ) : item.status === "PUBLISHED" &&
              item.product.condition === condition.id &&
              item.product.customerID === user?.attributes?.sub ? (
              <CustomCardPage
                key={index}
                data={item.product}
                owner
                onHandlePress={() =>
                  navigation.navigate("SellerProduct", {
                    product: item.product,
                  })
                }
              />
            ) : (
              <Text
              key={index}
                style={{
                  fontFamily: "light",
                  textAlign: "center",
                  fontSize: 24,
                  marginBottom: 15
                }}
              >
                N/T
              </Text>
            )
          )}
          {items.length <= 0 ? (
            <Text
              style={{ fontFamily: "light", textAlign: "center", fontSize: 24, marginBottom: 15  }}
            >
              N/T
            </Text>
          ) : (
            ""
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomPageProduct;
