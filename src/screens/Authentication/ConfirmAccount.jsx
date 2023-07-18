import {
  Alert,
  Image,
  View,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "@/utils/styles/ConfirmAccount.module.css";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomText from "@/components/CustomText";
import EnterCode from "@/components/EnterCode";
import CustomButton from "@/components/CustomButton";

// amplify
import { Auth } from "aws-amplify";
import { es } from "@/utils/constants/lenguage";

const ConfirmAccount = () => {
  const global = require("@/utils/styles/global.js");
  const navigation = useNavigation();
  const route = useRoute();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: route.params?.email,
      code: ["", "", "", "", "", ""],
    },
  });

  const onHandleConfirm = async (data) => {
    const { code, email } = data;
    let newCode = "";
    code.forEach((item) => {
      newCode = newCode + item;
    });
    try {
      if (!code.lenght === 6) return Alert.alert("Error en ingresar codigo");
      await Auth.confirmSignUp(email, newCode, {
        forceAliasCreation: false,
        clientMetadata: {},
      });
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, global.bgWhite]}
      keyboardVerticalOffset={32}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.content, global.bgWhite]}>
          <ScrollView
            style={[styles.scroll, global.bgWhite]}
            showsVerticalScrollIndicator={false}
          >
            <CustomText
              styled={{
                title: styles.title,
                subtitle: styles.subtitle,
                container: styles.textContainer,
              }}
              title={es.authentication.account.entercode.title}
              subtitle={es.authentication.account.entercode.subtitle}
            />
            <Image
              style={{
                width: 300,
                height: 250,
                resizeMode: "contain",
                alignSelf: "center",
                marginTop: -80,
              }}
              source={require("@/utils/images/code.png")}
            />
            <EnterCode
              title={es.authentication.account.code.title}
              subtitle={es.authentication.account.code.subtitle}
              styled={{
                container: styles.enterCode,
              }}
              control={control}
            />
          </ScrollView>
          <View style={{ height: 60 }}>
            <CustomButton
              text={es.authentication.account.button}
              handlePress={handleSubmit(onHandleConfirm)}
              textStyles={[styles.textContinue, global.white]}
              buttonStyles={[styles.continue, global.mainBgColor]}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ConfirmAccount;
