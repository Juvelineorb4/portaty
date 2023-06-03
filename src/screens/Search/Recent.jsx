import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import RecentSearch from "@/components/RecentSearch";
import CoincidenceSearch from "@/components/CoincidenceSearch";
import styles from "@/utils/styles/Search.module.css";

// amplify 
import { API } from 'aws-amplify';
import * as queriesSearch from '@/graphql/CustomQueries/Search'
// Recoil
import { useRecoilValue } from "recoil";
import { searchGlobal, searchRecent } from "@/atoms/index";
const DATA = [
  {
    name: "recent",
  },
  {
    name: "coincidence",
  },
];

const Recent = ({ route, navigation }) => {
  // variable global search de lo que se busca 
  const search = useRecoilValue(searchGlobal);
  // search_recent variabble que guarda la busquedas recientes (por cache)
  const search_recent = useRecoilValue(searchRecent);
  const global = require("@/utils/styles/global.js");
  const [coincidence, setCoincidence] = useState([]);
  // filters son los estados locales que serviran para filtrar lso resultados 
  // filter el resultado de busqueda 
  // filter2 el resultados de recientes 
  // filter inicia sin nada 
  // filter2 inicia con las bsuqedas recientes en caso de existir 
  const [filter, setFilter] = useState([]);
  const [filter2, setFilter2] = useState(search_recent);


  /*
    se encarga de hacer la coincidencia entre el texto escrito en el search 
    y lo existente en la base de datos 
  */
  const onHandleSearch = (text) => {
    const filteredByBrand = coincidence?.filter((item) =>
      item?.name?.toLowerCase().includes(text?.toLowerCase())
    );

    let filteredByProduct = []
    coincidence.map((data, index) => {
      const result = data?.products?.items?.filter((item, i) =>
        item?.name?.toLowerCase().includes(text?.toLowerCase())
      ).map((item, i) => {
        item.title = data.name;
        return item;
      })
      if (result.length > 0) {
        return filteredByProduct = result
      }
    });

    if (!filteredByBrand.length > 0) {
      //console.log("DATA: ", filteredByProduct)
      setFilter(filteredByProduct);

    } else {
      setFilter(filteredByBrand);
    }
  };

  //filtrado de busquedas recientes 
  const onHandleSearch2 = (text) => {
    const filteredData = search_recent.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilter2(filteredData);
  };

  const fetchBrands = async () => {
    const { data: { listADBrands } } = await API.graphql({
      query: queriesSearch.listADBrands,
      authMode: "AWS_IAM",
    })
    setCoincidence(listADBrands.items)
  }

  useEffect(() => {
    // fechProducts();
    fetchBrands();
  }, [])

  useEffect(() => {
    onHandleSearch2(search);
    if (search !== "") {
      onHandleSearch(search);
    } else {
      setFilter([]);
    }
  }, [search]);

  const onHandleItemPress = (data) => {
    navigation.navigate("Result_Home", {
      search: data
    });
  };

  return (
    <View style={[styles.container, global.bgWhite]}>
      <FlatList
        data={DATA}
        keyExtractor={(__, index) => index.toString()}
        renderItem={({ item, index }) => (
          <>
            {/* {console.log("DATA: ", filter)} */}
            {item.name === "recent"
              ? filter2.map((data, index) => (
                <RecentSearch
                  key={index}
                  item={data}
                  onHandler={onHandleItemPress}
                />
              ))
              : item.name === "coincidence" &&
              filter.map((data, index) => (
                <>
                  <CoincidenceSearch
                    key={index}
                    item={data}
                    onHandler={onHandleItemPress}
                    isBrand={data["products"] ? true : false}
                    brand={data["products"] === undefined ? `${data.title}` : ""}
                    isProduct={!data["products"] ? true : false}
                  />
                  {
                    data?.products?.items.length > 0 &&
                    data?.products?.items.map((item, i) => (
                      <>
                        <CoincidenceSearch
                          key={i}
                          item={item}
                          onHandler={onHandleItemPress}
                          isProduct={true}
                          brand={data.name}
                        />
                      </>
                    ))
                  }
                </>
              ))}
          </>
        )}
        ListHeaderComponent={() => <Title />}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{
          padding: 20,
        }}
      />
    </View>
  );
};

const Title = () => {
  const global = require("@/utils/styles/global.js");
  return (
    <View style={[styles.title]}>
      <View style={[{ flex: 1, justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }]}>
        <Text style={styles.textTitle}>Recent</Text>
        <Text style={styles.textTitle}>Clear All</Text>
      </View>
      <View style={[styles.line, global.bgWhiteSmoke]} />
    </View>
  );
};

export default Recent;
