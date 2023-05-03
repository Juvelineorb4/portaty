import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { Controller } from "react-hook-form";
import styles from "@/utils/styles/CustomModal.module.css";
import CustomCategory from "./CustomCategory";
import { useRecoilState } from "recoil";
import {
  brandItem,
  brandsId,
  categoriesId,
  categoryItem,
  conditionItem,
  modelItem,
  productItem,
  productsBrandId,
  productsId,
  storageItem,
  supplierItem,
} from "@/atoms";

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
  const global = require("@/utils/styles/global.js");

  /* Estaticos */
  const [selectId, setSelectId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  /* Guardar valor por item seleccionado */
  const [selectItemCategory, setSelectItemCategory] =
    useRecoilState(categoryItem);
  const [selectItemBrand, setSelectItemBrand] = useRecoilState(brandItem);
  const [selectItemProduct, setSelectItemProduct] = useRecoilState(productItem);
  const [selectItemCondition, setSelectItemCondition] =
    useRecoilState(conditionItem);
    const [selectItemModel, setSelectItemModel] = useRecoilState(modelItem);
    const [selectItemSupplier, setSelectItemSupplier] = useRecoilState(supplierItem);
    const [selectItemStorage, setSelectItemStorage] =
      useRecoilState(storageItem);


  /* Guardar ids de items seleccionados independientes */
  const [categoriesSelect, setCategoriesSelect] = useRecoilState(categoriesId);
  const [brandsSelect, setBrandsSelect] = useRecoilState(brandsId);
  const [productSelect, setProductSelect] = useRecoilState(productsId);
  const [productBrandSelect, setProductBrandSelect] =
    useRecoilState(productsBrandId);
    

  useEffect(() => {}, [productBrandSelect, selectItemProduct]);

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
                  <View style={both ? styles.textInputBoth : styles.textInput}>
                    <Text
                      style={[
                        global.inputColor,
                        {
                          textTransform: "capitalize",
                          marginRight: 3,
                          fontSize: 13,
                        },
                      ]}
                    >
                      {selectId ? selectItemCategory.name : placeholder}
                    </Text>
                    {selectId ? (
                      <View>
                        <Image
                          style={{
                            width: 18,
                            height: 18,
                            resizeMode: "contain",
                          }}
                          source={{ uri: selectItemCategory.image }}
                        />
                      </View>
                    ) : (
                      ""
                    )}
                  </View>

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
                            setSelectItemCategory(item);
                            setSelectId(item.id);
                            setCategoriesSelect(item.id);
                            setModalVisible(!modalVisible);
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
                        Your selected: {selectItemCategory.name || ""}
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
                  <View style={both ? styles.textInputBoth : styles.textInput}>
                    <Text
                      style={[
                        global.inputColor,
                        {
                          textTransform: "capitalize",
                          marginRight: 3,
                          fontSize: 13,
                        },
                      ]}
                    >
                      {selectItemBrand.aDCategoryId === categoriesSelect
                        ? selectItemBrand.aDBrand.name
                        : placeholder}
                    </Text>
                    {selectItemBrand.aDCategoryId === categoriesSelect ? (
                      <View>
                        <Image
                          style={{
                            width: 18,
                            height: 18,
                            resizeMode: "contain",
                          }}
                          source={{ uri: selectItemBrand.aDBrand.image }}
                        />
                      </View>
                    ) : (
                      ""
                    )}
                  </View>

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
                          title={item.title || item.aDBrand.name}
                          icon={item.aDBrand.image}
                          itemId={item.aDBrandId}
                          onPress={() => {
                            // if (brandsSelect !== productBrandSelect) setSelectItemProduct({});
                            setSelectItemBrand(item);
                            setSelectId(item.aDBrandId);
                            setBrandsSelect(item.aDBrandId);
                            setModalVisible(!modalVisible);
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
                        Your selected:{" "}
                        {selectItemBrand.aDCategoryId === categoriesSelect
                          ? selectItemBrand.aDBrand.name
                          : ""}
                      </Text>
                    </View>
                  </View>
                </View>
              </Modal>
            </>
          ) : dataValue === "products" ? (
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
                  <View style={both ? styles.textInputBoth : styles.textInput}>
                    <Text
                      style={[
                        global.inputColor,
                        {
                          textTransform: "capitalize",
                          marginRight: 3,
                          fontSize: 13,
                        },
                      ]}
                    >
                      {selectItemProduct.brandID === brandsSelect &&
                      selectItemProduct.categoryID === categoriesSelect &&
                      productBrandSelect === brandsSelect
                        ? selectItemProduct.name
                        : placeholder}
                    </Text>
                    {selectItemProduct.brandID === brandsSelect &&
                    selectItemProduct.categoryID === categoriesSelect &&
                    productBrandSelect === brandsSelect ? (
                      <View>
                        <Image
                          style={{
                            width: 18,
                            height: 18,
                            resizeMode: "contain",
                          }}
                          source={{ uri: selectItemProduct.images[0] }}
                        />
                      </View>
                    ) : (
                      ""
                    )}
                  </View>

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
                      renderItem={
                        ({ item }) => (
                          <CustomCategory
                            title={item.title || item.name}
                            icon={item.images[0]}
                            itemId={item.id}
                            onPress={() => {
                              setSelectItemProduct(item);
                              setSelectId(item.id);
                              setProductSelect(item.id);
                              setProductBrandSelect(item.brandID);
                              setModalVisible(!modalVisible);
                            }}
                            activeSelect={selectId}
                          />
                        )
                        // )
                      }
                      numColumns={3}
                      keyExtractor={(item, index) => index}
                      showsVerticalScrollIndicator={false}
                      columnWrapperStyle={{ justifyContent: "space-between" }}
                    />
                    <View style={styles.modalBot}>
                      <Text style={styles.modalTextSelect}>
                        Your selected: {selectItemProduct.name || ""}
                      </Text>
                    </View>
                  </View>
                </View>
              </Modal>
            </>
          ) : dataValue === "model" ? (
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
                  <View style={both ? styles.textInputBoth : styles.textInput}>
                    <Text
                      style={[
                        global.inputColor,
                        {
                          textTransform: "capitalize",
                          marginRight: 3,
                          fontSize: 13,
                        },
                      ]}
                    >
                      {selectItemModel.title
                        ? selectItemModel.title
                        : placeholder}
                    </Text>
                    {selectItemModel ? (
                      <View>
                        {/* <Image
                          style={{
                            width: 18,
                            height: 18,
                            resizeMode: "contain",
                          }}
                          source={{ uri: selectItemProduct.images[0] }}
                        /> */}
                      </View>
                    ) : (
                      ""
                    )}
                  </View>

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
                      renderItem={
                        ({ item }) => (
                          <CustomCategory
                            title={item.title || item.name}
                            // icon={item.images[0]}
                            itemId={item.id}
                            onPress={() => {
                              setSelectItemModel(item);
                              setSelectId(item.id);
                              setModalVisible(!modalVisible);
                            }}
                            activeSelect={selectId}
                          />
                        )
                        // )
                      }
                      numColumns={3}
                      keyExtractor={(item, index) => index}
                      showsVerticalScrollIndicator={false}
                      columnWrapperStyle={{ justifyContent: "space-between" }}
                    />
                    <View style={styles.modalBot}>
                      <Text style={styles.modalTextSelect}>
                        Your selected: {selectItemModel.title || ""}
                      </Text>
                    </View>
                  </View>
                </View>
              </Modal>
            </>
          ) : dataValue === "supplier" ? (
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
                  <View style={both ? styles.textInputBoth : styles.textInput}>
                    <Text
                      style={[
                        global.inputColor,
                        {
                          textTransform: "capitalize",
                          marginRight: 3,
                          fontSize: 13,
                        },
                      ]}
                    >
                      {selectItemSupplier.title
                        ? selectItemSupplier.title
                        : placeholder}
                    </Text>
                    {selectItemSupplier ? (
                      <View>
                        {/* <Image
                          style={{
                            width: 18,
                            height: 18,
                            resizeMode: "contain",
                          }}
                          source={{ uri: selectItemProduct.images[0] }}
                        /> */}
                      </View>
                    ) : (
                      ""
                    )}
                  </View>

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
                      renderItem={
                        ({ item }) => (
                          <CustomCategory
                            title={item.title || item.name}
                            // icon={item.images[0]}
                            itemId={item.id}
                            onPress={() => {
                              setSelectItemSupplier(item);
                              setSelectId(item.id);
                              setModalVisible(!modalVisible);
                            }}
                            activeSelect={selectId}
                          />
                        )
                        // )
                      }
                      numColumns={3}
                      keyExtractor={(item, index) => index}
                      showsVerticalScrollIndicator={false}
                      columnWrapperStyle={{ justifyContent: "space-between" }}
                    />
                    <View style={styles.modalBot}>
                      <Text style={styles.modalTextSelect}>
                        Your selected: {selectItemSupplier.title || ""}
                      </Text>
                    </View>
                  </View>
                </View>
              </Modal>
            </>
          ) : dataValue === "storage" ? (
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
                  <View style={both ? styles.textInputBoth : styles.textInput}>
                    <Text
                      style={[
                        global.inputColor,
                        {
                          textTransform: "capitalize",
                          marginRight: 3,
                          fontSize: 13,
                        },
                      ]}
                    >
                      {selectItemStorage.title
                        ? selectItemStorage.title
                        : placeholder}
                    </Text>
                    {selectItemStorage ? (
                      <View>
                        {/* <Image
                          style={{
                            width: 18,
                            height: 18,
                            resizeMode: "contain",
                          }}
                          source={{ uri: selectItemProduct.images[0] }}
                        /> */}
                      </View>
                    ) : (
                      ""
                    )}
                  </View>

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
                      renderItem={
                        ({ item }) => (
                          <CustomCategory
                            title={item.title || item.name}
                            // icon={item.images[0]}
                            itemId={item.id}
                            onPress={() => {
                              setSelectItemStorage(item);
                              setSelectId(item.id);
                              setModalVisible(!modalVisible);
                            }}
                            activeSelect={selectId}
                          />
                        )
                        // )
                      }
                      numColumns={3}
                      keyExtractor={(item, index) => index}
                      showsVerticalScrollIndicator={false}
                      columnWrapperStyle={{ justifyContent: "space-between" }}
                    />
                    <View style={styles.modalBot}>
                      <Text style={styles.modalTextSelect}>
                        Your selected: {selectItemStorage.title || ""}
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
                  <View style={both ? styles.textInputBoth : styles.textInput}>
                    <Text
                      style={[
                        global.inputColor,
                        {
                          textTransform: "capitalize",
                          marginRight: 3,
                          fontSize: 13,
                        },
                      ]}
                    >
                      {selectId ? selectItemCondition.title : placeholder}
                    </Text>
                    {selectId ? (
                      <View
                        style={{
                          backgroundColor: selectItemCondition.bgCondition,
                          height: 15,
                          width: 15,
                          borderRadius: 60,
                        }}
                      ></View>
                    ) : (
                      ""
                    )}
                  </View>

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
                          condition
                          bgCondition={item.bgCondition}
                          itemId={item.id}
                          onPress={() => {
                            setSelectId(item.id);
                            setSelectItemCondition(item);
                            setModalVisible(!modalVisible);
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
                        Your selected: {selectItemCondition.title || ""}
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
