import { Text, View, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/SearchResult.module.css";
import NotFound from "./NotFound";
import SortFilter from "./SortFilter";
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import * as customQueries from "@/graphql/CustomQueries/Home";
import { useIsFocused } from "@react-navigation/native";
import CustomSearchProductCard from "@/components/CustomSearchProductCard";

const Result = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const { data, group } = route.params
  const [items, setItems] = useState([]);

  console.log(data, group)

  const fetchList = async () => {

    const listSearch = await API.graphql({
      query: customQueries.listCustomerProductStatus,
      variables: {
        filter: {
          status: { eq: 'PUBLISHED' },
        }
      },
      authMode: "AWS_IAM",
    });
    let listItems = [];
    listSearch.data.listCustomerProductStatuses.items.map((item, index) => {
      if (group === 'brand' && item.product.brandID === data.id) listItems.push(item);
      if (group === 'product' && item.product.productID === data.id) listItems.push(item);
    });
    setItems(listItems);
  };

  useEffect(() => {
    fetchList();
  }, []);


  return (
    <View
      style={[
        styles.container,
        // { paddingHorizontal: 10, paddingTop: 5 },
        global.bgWhite,
      ]}
    >
      <FlatList
        data={items}
        ListEmptyComponent={items ? <ActivityIndicator style={{marginTop: '50%', transform: [{ scale: 1 }]}} size={`large`} color={`#ffa424`}/> : <NotFound />}
        keyExtractor={(__, index) => index.toString()}
        renderItem={({ item }) => <CustomSearchProductCard product={item} />}
        ListHeaderComponent={
          <HeaderComponent
            list={data}
            number={items.length}
          />
        }
        numColumns={2}
        contentContainerStyle={{
          padding: 20,
        }}
        ListFooterComponent={<SortFilter />}
      />
    </View>
  );
};

const HeaderComponent = ({ list, number }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View>
        <Text style={styles.textTitle}>Resultado de "{list.name}"</Text>
        <Text style={[global.midGray, { fontFamily: "thin" }]}>
          {number} encontrados
        </Text>
      </View>
      <View style={[styles.line, global.bgWhiteSmoke]} />
    </View>
  );
};

export default Result;
