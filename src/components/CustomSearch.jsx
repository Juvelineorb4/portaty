import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import CustomProductCard from "./CustomProductCard";

const CustomSearch = ({ route }) => {
  const products = [];
  const { data } = route.params
  data.brands.map((brand) =>
    brand.products.map((product) => products.push(product))
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <CustomProductCard product={item} />}
        numColumns={2}
        keyExtractor={(item, index) => index}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20
  },
});

export default CustomSearch;
