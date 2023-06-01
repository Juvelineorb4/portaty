import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";
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
// import * as customPost from '@/graphql/CustomQueries/Post'
import * as mutations from "@/graphql/mutations";
import * as mutationsPost from "@/graphql/CustomMutations/Post"
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
  errorPostProduct,
} from "@/atoms";
import { TouchableOpacity } from "react-native-gesture-handler";
import { es } from "@/utils/constants/lenguage";
const PostProduct = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const { control, handleSubmit, watch } = useForm();
  // isLoading para animacion de publicacion de prodcuto
  const [isLoading, setIsLoading] = useState(false)
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
  const [selectErrorPostProduct, setSelectErrorPostProduct] =
    useRecoilState(errorPostProduct);
  /* Images Picker */
  const [imagesPostSelect, setImagesPostSelect] = useRecoilState(imagesPost);
  const [blobImages, setBlobImages] = useRecoilState(blobsPost);
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    ImagePicker.getPendingResultAsync;
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 6],
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
  const { price, description, imei, serial } = control;
  // const { price, description, imei, serial } = watch;

  const generateCode = () => {
    let code = undefined
    code = `${selectItemCategory.abreviation}-${selectItemBrand.aDBrand.abreviation
      }-${Math.floor(100000 + Math.random() * 900000)}`;
    return code
  }
  const verifyCode = async (ramdonCode) => {
    let continuar = true
    while (continuar) {
      const { data: { listCustomerProducts } } = await API.graphql({
        query: queries.listCustomerProducts,
        variables: {
          filter: {
            code: {
              eq: ramdonCode,
            },
          },
        },
      });
      if (!(listCustomerProducts.items.length > 0)) continuar = false
    }
    return continuar
  }

  const onHandleSubmit = async (data) => {
    const { price, description, imei, serial } = data;
    let ramdonCode = undefined
    // validar que nada este vacio
    if (price === undefined || description === undefined || selectItemBrand === undefined || selectItemCategory === undefined || selectItemProduct === undefined || selectItemCondition === undefined) return Alert.alert("Campos Vacios")
    setIsLoading(true)
    try {
      // 1. Generar codigo aleatorio
      ramdonCode = generateCode();
      if (ramdonCode === undefined) return () => {
        Alert.alert("Codigo Ramdon en Undefined")
        setIsLoading(false)
      }
      /* 
        2.1 Verificar que el codigo no exista
        2.2 IMPORTANTE: nota hacer un sorkField a code para buscar por codigo un producto
      */
      const response = await verifyCode(ramdonCode);
      if (response === true) return () => {
        Alert.alert("El codigo no se verifico correctamente")
        setIsLoading(false)
      }

      // Cargamos imagenes al storage
      const keys = await Promise.all(blobImages.map(async (image, index) => {
        const { key } = await Storage.put(`products/${ramdonCode}/image-${index}.jpg`, image, {
          level: "protected",
          contentType: "image/jpeg",
          metadata: {
            hola: "hola"
          },
          errorCallback: (error) => {
            console.log("Error al cargar: ", error)
          }
        });
        return key
      }))
      // Crear CusTomerProduct
      const { data: { createCustomerProduct } } = await API.graphql({
        query: mutationsPost.createPostCustomerProduct,
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
              imei: imei ? imei : "",
              carrier: selectItemSupplier.title ? selectItemSupplier.title : "",
              model: selectItemModel.title ? selectItemModel.title : "",
              storage: selectItemStorage.title ? selectItemStorage.title : "",
              batery: "",
            },
            code: ramdonCode,
            paths: keys
          },
        },
      });
      // Crear Status de CustomerProductStatus
      const { data: { createCustomerProductStatus } } = await API.graphql({
        query: mutations.createCustomerProductStatus,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          input: {
            productID: createCustomerProduct.id,
          },
        },
      });
      // Crear Relacion bidirecional entre CustomerProduct y Status
      const updateStatus = await API.graphql({
        query: mutations.updateCustomerProduct,
        variables: {
          input: {
            id: createCustomerProduct.id,
            customerProductStatusId: createCustomerProductStatus.id,
          },
        },
      });
      console.log(updateStatus)

      // naviegar
      navigation.navigate("Post_Complete", {
        product: createCustomerProductStatus,
      });
    } catch (error) {
      console.error("Error al Publicar Producto", error);
      setIsLoading(false)
    }
    setIsLoading(false)

  };
  const fetchData = async () => {
    try {
      const categories = await API.graphql({
        query: queries.listADCategories,
        authMode: "AWS_IAM",
      });
      setDataCategories(categories.data.listADCategories.items);
    } catch (error) {
      console.error(error);
    }
  };
  const dataUpdate = () => {
    dataCategories.map((item) => {
      if (categoriesSelect === item.id) setDataBrands(item.brands.items);
      if (categoriesSelect === item.id) {
        let listItems = [];
        item.products.items.map((product, index) => {
          if (brandsSelect === product.brandID) listItems.push(product);
        });
        setDataProducts(listItems);
      }
    });
  };
  const conditions = [
    { title: "NUEVO", id: "new", bgCondition: "#35BF05" },
    { title: "PERFECTO", id: "perfect", bgCondition: "#FFC700" },
    { title: "BUENO", id: "good", bgCondition: "#F60A0A" },
    { title: "USADO", id: "used", bgCondition: "#F60A0A" },
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
              placeholder={es.post.product.category.placeholder}
              both={true}
              text={es.post.product.category.title}
              modal={{
                text: es.post.product.category.modal,
              }}
              data={dataCategories}
              dataValue={"categories"}
            />
          </View>
          <View>
            <CustomModal
              control={control}
              name={`brand`}
              placeholder={es.post.product.brand.placeholder}
              both={true}
              text={es.post.product.brand.title}
              modal={{
                text: es.post.product.brand.modal,
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
            placeholder={es.post.product.product.placeholder}
            text={es.post.product.product.title}
            modal={{
              text: es.post.product.product.modal,
            }}
            data={dataProducts}
            dataValue={"products"}
          />
        </View>
        <View style={styles.both}>
          <CustomModal
            control={control}
            name={`condition`}
            placeholder={es.post.product.condition.placeholder}
            both={true}
            text={es.post.product.condition.title}
            modal={{
              text: es.post.product.condition.modal,
            }}
            data={conditions}
            dataValue={""}
          />
          <View style={{ flex: 1 }}>
            <CustomInput
              control={control}
              name={`price`}
              placeholder={es.post.product.price.placeholder}
              styled={{
                text: styles.textInputPrice,
                label: [styles.labelInputPrice],
                error: styles.errorInputPrice,
                input: [styles.inputContainerPrice],
                placeholder: styles.placeholderPrice,
              }}
              text={es.post.product.price.title}
              // iconRight={{
              //   name: "dollar",
              //   size: 14,
              //   color: "#8c9199cb",
              //   type: "FA",
              // }}
              numeric={true}
            // errorPost={selectErrorPostProduct}
            // rules={{
            //   required: "Required",
            // }}
            />
          </View>
        </View>
        <CustomInput
          control={control}
          name={`description`}
          placeholder={es.post.product.description.placeholder}
          styled={{
            text: styles.textInputD,
            label: [styles.labelInputD],
            error: styles.errorInputD,
            input: [styles.inputContainerD],
            placeholder: styles.placeholder,
          }}
          text={es.post.product.description.title}
          area={true}
          lines={6}
        // errorPost={selectErrorPostProduct}
        // rules={{
        //   required: "Required",
        // }}
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
            <Text style={styles.textButton}>
              {es.post.product.images.title}
            </Text>
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
                placeholder={es.post.product.model.placeholder}
                both={true}
                text={es.post.product.model.title}
                icon={{
                  name: "chevron-down",
                  size: 24,
                  color: "#1f1f1f",
                  type: "MTI",
                }}
                modal={{
                  text: es.post.product.model.modal,
                }}
                data={models}
                dataValue={"model"}
              />
              <CustomModal
                control={control}
                name={`supplier`}
                placeholder={es.post.product.supplier.placeholder}
                both={true}
                text={es.post.product.supplier.title}
                icon={{
                  name: "chevron-down",
                  size: 24,
                  color: "#1f1f1f",
                  type: "MTI",
                }}
                modal={{
                  text: es.post.product.supplier.modal,
                }}
                data={suppliers}
                dataValue={"supplier"}
              />
            </View>
            <View style={styles.both}>
              <View style={{ flex: 1 }}>
                <CustomInput
                  control={control}
                  name={`imei`}
                  placeholder={es.post.product.imei.placeholder}
                  styled={{
                    text: styles.textInputIMEI,
                    label: [styles.labelInputIMEI],
                    error: styles.errorInputIMEI,
                    input: [styles.inputContainerIMEI],
                    placeholder: styles.placeholderIMEI,
                  }}
                  text={es.post.product.imei.title}
                  numeric={true}
                // errorPost={selectErrorPostProduct}e
                // rules={{
                //   required: "Required",
                // }}
                />
              </View>
              {/* <View style={{flex: 1}}> */}

              <CustomModal
                control={control}
                name={`storage`}
                placeholder={es.post.product.storage.placeholder}
                both={true}
                text={es.post.product.storage.title}
                icon={{
                  name: "chevron-down",
                  size: 24,
                  color: "#1f1f1f",
                  type: "MTI",
                }}
                modal={{
                  text: es.post.product.storage.modal,
                }}
                data={storages}
                dataValue={"storage"}
              />
              {/* </View> */}
            </View>
          </View>
        ) : selectItemCategory.name === "lapto" ? (
          <View>
            <View style={[styles.line, global.bgWhiteSmoke]} />
            <Text style={styles.othersText}>{es.post.product.other}</Text>
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
          text={!isLoading ? es.post.product.button : <ActivityIndicator />}
          handlePress={handleSubmit(onHandleSubmit)}
          textStyles={[styles.textPublish, global.white]}
          buttonStyles={[styles.publish, global.mainBgColor]}
          disabled={isLoading}
        />
      </View>
    </ScrollView>
  );
};

export default PostProduct;
