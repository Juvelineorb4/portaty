import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/Profile.module.css";
import CustomButton from "@/components/CustomButton";
import { settings } from "@/utils/constants/settings";
import CustomSelect from "@/components/CustomSelect";

// amplify
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import {
  blobsPost,
  brandItem,
  brandsId,
  categoriesId,
  categoryItem,
  conditionItem,
  customerId,
  errorPostProduct,
  imagesPost,
  modelItem,
  productItem,
  productsBrandId,
  productsId,
  storageItem,
  supplierItem,
  userAutenticated,
} from "@/atoms";
import { es } from "@/utils/constants/lenguage";

const Profile = ({ navigation }) => {
  const global = require("@/utils/styles/global.js");
  const userAuth = useRecoilValue(userAutenticated);
  const [items, setItems] = useState([])
  const [purchaseOrders, setPurchaseOrders] = useState([])
  const [salesOrders, setSalesOrders] = useState([])
  const [selectCustomerId, setSelectCustomerId] = useRecoilState(customerId);
  const { buttons } = settings;
  const onHandleLogout = async () => {
    await Auth.signOut();
    setTimeout(() => {
      navigation.navigate("Login_Welcome");
    }, 500);
  };

  /* Reset */
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
  const [categoriesSelect, setCategoriesSelect] = useRecoilState(categoriesId);
  const [brandsSelect, setBrandsSelect] = useRecoilState(brandsId);
  const [productSelect, setProductSelect] = useRecoilState(productsId);
  const [productBrandSelect, setProductBrandSelect] =
    useRecoilState(productsBrandId);
  const [imagesPostSelect, setImagesPostSelect] = useRecoilState(imagesPost);
  const [blobImages, setBlobImages] = useRecoilState(blobsPost);
  const [selectErrorPostProduct, setSelectErrorPostProduct] =
    useRecoilState(errorPostProduct);

  const fecthShop = async () => {
    const result = await API.graphql({
      query: queries.getCustomerShop,
      variables: { userID: userAuth.username },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    const listProducts = await API.graphql({
      query: queries.listCustomerProductStatuses,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setItems(listProducts.data.listCustomerProductStatuses.items)
    setSelectCustomerId(result.data.getCustomerShop.userID);
    setPurchaseOrders(result.data.getCustomerShop.purchaseOrders.items)
    setSalesOrders(result.data.getCustomerShop.salesOrders.items)
  };

  const resetPost = () => {
    setSelectItemCategory({});
    setSelectItemBrand({});
    setSelectItemProduct({});
    setSelectItemCondition({});
    setSelectItemModel({});
    setSelectItemSupplier({});
    setSelectItemStorage({});
    setCategoriesSelect("");
    setBrandsSelect("");
    setProductSelect("");
    setProductBrandSelect("");
    setImagesPostSelect([]);
    setBlobImages([]);
    setSelectErrorPostProduct(false);
  };

  useEffect(() => {
    fecthShop();
  }, []);

  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      <View style={styles.profile}>
        <View style={styles.containerImage}>
          <View style={styles.image}></View>
          <CustomButton
            buttonStyles={[styles.edit, global.bgBlack]}
            image={require("@/utils/images/capture.png")}
          />
        </View>
        <Text style={[styles.user, global.black]}>
          {/*{userAuth.attributes.name}*/}
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.titleSettings, global.black]}>
          {es.profile.shop.title}
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            resetPost();
            navigation.navigate("Post_Navigator");
          }}
        >
          <View style={[styles.line, global.bgWhiteSmoke]} />
          <CustomSelect
            title={es.profile.shop.post.title}
            subtitle={es.profile.shop.post.subtitle}
            styled={{
              text: {
                container: styles.textContainerSelect,
                title: [styles.textTitleSelect, global.black],
                subtitle: [styles.textSubtitleSelect, global.topGray],
              },
              container: styles.containerSelect,
              iconLeft: [styles.iconLeft, global.mainBgColor],
              iconRight: styles.iconRight,
            }}
            icon={{
              left: require("@/utils/images/post.png"),
              right: require("@/utils/images/arrow_right.png"),
            }}
            toogle={false}
          />
        </TouchableOpacity>

        <View style={[styles.line, global.bgWhiteSmoke]} />
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("ListProducts", {
          data: items
        })}>
          <CustomSelect
            title={es.profile.shop.products.title}
            subtitle={es.profile.shop.products.subtitle}
            styled={{
              text: {
                container: styles.textContainerSelect,
                title: [styles.textTitleSelect, global.black],
                subtitle: [styles.textSubtitleSelect, global.topGray],
              },
              container: styles.containerSelect,
              iconLeft: [styles.iconLeft, global.mainBgColor],
              iconRight: styles.iconRight,
            }}
            icon={{
              left: require("@/utils/images/product.png"),
              right: require("@/utils/images/arrow_right.png"),
            }}
            toogle={false}
          />
        </TouchableOpacity>

        <View style={[styles.line, global.bgWhiteSmoke]} />
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("ListOrders", {
          purchase: purchaseOrders,
          sales: salesOrders
        })}>
          <CustomSelect
            title={es.profile.shop.orders.title}
            subtitle={es.profile.shop.orders.subtitle}
            styled={{
              text: {
                container: styles.textContainerSelect,
                title: [styles.textTitleSelect, global.black],
                subtitle: [styles.textSubtitleSelect, global.topGray],
              },
              container: styles.containerSelect,
              iconLeft: [styles.iconLeft, global.mainBgColor],
              iconRight: styles.iconRight,
            }}
            icon={{
              left: require("@/utils/images/order.png"),
              right: require("@/utils/images/arrow_right.png"),
            }}
            toogle={false}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={[styles.titleSettings, global.black]}>
          {es.profile.settings.title}
        </Text>
        {buttons.map((button, index) => (
          <View key={index}>
            {button.route ? (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate(button.route)}
              >
                <View style={[styles.line, global.bgWhiteSmoke]} />
                <CustomSelect
                  title={button.title}
                  subtitle={button.subtitle}
                  styled={{
                    text: {
                      container: styles.textContainerSelect,
                      title: [styles.textTitleSelect, global.black],
                      subtitle: [styles.textSubtitleSelect, global.topGray],
                    },
                    container: styles.containerSelect,
                    iconLeft: [styles.iconLeft, global.mainBgColor],
                    iconRight: styles.iconRight,
                  }}
                  icon={button.icon}
                  toogle={button.toogle}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={1} onPress={onHandleLogout}>
                <View style={[styles.line, global.bgWhiteSmoke]} />
                <CustomSelect
                  title={button.title}
                  subtitle={button.subtitle}
                  styled={{
                    text: {
                      container: styles.textContainerSelect,
                      title: [styles.textTitleSelect, global.black],
                      subtitle: [styles.textSubtitleSelect, global.topGray],
                    },
                    container: styles.containerSelect,
                    iconLeft: [styles.iconLeft, global.mainBgColor],
                    iconRight: styles.iconRight,
                  }}
                  icon={button.icon}
                  toogle={button.toogle}
                />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;
