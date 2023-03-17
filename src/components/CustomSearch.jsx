import { View, Text } from 'react-native'
import React from 'react'

const CustomSearch = ({route}) => {
  return (
    <View>
      <Text>{JSON.stringify(route.params.data)}</Text>
    </View>
  )
}

export default CustomSearch