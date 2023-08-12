import {
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
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
  const pwd = watch("password");
  const onHandleConfirm = () => navigation.replace("Login_Welcome");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, global.bgWhite]}
      keyboardVerticalOffset={32}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.scroll, global.bgWhite]}>
          <ScrollView
            style={[styles.scroll, global.bgWhite]}
            showsVerticalScrollIndicator={false}
          >
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
                  rules={{
                    required: es.authentication.register.password.rules,
                    minLength: {
                      value: 8,
                      message: "Mínimo 8 caracteres",
                    },
                  }}
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
                  rules={{
                    required: es.authentication.register.repeat.rules,
                    validate: (value) => value == pwd || "No coincide",
                  }}
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
            </View>
          </ScrollView>
          <View style={{ height: 60 }}>
            <CustomButton
              text={es.authentication.password.button}
              handlePress={onHandleConfirm}
              textStyles={[styles.textContinue, global.white]}
              buttonStyles={[styles.continue, global.mainBgColor]}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;
