import { View, Text, Image, Pressable, ScrollView, Modal, TouchableOpacity } from "react-native";
import styles from "@/utils/styles/AddressEdit.module.css";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import { es } from "@/utils/constants/lenguage";
import { useRecoilState, useRecoilValue } from "recoil";
// amplify
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import * as customQueries from "@/graphql/CustomQueries/ShippingAddress";
import * as customMutations from "@/graphql/CustomMutations/ShippingAddress";
import { addressSelected, userAutenticated } from "@/atoms";

const AddressEdit = ({ route }) => {
  const global = require("@/utils/styles/global.js");
  const user = useRecoilValue(userAutenticated);
  const [modalVisible, setModalVisible] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const { control, handleSubmit, resetField } = useForm();
  const [activeAddress, setActiveAddress] = useRecoilState(addressSelected);
  const { address, postal, city, country, title } = control;
  const onHandleAddress = async (data) => {
    const { address, postal, city, country, title } = data;
    const result = await API.graphql({
      query: customMutations.createCustomerShippingAddress,
      variables: {
        input: {
          customerID: user?.attributes?.sub,
          title: title.trim(),
          address: address.trim(),
          postal: postal.trim(),
          city: city.trim(),
          country: country.trim(),
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    const addressItem = await API.graphql({
      query: customQueries.getAddress,
      variables: {
        userID: user?.attributes?.sub,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setAddressList(addressItem.data.getCustomerShop.shippingAddress.items);
    setModalVisible(!modalVisible);
  };
  const fetchAddress = async () => {
    const addressItem = await API.graphql({
      query: customQueries.getAddress,
      variables: {
        userID: user?.attributes?.sub,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setAddressList(addressItem.data.getCustomerShop.shippingAddress.items);
  };
  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <ScrollView style={[global.bgWhite, { flex: 1, padding: 20 }]}  showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{es.address.title}</Text>
      <View style={[styles.line, global.bgWhiteSmoke]} />
      {addressList.map((item, index) => (
        <View
          key={index}
          style={{
            borderColor: "#404040",
            borderWidth: 0.4,
            padding: 20,
            borderRadius: 8,
            marginBottom: 20,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontFamily: "light", fontSize: 20 }}>
              {item.title}
            </Text>
            <Text style={{ fontFamily: "light", fontSize: 14 }}>
              {item.address}
            </Text>
          </View>
          <View>
            <Text style={{ fontFamily: "light", fontSize: 12 }}>
              {item.country}
            </Text>
            <Text style={{ fontFamily: "light", fontSize: 12 }}>
              {item.city}
            </Text>
            <Text style={{ fontFamily: "light", fontSize: 12 }}>
              {item.postal}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderColor: "#404040",
              borderWidth: 0.5,
              borderRadius: 50,
              width: 25,
              height: 25,
              alignSelf: "center",
              justifyContent: "center",
            }}
            onPress={() => setActiveAddress(index)}
          >
            <View
              style={[
                index === activeAddress ? global.mainBgColor : global.bgWhite,
                {
                  width: 20,
                  height: 20,
                  alignSelf: "center",
                  borderRadius: 50,
                },
              ]}
            ></View>
          </TouchableOpacity>
        </View>
      ))}
      <View style={{ alignItems: "center", marginBottom: 90 }}>
        <TouchableOpacity
          style={[
            global.mainBgColor,
            {
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              padding: 15,
            },
          ]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={[global.white, { fontFamily: "regular", fontSize: 16 }]}>
            {es.address.add}
          </Text>
          <Image
            style={{
              width: 40,
              height: 40,
              marginLeft: 5,
              resizeMode: "contain",
            }}
            source={require("@/utils/images/add.png")}
          />
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
                <View style={styles.modalTop}>
                  <Pressable
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: "contain",
                      }}
                      source={require("@/utils/images/arrow_back.png")}
                    />
                  </Pressable>
                  <Text style={styles.modalText}>{es.address.modal.back}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <CustomInput
                    control={control}
                    name={`title`}
                    placeholder={`Ingrese el título`}
                    styled={{
                      text: styles.textInputAddress,
                      label: [styles.labelInputAddress],
                      error: styles.errorInputAddress,
                      input: [styles.inputContainerAddress],
                      placeholder: styles.placeholderAddress,
                    }}
                    text={`Título`}
                    // numeric={true}
                    // errorPost={selectErrorPostProduct}e
                    // rules={{
                    //   required: "Required",
                    // }}
                  />
                  <CustomInput
                    control={control}
                    name={`address`}
                    placeholder={es.address.modal.line.placeholder}
                    styled={{
                      text: styles.textInputAddress,
                      label: [styles.labelInputAddress],
                      error: styles.errorInputAddress,
                      input: [styles.inputContainerAddress],
                      placeholder: styles.placeholderAddress,
                    }}
                    text={es.address.modal.line.label}
                    // numeric={true}
                    // errorPost={selectErrorPostProduct}e
                    // rules={{
                    //   required: "Required",
                    // }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <CustomInput
                      control={control}
                      name={`postal`}
                      placeholder={es.address.modal.postal.placeholder}
                      styled={{
                        text: styles.textInputPostal,
                        label: [styles.labelInputPostal],
                        error: styles.errorInputPostal,
                        input: [styles.inputContainerPostal],
                        placeholder: styles.placeholderPostal,
                      }}
                      text={es.address.modal.postal.label}
                      // numeric={true}
                      // errorPost={selectErrorPostProduct}e
                      // rules={{
                      //   required: "Required",
                      // }}
                    />
                    <CustomInput
                      control={control}
                      name={`city`}
                      placeholder={es.address.modal.city.placeholder}
                      styled={{
                        text: styles.textInputCity,
                        label: [styles.labelInputCity],
                        error: styles.errorInputCity,
                        input: [styles.inputContainerCity],
                        placeholder: styles.placeholderCity,
                      }}
                      text={es.address.modal.city.label}
                      // numeric={true}
                      // errorPost={selectErrorPostProduct}e
                      // rules={{
                      //   required: "Required",
                      // }}
                    />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <CustomInput
                      control={control}
                      name={`country`}
                      placeholder={es.address.modal.country.placeholder}
                      styled={{
                        text: styles.textInputCountry,
                        label: [styles.labelInputCountry],
                        error: styles.errorInputCountry,
                        input: [styles.inputContainerCountry],
                        placeholder: styles.placeholderCountry,
                      }}
                      text={es.address.modal.country.label}
                      // numeric={true}
                      // errorPost={selectErrorPostProduct}e
                      // rules={{
                      //   required: "Required",
                      // }}
                    />
                    <TouchableOpacity
                      style={[
                        global.mainBgColor,
                        {
                          borderRadius: 8,
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                          height: 49,
                          marginTop: 10,
                        },
                      ]}
                      onPress={handleSubmit(onHandleAddress)}
                    >
                      <Text
                        style={[
                          global.white,
                          { fontFamily: "medium", fontSize: 14 },
                        ]}
                      >
                        {es.address.modal.add}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddressEdit;
