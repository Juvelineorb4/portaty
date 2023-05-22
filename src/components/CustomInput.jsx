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
  lines = 1,
  numeric,
  errorPost = false,
}) => {
  const [securityChange, setSecurityChange] = useState(true);
  const [errorState, setErrorState] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View>
          {text && <Text style={styled.label}>{text}</Text>}
          <View
            style={[
              styled.input,
              (error || errorPost) &&
                errorState && { borderColor: "red", borderWidth: 1 },
            ]}
          >
            <View style={{flexDirection: 'row'}}>
              {icon && (
                <Icon
                  name={icon.name}
                  color={icon.color}
                  size={icon.size}
                  type={icon.type}
                />
              )}
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={value ? styled.text : styled.placeholder}
                secureTextEntry={security && securityChange}
                defaultValue={defaultValue}
                multiline={area ? true : false}
                numberOfLines={lines}
              />
            </View>

            {security
              ? iconRight && (
                  <TouchableOpacity
                    onPress={() => setSecurityChange(!securityChange)}
                  >
                    <Icon
                      name={securityChange ? "eye-off-outline" : "eye-outline"}
                      color={icon.color}
                      size={icon.size}
                      type={icon.type}
                    />
                  </TouchableOpacity>
                )
              : iconRight && (
                  <Icon
                    name={iconRight.name}
                    color={iconRight.color}
                    size={iconRight.size}
                    type={iconRight.type}
                  />
                )}
          </View>
          {error && (
            <Text style={{ color: "red" }}>{error.message || "Required"}</Text>
          )}
          {errorPost && (
            <Text
              style={{
                color: "red",
                position: "absolute",
                right: 10,
                bottom: -5,
                fontFamily: "medium",
                fontSize: 10,
                textTransform: "capitalize",
              }}
            >
              Required
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default CustomInput;
