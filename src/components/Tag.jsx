import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Tag = ({ item, button, onHandlePress }) => {


  return (
    <TouchableOpacity
      style={[styles.container, item.id === button && styles.containerSelect]}
      onPress={() => onHandlePress(item.id)}
    >
      <Text style={[styles.text, item.id === button && styles.textSelect]}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default Tag

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 50
  },
  containerSelect: {
    backgroundColor: "black",
  },
  text: {
    color: "black",
  },
  textSelect: {
    color: "white"
  }
})