import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'


const NotFound = () => {
    return (

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 10, backgroundColor: "white" }}>
            <Image
                style={{
                    width: 250,
                    height: 250,
                    resizeMode: "cover",
                }}
                source={require("@/utils/images/not_found.png")}
            />
            {/* Titulo */}
            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 25 }} >Not Found</Text>
            </View>
            {/* Contenido */}
            <View style={{ flexWrap: "nowrap", paddingHorizontal: 25 }}>
                <Text style={{ textAlign: "center", fontSize: 15 }}>
                    Sorry, the keyword you entered cannot be found, please check again or search with another keyword.
                </Text>
            </View>
        </View >

    )
}

export default NotFound

const styles = StyleSheet.create({})