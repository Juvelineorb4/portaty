import { View, Text } from 'react-native'
import React from 'react'

const SearchCategory = ({route}) => {
    const {params} = route
  return (
    <View>
      <Text>{params.category}</Text>
    </View>
  )
}

export default SearchCategory