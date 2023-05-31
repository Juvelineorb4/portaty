import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";

const CustomButton = ({
  text,
  handlePress,
  textStyles,
  buttonStyles,
  icon = {},
  image = {},
  disabled = false
}) => {
  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={handlePress}
      activeOpacity={1}
      disabled={disabled}
    >
      {text && <Text style={textStyles}>{text}</Text>}
      {icon.status && (
        <Icon
          name={icon.name}
          color={icon.color}
          size={icon.size}
          type={icon.type}
        />
      )}
      {image && (
        <Image
          style={{
            width: 25,
            height: 25,
            resizeMode: "contain",
            alignSelf: "center",
          }}
          source={image}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
