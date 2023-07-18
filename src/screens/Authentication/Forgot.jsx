import {
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import styles from "@/utils/styles/Forgot.module.css";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import CustomText from "@/components/CustomText";
import { es } from "@/utils/constants/lenguage";

const Forgot = ({ navigation }) => {
  const global = require("@/utils/styles/global.js");
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: "",
      code: ["", "", "", "", "", ""],
    },
  });
  const emailValue = watch("email");
  const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  // const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, global.bgWhite]}
      keyboardVerticalOffset={32}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.content, global.bgWhite]}>
          {/* <View> */}
          <ScrollView
            style={[styles.content, global.bgWhite]}
            showsVerticalScrollIndicator={false}
          >
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
                  marginBottom: 25,
                }}
                source={require("@/utils/images/reset.png")}
              />
            </View>
            <CustomInput
              control={control}
              name={`email`}
              placeholder={`ejemplo@email.com`}
              styled={{
                text: styles.textInput,
                label: [styles.labelInput, global.topGray],
                error: styles.errorInput,
                placeholder: styles.placeholder,
                input: [styles.inputContainer, global.bgWhiteSoft],
              }}
              icon={require(`@/utils/images/email.png`)}
              text={`Correo electrónico`}
              rules={{
                required: "Ingresa el correo electrónico",
                pattern: { value: EMAIL_REGEX, message: "Invalido" },
              }}
            />
            <Text style={[styles.code, global.topGray]}>
              {es.authentication.forgot.code}{" "}
              <Text style={styles.emailText}>{emailValue}</Text>
            </Text>
          </ScrollView>
          <View style={{ height: 60 }}>
            <CustomButton
              text={es.authentication.forgot.button}
              handlePress={handleSubmit(() =>
                navigation.navigate("ChangePassword", { email: emailValue })
              )}
              textStyles={[styles.textContinue, global.white]}
              buttonStyles={[styles.continue, global.mainBgColor]}
            />
            {/* </View> */}
            <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}><Text>Hey</Text></TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Forgot;
