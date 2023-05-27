import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "@/utils/styles/Forgot.module.css";
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

  return (
    <View style={[styles.container, global.bgWhite]}>
      <View style={styles.content}>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
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
                width: 300,
                height: 160,
                resizeMode: "contain",
                alignSelf: "center",
                marginBottom: 10,
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
                text: styles.textInputPassword,
                label: [styles.labelInput, global.topGray],
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
              //   rules={{
              //     required: "Password is required",
              //     minLength: {
              //       value: 8,
              //       message: "Min 8 characters"
              //     },
              //   }}
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
                text: styles.textInputPassword,
                label: [styles.labelInput, global.topGray],
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
              //   rules={{
              //     required: "Password Repeat is required",
              //     validate: value =>
              //       value == pwd || 'Password do not match'
              //   }}
            />
          </View>
          <Text style={[styles.code, global.topGray]}>
            {es.authentication.password.code.email}{" "}
            <Text style={styles.emailText}>{route.params?.email}</Text> {es.authentication.password.code.expire}{" "}
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
            textStyles={[styles.textContinue, global.white]}
            buttonStyles={[styles.continue, global.mainBgColor]}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default ChangePassword;
