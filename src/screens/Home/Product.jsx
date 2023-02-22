import { View, Text } from 'react-native'
import React from 'react'

const Product = ({item}) => {
  return (
    <View>
      <Text>{item}</Text>
    </View>
  )
}

export default Product