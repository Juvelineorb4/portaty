import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import styles from "@/utils/styles/Forgot.module.css";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import CustomText from "@/components/CustomText";
import { es } from "@/utils/constants/lenguage";

const Forgot = ({navigation}) => {
  const global = require("@/utils/styles/global.js");
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: "",
      code: ["", "", "", "", "", ""],
    },
  });
  const emailValue = watch("email");
  // const navigation = useNavigation();
  return (
    <View style={[styles.container, global.bgWhite]}>
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.textContainer}>
            <CustomText
              styled={{
                title: [styles.title, global.black],
                subtitle: [styles.subtitle, global.topGray],
                container: styles.textContainer,
              }}
              title={es.authentication.forgot.main.title}
              subtitle={es.authentication.forgot.main.subtitle}
            />
            <Image
              style={{
                width: 300,
                height: 160,
                resizeMode: "contain",
                alignSelf: "center",
                marginBottom: 10,
              }}
              source={require("@/utils/images/reset.png")}
            />
          </View>
          <CustomInput
            control={control}
            name={`email`}
            placeholder={es.authentication.forgot.email.placeholder}
            styled={{
              text: styles.textInput,
              label: [styles.labelInput, global.topGray],
              error: styles.errorInput,
              input: [styles.inputContainer, global.bgWhiteSoft],
            }}
            icon={{
              name: "email-outline",
              color: "#404040",
              size: 25,
              type: "MTI",
            }}
            // rules={{
            //   required: "Email is required",
            //   pattern: { value: EMAIL_REGEX, message: "Invalid Email" }
            // }}
          />
          <Text style={[styles.code, global.topGray]}>
          {es.authentication.forgot.code}{" "}
            <Text style={styles.emailText}>{emailValue}</Text>
          </Text>
          <CustomButton
            text={es.authentication.forgot.button}
            handlePress={handleSubmit(() => navigation.navigate("ChangePassword", { email: emailValue}))}
            textStyles={[styles.textContinue, global.white]}
            buttonStyles={[styles.continue, global.mainBgColor]}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Forgot;
