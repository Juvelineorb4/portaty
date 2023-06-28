import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { es } from '@/utils/constants/lenguage'
import styles from "@/utils/styles/CustomFilter.module.css";

const CustomFilter = () => {
    const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={{ alignItems: "center", marginBottom: 0 }}>
        <Text>{`Condicion`}</Text>
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
          <Text style={[global.white, { fontFamily: "regular", fontSize: 12 }]}>
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
                  
                </View>
                <View style={{ flex: 1 }}>
                  
                </View>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>
  )
}

export default CustomFilter