import React from "react";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

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
