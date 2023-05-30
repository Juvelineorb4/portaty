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
  const { data } = route.params
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
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
    padding: 20,
    marginBottom: 40
  },
});

export default CustomSearch;
