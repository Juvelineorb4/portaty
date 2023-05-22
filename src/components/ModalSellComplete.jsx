import { View, Text, Pressable, Image, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { es } from "@/utils/constants/lenguage";
import styles from "@/utils/styles/ModalSellComplete.module.css";

const ModalSellComplete = ({onHandlePress}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const global = require("@/utils/styles/global.js");
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
      onPress={() => setModalVisible(!modalVisible)}
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
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={[{borderRadius: 500, width: 180, height: 180, alignItems: 'center', justifyContent: 'center', marginBottom: 10, borderWidth: 0.5, borderColor: '#404040' }]}>
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
                onHandlePress()
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
