import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import styles from "@/utils/styles/Register.module.css";
import CustomText from "@/components/CustomText";
import CustomInput from "@/components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import Icon from "@/components/Icon";
// amplify 
import { Auth } from 'aws-amplify'
import { es } from "@/utils/constants/lenguage";

const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

const Register = () => {
  const global = require("@/utils/styles/global.js");
  const { control, handleSubmit, watch } = useForm();
  const [isLoading, setIsLoading] = useState(false)
  const pwd = watch("password")
  const navigation = useNavigation();
  const [active, setActive] = useState(true);

  const onHandleActive = () => {
    setActive(!active);
  };

  const onHandleRegister = async (data) => {
    const { email, name, password } = data
    setIsLoading(true)
    try {
      const result = await Auth.signUp({
        username: email.trim(),
        password: password,
        attributes: {
          name: name.trim()
        }
      })

      navigation.navigate("ConfirmAccount", {
        email: email,
      })
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
    setIsLoading(false)
  }

  return (
    <View style={[styles.content, global.bgWhite]}>
      <ScrollView style={styles.form}>
        <CustomText
          styled={{
            title: styles.title,
            subtitle: styles.subtitle,
            container: styles.textContainer,
          }}
          title={es.authentication.register.title}
        />
        <Image
          style={{
            width: 300,
            height: 180,
            resizeMode: "cover",
            marginTop: -25,
            marginBottom: 15,
          }}
          source={require("@/utils/images/create.png")}
        />
        <CustomInput
          control={control}
          name={`name`}
          placeholder={es.authentication.register.name.placeholder}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            input: [styles.inputContainer, global.bgWhiteSoft],
          }}
          icon={{
            name: "account-circle-outline",
            color: "#404040",
            size: 25,
            type: "MTI",
          }}
          rules={{
            required: es.authentication.register.name.rules,
          }}
        />
        <CustomInput
          control={control}
          name={`email`}
          placeholder={es.authentication.register.email.placeholder}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            input: [styles.inputContainer, global.bgWhiteSoft],
          }}
          icon={{
            name: "email-outline",
            color: "#404040",
            size: 25,
            type: "MTI",
          }}
          rules={{
            required: es.authentication.register.email.rules,
            pattern: { value: EMAIL_REGEX, message: "Inválido" }
          }}
        />
        <CustomInput
          control={control}
          name={`password`}
          placeholder={es.authentication.register.password.placeholder}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            input: [styles.inputContainer, global.bgWhiteSoft],
          }}
          icon={{
            name: "lock-outline",
            color: "#404040",
            size: 25,
            type: "MTI",
          }}
          security={true}
          rules={{
            required: es.authentication.register.password.rules,
            minLength: {
              value: 8,
              message: "Mínimo 8 caracteres"
            },
          }}
        />
        <CustomInput
          control={control}
          name={`password-repeat`}
          placeholder={es.authentication.register.repeat.placeholder}
          styled={{
            text: styles.textInput,
            label: styles.labelInput,
            error: styles.errorInput,
            input: [styles.inputContainer, global.bgWhiteSoft],
          }}
          icon={{
            name: "lock-outline",
            color: "#404040",
            size: 25,
            type: "MTI",
          }}
          security={true}
          rules={{
            required: es.authentication.register.repeat.rules,
            validate: value =>
              value == pwd || 'No coincide'
          }}
        />
        <View style={styles.controls}>
          <View style={styles.check}>
            {active ? (
              <TouchableOpacity
                style={styles.boxActive}
                onPress={onHandleActive}
              >
                <Icon name={`check`} color={`#ffffff`} size={15} type={`MTI`} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.box}
                onPress={onHandleActive}
              ></TouchableOpacity>
            )}
            <Text style={styles.terms}>
              {es.authentication.register.terms}
            </Text>
          </View>

          <CustomButton

            text={!isLoading ? es.authentication.register.button : <ActivityIndicator />}
            handlePress={handleSubmit(onHandleRegister)}
            textStyles={[styles.textContinue, global.white]}
            buttonStyles={[styles.continue, global.mainBgColor]}
            disabled={isLoading}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
