import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { Controller } from "react-hook-form";
import styles from "@/utils/styles/CustomModal.module.css";
import CustomCategory from "./CustomCategory";
import { useRecoilState } from "recoil";
import { brandsId, categoriesId, productsId } from "@/atoms";

const CustomModal = ({
  text,
  placeholder,
  icon = {},
  name,
  both,
  control,
  rules,
  modal = {},
  data,
  dataValue,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectItem, setSelectItem] = useState("");
  const [selectId, setSelectId] = useState("");
  const [categoriesSelect, setCategoriesSelect] = useRecoilState(categoriesId);
  const [brandsSelect, setBrandsSelect] = useRecoilState(brandsId);
  const [productsSelect, setProductsSelect] = useRecoilState(productsId);
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={() => (
        <>
          {dataValue === "categories" ? (
            <>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={both ? styles.labelInputBoth : styles.labelInput}>
                  {text}
                </Text>
                <View
                  style={
                    both ? styles.inputContainerBoth : styles.inputContainer
                  }
                >
                  <Text style={both ? styles.textInputBoth : styles.textInput}>
                    {selectItem ? selectItem : placeholder}
                  </Text>
                  <Icon
                    name={icon.name}
                    color={icon.color}
                    size={icon.size}
                    type={icon.type}
                  />
                </View>
              </TouchableOpacity>
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
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/arrow-back.png")}
                        />
                      </Pressable>
                      <Text style={styles.modalText}>{modal.text}</Text>
                    </View>
                    <FlatList
                      data={data}
                      renderItem={({ item }) => (
                        <CustomCategory
                          title={item.title || item.name}
                          icon={item.image}
                          itemId={item.id}
                          onPress={() => {
                            setSelectItem(item.title || item.name);
                            setSelectId(item.id);
                            setCategoriesSelect(item.id);
                          }}
                          activeSelect={selectId}
                        />
                      )}
                      numColumns={3}
                      keyExtractor={(item, index) => index}
                      showsVerticalScrollIndicator={false}
                      columnWrapperStyle={{ justifyContent: "space-between" }}
                    />
                    <View style={styles.modalBot}>
                      <Text style={styles.modalTextSelect}>
                        Your selected: {selectItem}
                      </Text>
                    </View>
                  </View>
                </View>
              </Modal>
            </>
          ) : dataValue === "brands" ? (
            <>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={both ? styles.labelInputBoth : styles.labelInput}>
                  {text}
                </Text>
                <View
                  style={
                    both ? styles.inputContainerBoth : styles.inputContainer
                  }
                >
                  <Text style={both ? styles.textInputBoth : styles.textInput}>
                    {selectItem ? selectItem : placeholder}
                  </Text>
                  <Icon
                    name={icon.name}
                    color={icon.color}
                    size={icon.size}
                    type={icon.type}
                  />
                </View>
              </TouchableOpacity>
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
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/arrow-back.png")}
                        />
                      </Pressable>
                      <Text style={styles.modalText}>{modal.text}</Text>
                    </View>
                    <FlatList
                      data={data}
                      renderItem={({ item }) =>
                        // item.id === categoriesId && (
                          <CustomCategory
                            title={item.title || item.name}
                            icon={item.image}
                            itemId={item.id}
                            onPress={() => {
                              setSelectItem(item.title || item.name);
                              setSelectId(item.id);
                              setBrandsSelect(item.id);
                            }}
                            activeSelect={selectId}
                          />
                        // )
                      }
                      numColumns={3}
                      keyExtractor={(item, index) => index}
                      showsVerticalScrollIndicator={false}
                      columnWrapperStyle={{ justifyContent: "space-between" }}
                    />
                    <View style={styles.modalBot}>
                      <Text style={styles.modalTextSelect}>
                        Your selected: {selectItem}
                      </Text>
                    </View>
                  </View>
                </View>
              </Modal>
            </>
          ) : (
            <>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={both ? styles.labelInputBoth : styles.labelInput}>
                  {text}
                </Text>
                <View
                  style={
                    both ? styles.inputContainerBoth : styles.inputContainer
                  }
                >
                  <Text style={both ? styles.textInputBoth : styles.textInput}>
                    {selectItem ? selectItem : placeholder}
                  </Text>
                  <Icon
                    name={icon.name}
                    color={icon.color}
                    size={icon.size}
                    type={icon.type}
                  />
                </View>
              </TouchableOpacity>
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
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                          }}
                          source={require("@/utils/images/arrow-back.png")}
                        />
                      </Pressable>
                      <Text style={styles.modalText}>{modal.text}</Text>
                    </View>
                    <FlatList
                      data={data}
                      renderItem={({ item }) =>
                        // item.id === categoriesId && (
                          <CustomCategory
                            title={item.title || item.name}
                            icon={item.images[0]}
                            itemId={item.id}
                            onPress={() => {
                              setSelectItem(item.title || item.name);
                              setSelectId(item.id);
                            }}
                            activeSelect={selectId}
                          />
                        // )
                      }
                      numColumns={3}
                      keyExtractor={(item, index) => index}
                      showsVerticalScrollIndicator={false}
                      columnWrapperStyle={{ justifyContent: "space-between" }}
                    />
                    <View style={styles.modalBot}>
                      <Text style={styles.modalTextSelect}>
                        Your selected: {selectItem}
                      </Text>
                    </View>
                  </View>
                </View>
              </Modal>
            </>
          )}
        </>
      )}
    />
  );
};

export default CustomModal;
