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
  errorPost
}) => {
  const [securityChange, setSecurityChange] = useState(true);
  const [errorState, setErrorState] = useState(false);
  // const handleInputChange = (text) => {
  //   const filteredText = text.replace(/\D/gm, "");

  //   if (filteredText !== text) {
  //     // set state text to the current TextInput value, to trigger
  //     // TextInput update.
  //     this.setState({ text: text });

  //     // buys us some time until the above setState finish execution
  //     setTimeout(() => {
  //       this.setState((previousState) => {
  //         return {
  //           ...previousState,
  //           text: previousState.text.replace(/\D/gm, ""),
  //         };
  //       });
  //     }, 0);
  //   } else {
  //     this.setState({ text: filteredText });
  //   }
  // };
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
              error || errorPost && errorState && { borderColor: "red", borderWidth: 1 },
            ]}
          >
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
              onChangeText={() => onChange(setErrorState(true))}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              {...styled.placeholder}
              style={styled.text}
              secureTextEntry={security && securityChange}
              defaultValue={defaultValue}
              multiline={area ? true : false}
              numberOfLines={lines}
              keyboardType="number-pad"
            />
            {/* si es de seguridad por defecto se colcoa el ojito */}
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
            <Text style={{ color: "red", position: "absolute", right: 10, bottom: -5, fontFamily: 'medium', fontSize: 10, textTransform: 'capitalize' }}>Required</Text>
          )}
        </View>
      )}
    />
  );
};

export default CustomInput;
