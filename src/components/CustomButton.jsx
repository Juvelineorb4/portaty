import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";

const CustomButton = ({ text, handlePress, textStyles, buttonStyles, icon={} }) => {
  return (
    <TouchableOpacity style={buttonStyles} onPress={handlePress} activeOpacity={1}>
      {text && <Text style={textStyles}>{text}</Text>}
      {icon.status && <Icon name={icon.name} color={icon.color} size={icon.size} type={icon.type} />}
    </TouchableOpacity>
  );
};

export default CustomButton;
