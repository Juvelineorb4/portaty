import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
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

const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

const Register = () => {
  const global = require("@/utils/styles/global.js");
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password")
  const navigation = useNavigation();
  const [active, setActive] = useState(true);

  const onHandleActive = () => {
    setActive(!active);
  };

  const onHandleRegister = async (data) => {
    const { email, name, password } = data
    try {
      const result = await Auth.signUp({
        username: email.trim(),
        password: password,
        attributes: {
          name: name
        }
      })
      navigation.navigate("ConfirmAccount", {
        email: email
      })
      console.log("REGISTER: ", result)
    } catch (error) {
      console.error(error)
    }
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
          title={`Create New Account`}
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
          placeholder={"Write your username..."}
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
            required: "Name is required",
          }}
        />
        <CustomInput
          control={control}
          name={`email`}
          placeholder={"Write your email..."}
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
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Invalid Email" }
          }}
        />
        <CustomInput
          control={control}
          name={`password`}
          placeholder={"Write your password..."}
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
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Min 8 characters"
            },
          }}
        />
        <CustomInput
          control={control}
          name={`password-repeat`}
          placeholder={"Write your password again..."}
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
            required: "Password Repeat is required",
            validate: value =>
              value == pwd || 'Password do not match'
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
              I accept the Terms and Privacy Policy
            </Text>
          </View>

          <CustomButton
            text={`Continue`}
            handlePress={handleSubmit(onHandleRegister)}
            textStyles={[styles.textContinue, global.white]}
            buttonStyles={[styles.continue, global.mainBgColor]}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
