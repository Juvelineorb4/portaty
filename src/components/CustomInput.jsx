import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import Icon from "./Icon";


const CustomInput = ({
  defaultValue,
  control,
  name,
  rules = {},
  placeholder,
  security,
  styled = {},
  icon = {},
  text,
  iconRight = {},
  placeholderTextColor = {},
  area = false,
  lines= 1
}) => {
  const [securityChange, setSecurityChange] = useState(true)
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          {text && <Text style={styled.label}>{text}</Text>}
          <View style={[styled.input, error && { borderColor: "red", borderWidth: 1, marginBottom: 0 }]}>
            {icon && <Icon name={icon.name} color={icon.color} size={icon.size} type={icon.type} />}
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              {...styled.placeholder}
              style={styled.text}
              secureTextEntry={security && securityChange}
              defaultValue={defaultValue}
              multiline={area ? true : false}
              numberOfLines={lines}
            />
            {/* si es de seguridad por defecto se colcoa el ojito */}
            {security ? iconRight &&
              <TouchableOpacity onPress={() => setSecurityChange(!securityChange)}>
                <Icon name={securityChange ? "eye-off-outline" : "eye-outline"} color={icon.color} size={icon.size} type={icon.type} />
              </TouchableOpacity>
              :
              iconRight && <Icon name={iconRight.name} color={iconRight.color} size={iconRight.size} type={iconRight.type}
              />}
          </View>
          {error && <Text style={{ color: "red" }}>{error.message || "Error"}</Text>}
        </>
      )}
    />
  );
};

export default CustomInput;
