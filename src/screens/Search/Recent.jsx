import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import RecentSearch from '@/components/RecentSearch'
import CoincidenceSearch from '@/components/CoincidenceSearch'
import styles from '@/utils/styles/Search.module.css'

// Recoil
import { useRecoilValue } from 'recoil'
import { searchGlobal, searchRecent } from '@/atoms/index'
const DATA = [
    {
        name: "recent"
    },
    {
        name: "coincidence"
    }
];




const Recent = ({ route, navigation }) => {
    const search = useRecoilValue(searchGlobal)
    const search_recent = useRecoilValue(searchRecent)
    const [coincidence, setCoincidence] = useState([
        {
            id: 1,
            title: "Snake Skin Bag"
        },
        {
            id: 2,
            title: "Dell 133999"
        },
        {
            id: 3,
            title: "HeadPhone White"
        }
    ])

    const [filter, setFilter] = useState([]);
    const [filter2, setFilter2] = useState(search_recent);

    const onHandleSearch = (text) => {
        const filteredData = coincidence.filter(item =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        // setCoincidence(filteredData);
        setFilter(filteredData)
    }
    const onHandleSearch2 = (text) => {
        const filteredData = search_recent.filter(item =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        // setCoincidence(filteredData);
        setFilter2(filteredData)
    }

    useEffect(() => {
        onHandleSearch2(search)
        if (search !== "") {
            onHandleSearch(search)
        } else {
            setFilter([])
        }
    }, [search])

    const onHandleItemPress = (data) => {
        navigation.navigate("Result_Home", { search: data.title })

    }


    return (
        <View style={[styles.container]}>
            <FlatList
                data={DATA}
                keyExtractor={(__, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <>
                        {

                            item.name === "recent" ?
                                filter2.map((data, index) => (
                                    <RecentSearch key={index} item={data} onHandler={onHandleItemPress} />
                                )) :
                                item.name === "coincidence" &&
                                filter.map((data, index) => (
                                    <CoincidenceSearch key={index} item={data} onHandler={onHandleItemPress} />
                                ))


                        }
                    </>
                )}
                ListHeaderComponent={() => <Title />}
                keyboardShouldPersistTaps="always"
                contentContainerStyle={{
                    padding: 10
                }}
            />
        </View>
    )
}

const Title = () => {
    const global = require("@/utils/styles/global.js");
    return (
        <View style={[styles.title]}>
            <Text style={styles.textTitle}>Recent</Text>
            <Text style={styles.textTitle}>Clear All</Text>
        </View>
    )
}

export default Recent

