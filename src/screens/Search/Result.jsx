import { Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/SearchResult.module.css";
import NotFound from "./NotFound";
import SortFilter from "./SortFilter";

const Result = ({ navigation, route }) => {
  const [search, setSearch] = useState(route.params?.search);
  const global = require("@/utils/styles/global.js");
  return (
    <View
      style={[
        styles.container,
        // { paddingHorizontal: 10, paddingTop: 5 },
        global.bgWhite,
      ]}
    >
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
  );
};

const HeaderComponent = ({ name = "", search = "" }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View>
        <Text style={styles.textTitle}>Resultado de "{search?.name}"</Text>
        <Text style={[global.midGray, { fontFamily: "thin" }]}>
          0 encontrados
        </Text>
      </View>
      <View style={[styles.line, global.bgWhiteSmoke]} />
    </View>
  );
};

export default Result;
