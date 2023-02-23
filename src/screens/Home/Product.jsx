import { View, Text } from 'react-native'
import React from 'react'

const Product = ({route}) => {
  return (
    <View>
      <Text>{JSON.stringify(route.params)}</Text>
    </View>
  )
}

export default Product