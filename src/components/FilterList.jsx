import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import Tag from './Tag'
const FilterList = ({ title, items = [] }) => {
    const [selectedButton, setSelectedButton] = useState(null);

    const onHandlePress = (id = undefined) => {
        setSelectedButton(id)
        console.log(id)
    }

    return (
        <View style={styles.container}>
            <Header title={title} />
            <FlatList
                data={items}
                keyExtractor={(__, index) => index.toString()}
                horizontal={true}
                renderItem={({ item }) => (
                    <Tag item={item} button={selectedButton} onHandlePress={onHandlePress} />
                )}
                ItemSeparatorComponent={
                    <View
                        style={{
                            marginHorizontal: 5
                        }}
                    />
                }
            />
        </View>
    )
}

const Header = ({ title }) => {
    return (
        <View style={styles.contentHeader}>
            <Text style={styles.contentTitle}>
                {title}
            </Text>
        </View>
    )
}

export default FilterList

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentHeader: {
        paddingVertical: 10
    },
    contentTitle: {
        fontWeight: "bold",
        fontSize: 16
    }
})