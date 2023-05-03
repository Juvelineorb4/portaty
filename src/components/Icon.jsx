import React from "react";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";

const Icon = ({ name, color, size, handlePress, type }) => {
  return (
    <>
      {type === "MTI" ? (
        <MaterialCommunityIcons
          name={name}
          color={color}
          size={size}
          onPress={handlePress}
        />
      ) : type === "FA" ? (
        <FontAwesome
          name={name}
          size={size}
          color={color}
          onPress={handlePress}
        />
      ) : (
        <SimpleLineIcons
          name={name}
          color={color}
          size={size}
          onPress={handlePress}
        />
      )}
    </>
  );
};

export default Icon;
