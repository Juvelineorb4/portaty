import { Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/Search.module.css";
import NotFound from "./NotFound";
import SortFilter from "./SortFilter";

const Result = ({ navigation, route }) => {
  const [search, setSearch] = useState(route.params?.search);
  useEffect(() => {
    // console.log(route.params)
  }, []);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={[]}
          ListEmptyComponent={<NotFound />}
          keyExtractor={(__, index) => index.toString()}
          renderItem={({ item }) => <></>}
          ListHeaderComponent={
            <HeaderComponent
              name={route.params?.name}
              search={route.params?.search}
            />
          }
          contentContainerStyle={{
            padding: 10,
          }}
          ListFooterComponent={<SortFilter />}
        />
        <SortFilter />
      </View>
    </>
  );
};

const HeaderComponent = ({ name = "", search = "" }) => {
  return (
    <View style={styles.title}>
      <Text style={styles.textTitle}>Result for "{search}"</Text>
      <Text style={{ fontWeight: "bold" }}>0 found</Text>
    </View>
  );
};

export default Result;
