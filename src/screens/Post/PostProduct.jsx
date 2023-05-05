import { View, Text, ScrollView, Image, Alert } from "react-native";
import styles from "@/utils/styles/PostProduct.module.css";
import React, { useEffect, useState } from "react";
import CustomInput from "@/components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";
import * as ImagePicker from "expo-image-picker";
// amplify
import { API, Storage } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  brandsId,
  categoriesId,
  listBrands,
  listProducts,
  productsId,
  listCategories,
  imagesPost,
  categoryItem,
  brandItem,
  productItem,
  conditionItem,
  modelItem,
  supplierItem,
  storageItem,
  serialItem,
  customerId,
  blobsPost,
} from "@/atoms";
import { TouchableOpacity } from "react-native-gesture-handler";
const PostProduct = ({ navigation, route }) => {
  // console.log(route.params.userID)e
  const global = require("@/utils/styles/global.js");
  const { control, handleSubmit } = useForm();
  const [categoriesSelect, setCategoriesSelect] = useRecoilState(categoriesId);
  const [brandsSelect, setBrandsSelect] = useRecoilState(brandsId);
  const [productsSelect, setProductsSelect] = useRecoilState(productsId);
  const [dataCategories, setDataCategories] = useRecoilState(listCategories);
  const [dataBrands, setDataBrands] = useRecoilState(listBrands);
  const [dataProducts, setDataProducts] = useRecoilState(listProducts);
  const [selectItemCategory, setSelectItemCategory] =
    useRecoilState(categoryItem);
  const [selectItemBrand, setSelectItemBrand] = useRecoilState(brandItem);
  const [selectItemProduct, setSelectItemProduct] = useRecoilState(productItem);
  const [selectItemCondition, setSelectItemCondition] =
    useRecoilState(conditionItem);
  const [selectItemModel, setSelectItemModel] = useRecoilState(modelItem);
  const [selectItemSupplier, setSelectItemSupplier] =
    useRecoilState(supplierItem);
  const [selectItemStorage, setSelectItemStorage] = useRecoilState(storageItem);
  const [selectCustomerId, setSelectCustomerId] = useRecoilState(customerId);

  /* Images Picker */
  const [imagesPostSelect, setImagesPostSelect] = useRecoilState(imagesPost);
  const [blobImages, setBlobImages] = useRecoilState(blobsPost);
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    ImagePicker.getPendingResultAsync;
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });
    if (!result.canceled) {
      const { uri } = result.assets[0];
      const response = await fetch(uri);
      const blob = await response.blob();
      setBlobImages([...blobImages, blob]);
      setImagesPostSelect([...imagesPostSelect, result.assets[0].uri]);
      setImage(result.assets[0].uri);
    }
  };

  const onHandleSubmit = async (data) => {
    const { price, description, imei, serial } = data;

    /* Ramdon Code */
    const ramdonCode = `${selectItemCategory.abreviation}-${selectItemBrand.aDBrand.abreviation
      }-${Math.floor(100000 + Math.random() * 900000)}`;

    const resultCode = await API.graphql({
      query: queries.listCustomerProducts,
      variables: {
        filter: {
          code: {
            eq: ramdonCode,
          },
        },
      },
    });

    const dataItem = {
      customerID: selectCustomerId,
      categoryID: selectItemCategory.id,
      categoryFields: {
        name: selectItemCategory.name,
        image: selectItemCategory.image,
        abreviation: selectItemCategory.abreviation,
      },
      brandID: selectItemBrand.aDBrandId,
      brandFields: {
        name: selectItemBrand.aDBrand.name,
        image: selectItemBrand.aDBrand.image,
        abreviation: selectItemBrand.aDBrand.abreviation,
      },
      productID: selectItemProduct.id,
      productFields: {
        name: selectItemProduct.name,
        images: selectItemProduct.images[0],
      },
      price: price,
      description: description,
      condition: "GOOD",
      phoneFields: {
        imei: imei,
        carrier: selectItemSupplier,
        model: selectItemModel,
        storage: selectItemStorage,
        batery: "",
      },
      // laptoFields: {
      //   serial: serial,
      // },
      code: ramdonCode,
    };

    const resultData = await API.graphql({
      query: mutations.createCustomerProduct,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        input: {
          customerID: selectCustomerId,
          categoryID: selectItemCategory.id,
          categoryFields: {
            name: selectItemCategory.name,
            image: selectItemCategory.image,
            abreviation: selectItemCategory.abreviation,
          },
          brandID: selectItemBrand.aDBrandId,
          brandFields: {
            name: selectItemBrand.aDBrand.name,
            image: selectItemBrand.aDBrand.image,
            abreviation: selectItemBrand.aDBrand.abreviation,
          },
          productID: selectItemProduct.id,
          productFields: {
            name: selectItemProduct.name,
            images: selectItemProduct.images[0],
          },
          price: price,
          description: description,
          condition: "GOOD",
          phoneFields: {
            imei: imei,
            carrier: selectItemSupplier,
            model: selectItemModel,
            storage: selectItemStorage,
            batery: "",
          },
          // laptoFields: {
          //   serial: serial,
          // },
          code: ramdonCode,
        },
      },
    });
    const resultStatus = await API.graphql({
      query: mutations.createCustomerProductStatus,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        input: {
          productID: resultData.data.createCustomerProduct.id,
        },
      },
    });

    // const uploadImage = async () => {
    await Promise.all(blobImages.map((image, index) => (
      Storage.put(`product/${ramdonCode}/image-${index}.jpg`, image, {
        level: 'protected',
        contentType: 'image/jpeg',
      })
    )))
    console.log("Archivo Subidos")
    console.log(resultStatus)
    navigation.navigate("Post_Complete", { productPreview: resultStatus });
  };
  const fetchData = async () => {
    try {
      const categories = await API.graphql({
        query: queries.listADCategories,
        authMode: "AWS_IAM",
      });
      setDataCategories(categories.data.listADCategories.items);
      // console.log(categories.data.listADCategories.items)
    } catch (error) {
      console.error(error);
    }
  };
  const dataUpdate = () => {
    dataCategories.map((item) => {
      if (categoriesSelect === item.id) setDataBrands(item.brands.items);
      if (categoriesSelect === item.id) {
        item.products.items.map((product) => {
          if (brandsSelect === product.brandID) setDataProducts([product]);
        });
      }
    });
  };
  const conditions = [
    { title: "NEW", id: "new", bgCondition: "#35BF05" },
    { title: "PERFECT", id: "perfect", bgCondition: "#FFC700" },
    { title: "GOOD", id: "good", bgCondition: "#F60A0A" },
    { title: "USED", id: "used", bgCondition: "#F60A0A" },
  ];

  const models = [
    { title: "A1452", id: "model-1" },
    { title: "A3645", id: "model-2" },
    { title: "A5858", id: "model-3" },
  ];
  const suppliers = [
    { title: "AT&T", id: "supplier-1" },
    { title: "CLARO", id: "supplier-2" },
    { title: "MOVISTAR", id: "supplier-3" },
  ];

  const storages = [
    { title: "16GB", id: "storage-1" },
    { title: "32GB", id: "storage-2" },
    { title: "64GB", id: "storage-3" },
  ];

  useEffect(() => {
    fetchData();
    dataUpdate();
    console.log(JSON.stringify(blobImages));
  }, [
    imagesPostSelect,
    dataBrands,
    categoriesSelect,
    brandsSelect,
    productsSelect,
    blobImages,
  ]);

  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      <View style={styles.form}>
        <View style={styles.both}>
          <View>
            <CustomModal
              control={control}
              name={`category`}
              placeholder={"Select Category"}
              both={true}
              text={`Category`}
              icon={{
                name: "chevron-down",
                size: 24,
                color: "#1f1f1f",
                type: "MTI",
              }}
              modal={{
                text: "Select your type of category",
              }}
              data={dataCategories}
              dataValue={"categories"}
            />
          </View>
          <View>
            <CustomModal
              control={control}
              name={`brand`}
              placeholder={"Select Brand"}
              both={true}
              text={`Brand`}
              icon={{
                name: "chevron-down",
                size: 24,
                color: "#1f1f1f",
                type: "MTI",
              }}
              modal={{
                text: "Select your type of brand",
              }}
              data={dataBrands}
              dataValue={"brands"}
            />
          </View>
        </View>

        <View>
          <CustomModal
            control={control}
            name={`product`}
            placeholder={"Select Product"}
            text={`Product`}
            icon={{
              name: "chevron-down",
              size: 24,
              color: "#1f1f1f",
              type: "MTI",
            }}
            modal={{
              text: "Select your type of product",
            }}
            data={dataProducts}
            dataValue={"products"}
          />
        </View>
        <View style={styles.both}>
          <CustomModal
            control={control}
            name={`condition`}
            placeholder={"Select Condition"}
            both={true}
            text={`Condition`}
            icon={{
              name: "chevron-down",
              size: 24,
              color: "#1f1f1f",
              type: "MTI",
            }}
            modal={{
              text: "Select condition of your product",
            }}
            data={conditions}
            dataValue={""}
          />
          <View>
            <CustomInput
              control={control}
              name={`price`}
              placeholder={"Enter Price"}
              styled={{
                text: styles.textInput,
                label: [styles.labelInput, global.topGray],
                error: styles.errorInput,
                input: [styles.inputContainer, global.bgWhiteSoft],
                placeholder: styles.placeholder,
              }}
              text={`Price`}
              iconRight={{
                name: "dollar",
                size: 14,
                color: "#8c9199cb",
                type: "FA",
              }}
            />
          </View>
        </View>
        <CustomInput
          control={control}
          name={`description`}
          placeholder={"Write description about your product"}
          styled={{
            text: styles.textInputD,
            label: [styles.labelInputD, global.topGray],
            error: styles.errorInputD,
            input: [styles.inputContainerD, global.bgWhiteSoft],
            placeholder: styles.placeholder,
          }}
          text={`Description`}
          area={true}
          lines={6}
        />
        <View style={styles.imagesPicker}>
          <View style={styles.images}>
            {imagesPostSelect[0] ? (
              <View
                style={{
                  position: "relative",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    marginLeft: 0,
                  }}
                  source={require("@/utils/images/rectangle.png")}
                />
                <Image
                  style={{
                    width: 95,
                    height: 95,
                    resizeMode: "contain",
                    left: 6,
                    borderRadius: 8,
                    position: "absolute",
                  }}
                  source={{ uri: imagesPostSelect[0] }}
                />
              </View>
            ) : (
              <TouchableOpacity activeOpacity={1} onPress={pickImage}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    marginLeft: 10,
                  }}
                  source={require("@/utils/images/rectangle-add.png")}
                />
              </TouchableOpacity>
            )}
            {imagesPostSelect[1] ? (
              <View
                style={{
                  position: "relative",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    marginLeft: 10,
                  }}
                  source={require("@/utils/images/rectangle.png")}
                />
                <Image
                  style={{
                    width: 95,
                    height: 95,
                    resizeMode: "contain",
                    marginLeft: 5,
                    left: 6,
                    borderRadius: 8,
                    position: "absolute",
                  }}
                  source={{ uri: imagesPostSelect[1] }}
                />
              </View>
            ) : imagesPostSelect[0] ? (
              <TouchableOpacity activeOpacity={1} onPress={pickImage}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    marginLeft: 10,
                  }}
                  source={require("@/utils/images/rectangle-add.png")}
                />
              </TouchableOpacity>
            ) : (
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                  marginLeft: 10,
                }}
                source={require("@/utils/images/rectangle.png")}
              />
            )}
            {imagesPostSelect[2] ? (
              <View
                style={{
                  position: "relative",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    marginLeft: 10,
                  }}
                  source={require("@/utils/images/rectangle.png")}
                />
                <Image
                  style={{
                    width: 95,
                    height: 95,
                    resizeMode: "contain",
                    marginLeft: 5,
                    left: 6,
                    borderRadius: 8,
                    position: "absolute",
                  }}
                  source={{ uri: imagesPostSelect[2] }}
                />
              </View>
            ) : imagesPostSelect[1] && imagesPostSelect[0] ? (
              <TouchableOpacity activeOpacity={1} onPress={pickImage}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    marginLeft: 10,
                  }}
                  source={require("@/utils/images/rectangle-add.png")}
                />
              </TouchableOpacity>
            ) : (
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                  marginLeft: 10,
                }}
                source={require("@/utils/images/rectangle.png")}
              />
            )}
          </View>
          <TouchableOpacity
            style={styles.buttonImage}
            activeOpacity={1}
            onPress={pickImage}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                marginRight: 10,
              }}
              source={require("@/utils/images/picker.png")}
            />
            <Text style={styles.textButton}>Upload your images</Text>
          </TouchableOpacity>
        </View>
        {selectItemCategory.name === "phone" ? (
          <View>
            <View style={[styles.line, global.bgWhiteSmoke]} />
            <Text style={styles.othersText}>Otros campos de interes</Text>
            <View style={[styles.lineTwo, global.bgWhiteSmoke]} />
            <View style={styles.both}>
              <CustomModal
                control={control}
                name={`model`}
                placeholder={"Select Model"}
                both={true}
                text={`Model`}
                icon={{
                  name: "chevron-down",
                  size: 24,
                  color: "#1f1f1f",
                  type: "MTI",
                }}
                modal={{
                  text: "Select model of your phone",
                }}
                data={models}
                dataValue={"model"}
              />
              <CustomModal
                control={control}
                name={`supplier`}
                placeholder={"Select Supplier"}
                both={true}
                text={`Supplier`}
                icon={{
                  name: "chevron-down",
                  size: 24,
                  color: "#1f1f1f",
                  type: "MTI",
                }}
                modal={{
                  text: "Select supplier of your phone",
                }}
                data={suppliers}
                dataValue={"supplier"}
              />
            </View>
            <View style={styles.both}>
              <View>
                <CustomInput
                  control={control}
                  name={`imei`}
                  placeholder={"Enter IMEI"}
                  styled={{
                    text: styles.textInput,
                    label: [styles.labelInputIMEI, global.topGray],
                    error: styles.errorInput,
                    input: [styles.inputContainer, global.bgWhiteSoft],
                    placeholder: styles.placeholder,
                  }}
                  text={`IMEI`}
                />
              </View>
              <CustomModal
                control={control}
                name={`storage`}
                placeholder={"Select Storage"}
                both={true}
                text={`Storage`}
                icon={{
                  name: "chevron-down",
                  size: 24,
                  color: "#1f1f1f",
                  type: "MTI",
                }}
                modal={{
                  text: "Select storage of your phone",
                }}
                data={storages}
                dataValue={"storage"}
              />
            </View>
          </View>
        ) : selectItemCategory.name === "lapto" ? (
          <View>
            <View style={[styles.line, global.bgWhiteSmoke]} />
            <Text style={styles.othersText}>Otros campos de interes</Text>
            <View style={[styles.lineTwo, global.bgWhiteSmoke]} />
            <CustomInput
              control={control}
              name={`serial`}
              placeholder={"Write serial of your laptop"}
              styled={{
                text: styles.textInputD,
                label: [styles.labelInputD, global.topGray],
                error: styles.errorInputD,
                input: [styles.inputContainerD, global.bgWhiteSoft],
                placeholder: styles.placeholder,
              }}
              text={`Serial`}
            />
          </View>
        ) : (
          ""
        )}
        <CustomButton
          text={`Publish your product`}
          handlePress={handleSubmit(onHandleSubmit)}
          textStyles={[styles.textPublish, global.white]}
          buttonStyles={[styles.publish, global.mainBgColor]}
        />
      </View>
    </ScrollView>
  );
};

export default PostProduct;
