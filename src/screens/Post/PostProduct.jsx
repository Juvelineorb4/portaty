import { View, Text, ScrollView, Image, Alert } from "react-native";
import styles from "@/utils/styles/PostProduct.module.css";
import React, { useEffect, useState } from "react";
import CustomInput from "@/components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";
// amplify
import { API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import { listBrands, listCategories, listProducts } from "@/atoms";
import { useRecoilState } from "recoil";

const PostProduct = ({ navigation }) => {
  const global = require("@/utils/styles/global.js");
  const { control, handleSubmit } = useForm();
  const [categoriesValue, setCategoriesValue] = useRecoilState(listCategories);
  const [brandsValue, setBrandsValue] = useRecoilState(listBrands);
  const [productsValue, setProductsValue] = useRecoilState(listProducts);
  const fetchData = async () => {
    try {
      const categories = await API.graphql({
        query: queries.listADCategories,
        authMode: "AWS_IAM",
      });
      const brands = await API.graphql({
        query: queries.listADBrands,
        authMode: "AWS_IAM",
      });
      const products = await API.graphql({
        query: queries.listADProducts,
        authMode: "AWS_IAM",
      });
      setCategoriesValue(categories.data.listADCategories.items);
      setBrandsValue(brands.data.listADBrands.items);
      setProductsValue(products.data.listADProducts.items);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      <View style={styles.form}>
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
          data={categoriesValue}
          dataValue={"categories"}
        />
        <View style={styles.both}>
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
              data={brandsValue}
              dataValue={"brands"}
            />
          </View>
          <View>
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
                text: "Select your type of model",
              }}
              data={productsValue}
            />
          </View>
        </View>
        <CustomModal
          control={control}
          name={`features`}
          placeholder={"Select Features"}
          text={`Features`}
          icon={{
            name: "chevron-down",
            size: 24,
            color: "#1f1f1f",
            type: "MTI",
          }}
          modal={{
            text: "Select characteristics of your product",
          }}
          data={[]}
        />
        <View style={styles.both}>
          <View>
            <CustomInput
              control={control}
              name={`location`}
              placeholder={"Enter Location"}
              styled={{
                text: styles.textInput,
                label: [styles.labelInput, global.topGray],
                error: styles.errorInput,
                input: [styles.inputContainer, global.bgWhiteSoft],
              }}
              text={`Location`}
            />
          </View>
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
              }}
              text={`Price`}
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
          }}
          text={`Description`}
        />
        {/* <CustomModal
          control={control}
          name={`description`}
          placeholder={"Write description about your product"}
          text={`Description`}
          icon={{
            name: "chevron-down",
            size: 24,
            color: "#1f1f1f",
            type: "MTI",
          }}
          data={[]}
        /> */}
        <View style={styles.imagesPicker}>
          <View style={styles.images}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={require("@/utils/images/rectangle-add.png")}
            />
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
                width: 100,
                height: 100,
                resizeMode: "contain",
                marginLeft: 10,
              }}
              source={require("@/utils/images/rectangle.png")}
            />
          </View>
          <View style={styles.buttonImage}>
            <Image
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                resizeMode: "contain",
                marginRight: 10,
              }}
              source={require("@/utils/images/picker.png")}
            />
            <Text style={styles.textButton}>Upload your images</Text>
          </View>
        </View>
        <CustomButton
          text={`Publish your product`}
          handlePress={() => navigation.navigate("Post_Complete")}
          textStyles={[styles.textPublish, global.white]}
          buttonStyles={[styles.publish, global.mainBgColor]}
        />
      </View>
    </ScrollView>
  );
};

export default PostProduct;
