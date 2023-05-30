import { View, Text, Image, Pressable } from "react-native";
import styles from "@/utils/styles/AddressEdit.module.css";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Modal } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import { es } from "@/utils/constants/lenguage";

const AddressCard = () => {
  const global = require("@/utils/styles/global.js");
  const [address, setAddress] = useState("one");
  const [modalVisible, setModalVisible] = useState(false);
  const [valueAddress, setValueAddress] = useState("");
  const { control, handleSubmit, watch } = useForm();
  return (
    <View style={[global.bgWhite, { flex: 1, padding: 20 }]}>
      <Text style={styles.title}>{es.address.title}</Text>
      <View style={[styles.line, global.bgWhiteSmoke]} />
      <View style={[styles.line, global.bgWhiteSmoke]} />
      <View style={{ alignItems: "center" }}>
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
                <View style={{flex: 1}}>
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
                  <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
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
                  <View style={{flexDirection: "row",alignItems: "center"}}>
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
                    <TouchableOpacity style={[global.mainBgColor, {borderRadius:8, flex: 1, justifyContent: "center", alignItems: "center", height: 49, marginTop: 10}]}>
                      <Text style={[global.white, {fontFamily: 'medium', fontSize: 14}]}>{es.address.modal.add}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressCard;

