import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Linking,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "@/components/CustomInput";
import styles from "@/utils/styles/Login.module.css";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import Icon from "@/components/Icon";

// amplify
import { Auth, API } from "aws-amplify";
import { es } from "@/utils/constants/lenguage";
import * as customAuth from "@/graphql/CustomQueries/Authentication";
import * as Device from "expo-device";
import * as WebBrowser from "expo-web-browser";
const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

const Login = ({ navigation }) => {
  const global = require("@/utils/styles/global.js");
  const { control, handleSubmit, setError } = useForm();
  const [active, setActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorActive, setErrorActive] = useState(false);
  const onHandleActive = () => {
    setActive(!active);
  };
  const openCustomURL = () => {
    const url = "https://portaty.com/app/alert?str=hello%20world";
    Linking.openURL(url).catch((err) =>
      console.error("Error al abrir la URL:", err)
    );
  };

  const onHandleLogin = async (data) => {
    const { email, password } = data;
    setIsLoading(true);
    try {
      await Auth.signIn(email, password);
      setErrorActive(false);
    } catch (error) {
      console.log(error.toString());
      setErrorActive(true);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const onHandleLoginWithGoogle = async () => {
    try {
      const google = await Auth.federatedSignIn({ provider: "Google" });
      // El usuario ha iniciado sesión correctamente con Google
    } catch (error) {
      console.log("Error al iniciar sesión con Google:", error);
    }
  };

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync("https://expo.dev");
    console.log(result);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, global.bgWhite]}
      keyboardVerticalOffset={32}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={[styles.scroll, global.bgWhite]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 30,
          }}
          automaticallyAdjustContentInsets={false}
        >
          <View style={styles.content}>
            <Text style={styles.title}>{es.authentication.login.title}</Text>
            <Image
              style={{
                width: 300,
                height: 100,
                marginBottom: 25,
                resizeMode: "contain",
              }}
              source={require("@/utils/images/welcome.png")}
            />
            {errorActive && (
              <Text style={styles.errorInputMain}>
                Correo electrónico y/o contraseña incorrectos
              </Text>
            )}
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
                required: "Correo electrónico requerido",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Correo electrónico invalido",
                },
              }}
            />
            <CustomInput
              control={control}
              name={`password`}
              placeholder={`**********`}
              styled={{
                text: styles.textInput,
                label: [styles.labelInput, global.topGray],
                error: styles.errorInput,
                placeholder: styles.placeholder,
                input: [styles.inputContainer, global.bgWhiteSoft],
              }}
              text={`Contraseña`}
              icon={require(`@/utils/images/password.png`)}
              security={true}
              rules={{
                required: "Contraseña requerida",
                minLength: {
                  value: 8,
                  message: "8 caracteres minimo",
                },
              }}
            />
          </View>
          <View style={styles.panel}>
            <View style={{ height: 60 }}>
              <CustomButton
                text={
                  !isLoading ? (
                    es.authentication.login.button
                  ) : (
                    <ActivityIndicator />
                  )
                }
                handlePress={handleSubmit(onHandleLogin)}
                textStyles={[styles.textLogin, global.white]}
                buttonStyles={[styles.login, global.mainBgColor]}
                disabled={isLoading}
              />
            </View>

            <View style={styles.options}>
              <View style={styles.check}>
                {active ? (
                  <TouchableOpacity
                    style={styles.boxActive}
                    onPress={onHandleActive}
                  >
                    <Icon
                      name={`check`}
                      color={`#ffffff`}
                      size={15}
                      type={`MTI`}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.box}
                    onPress={onHandleActive}
                  ></TouchableOpacity>
                )}
                <Text style={styles.checkText}>
                  {es.authentication.login.remember}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Forgot_App")}
              >
                <Text style={styles.forgot}>
                  {es.authentication.login.forgot}
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <View style={styles.line} />
              <Text style={styles.continue}>
                {es.authentication.login.continue}
              </Text>
            </View>

            <View style={styles.social}>
              <View style={styles.iconSocial}>
                <TouchableOpacity onPress={onHandleLoginWithGoogle}>
                  <Image
                    style={{
                      width: 28,
                      height: 28,
                      resizeMode: "contain",
                    }}
                    source={require("@/utils/images/google.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.signup}>
              <Text style={styles.dont}>
                {es.authentication.login.question}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Register_App")}
              >
                <Text style={styles.signupBtn}>
                  {es.authentication.login.register}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openCustomURL()}>
                <Text style={styles.signupBtn}>---URL HTTPS3</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
