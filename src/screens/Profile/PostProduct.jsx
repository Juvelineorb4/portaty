import { View, Text, ScrollView, Image } from "react-native";
import styles from "@/utils/styles/PostProduct.module.css";
import React, { useState } from "react";
import CustomInput from "@/components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";

const PostProduct = ({ data }) => {
  const global = require("@/utils/styles/global.js");
  const { control, handleSubmit } = useForm();
  const brands = [];
  const products =[]
  data.map((item) =>
    item.brands.map((brand) => {
      brands.push(brand)
      brand.products.map((product) => products.push(product))
    })
  );
  console.log(products)
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
          data={data}
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
              data={brands}
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
              data={products}
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
            <CustomModal
              control={control}
              name={`location`}
              placeholder={"Search Location"}
              both={true}
              text={`Location`}
              icon={{
                name: "chevron-down",
                size: 24,
                color: "#1f1f1f",
                type: "MTI",
              }}
              data={[]}
            />
          </View>
          <View>
            <CustomModal
              control={control}
              name={`price`}
              placeholder={"Enter Price"}
              both={true}
              text={`Price`}
              icon={{
                name: "chevron-down",
                size: 24,
                color: "#1f1f1f",
                type: "MTI",
              }}
              data={[]}
            />
          </View>
        </View>
        <CustomModal
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
        />
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
          textStyles={[styles.textPublish, global.white]}
          buttonStyles={[styles.publish, global.mainBgColor]}
        />
      </View>
    </ScrollView>
  );
};

export default PostProduct;
