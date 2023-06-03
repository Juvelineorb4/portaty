import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "@/utils/styles/ConfirmPassword.module.css";
import CustomText from "@/components/CustomText";
import EnterCode from "@/components/EnterCode";
import { useForm } from "react-hook-form";
import CustomTimer from "@/components/CustomTimer";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { es } from "@/utils/constants/lenguage";

const ChangePassword = ({ navigation, route }) => {
  const global = require("@/utils/styles/global.js");
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      code: ["", "", "", "", "", ""],
    },
  });
  const onHandleConfirm = () => navigation.replace('Login_Welcome')
  return (
    <ScrollView style={[styles.container, global.bgWhite]} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
          <View style={styles.textContainer}>
            <CustomText
              styled={{
                title: [styles.title, global.black],
                container: styles.textContainer,
              }}
              title={es.authentication.password.create}
            />
            <Image
              style={{
                width: 200,
                height: 145,
                resizeMode: "contain",
                alignSelf: "center",
                marginBottom: 20,
              }}
              source={require("@/utils/images/reset.png")}
            />
          </View>
          <View>
            <CustomInput
              control={control}
              name={`password`}
              placeholder={es.authentication.password.new.placeholder}
              styled={{
                text: styles.textInput,
                label: [styles.labelInput, global.topGray],
                error: styles.errorInput,
                placeholder: styles.placeholder,
                input: [styles.inputContainer, global.bgWhiteSoft],
              }}
              icon={require(`@/utils/images/email.png`)}
              text={`Nueva contraseña`}
              security={true}
              // rules={{
              //   required: "Email is required",
              //   pattern: { value: EMAIL_REGEX, message: "Invalid Email" },
              // }}
            />
            {/* <Text style={styles.textRules}>
              Minimum 8 characters, with a combination of upper and lower case
              letters, characters and numbers.
            </Text> */}
            <CustomInput
              control={control}
              name={`password-confirm`}
              placeholder={es.authentication.password.confirm.placeholder}
              styled={{
                text: styles.textInput,
                label: [styles.labelInput, global.topGray],
                error: styles.errorInput,
                placeholder: styles.placeholder,
                input: [styles.inputContainer, global.bgWhiteSoft],
              }}
              icon={require(`@/utils/images/email.png`)}
              text={`Repetir contraseña`}
              security={true}
              // rules={{
              //   required: "Email is required",
              //   pattern: { value: EMAIL_REGEX, message: "Invalid Email" },
              // }}
            />
          </View>
          <Text style={[styles.code, global.topGray]}>
            {es.authentication.password.code.email}{" "}
            <Text style={styles.emailText}>{route.params?.email}</Text>{" "}
            {es.authentication.password.code.expire}{" "}
            {route.params?.email && (
              <CustomTimer
                styled={{
                  timer: styles.timer,
                }}
                time={{
                  string: "10:00",
                  seconds: 600,
                }}
              />
            )}
          </Text>
          <EnterCode
            title={es.authentication.password.entercode.title}
            subtitle={es.authentication.password.entercode.subtitle}
            styled={{
              container: styles.enterCode,
            }}
            control={control}
          />
          <CustomButton
            text={es.authentication.password.button}
            handlePress={onHandleConfirm}
            textStyles={[styles.textContinue, global.white]}
            buttonStyles={[styles.continue, global.mainBgColor]}
          />
      </View>
    </ScrollView>
  );
};

export default ChangePassword;
