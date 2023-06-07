import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import CustomInput from "@/components/CustomInput";
import styles from "@/utils/styles/Login.module.css";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import Icon from "@/components/Icon";

// amplify
import { Auth } from "aws-amplify";
import { es } from "@/utils/constants/lenguage";

const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

const Login = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const [active, setActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false)

  const onHandleActive = () => {
    setActive(!active);
  };

  const onHandleLogin = async (data) => {
    const { email, password } = data;
    setIsLoading(true)
    try {
      await Auth.signIn(email, password);
    } catch (error) {
      console.error(error);
      setIsLoading(false)
    }
    setIsLoading(false)
  };

  const onHandleLoginWithGoogle = async () => {
    try {
      const google = await Auth.federatedSignIn({ provider: 'Google' });
      // El usuario ha iniciado sesión correctamente con Google
    } catch (error) {
      console.log('Error al iniciar sesión con Google:', error);
    }
  }
  return (
    <ScrollView style={styles.container}  showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.title}>{es.authentication.login.title}</Text>
        <Image
          style={{
            width: 300,
            height: 150,
            marginBottom: 15,
            resizeMode: "contain",
          }}
          source={require("@/utils/images/welcome.png")}
        />
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
        // rules={{
        //   required: "Email is required",
        //   pattern: { value: EMAIL_REGEX, message: "Invalid Email" },
        // }}
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
        // rules={{
        //   required: "Password is required",
        //   minLength: {
        //     value: 8,
        //     message: "Min 8 characters",
        //   },
        // }}
        />
      </View>
      <View style={styles.panel}>
        <CustomButton
          text={!isLoading ? es.authentication.login.button : <ActivityIndicator />}
          handlePress={handleSubmit(onHandleLogin)}
          textStyles={[styles.textLogin, global.white]}
          buttonStyles={[styles.login, global.bgBlack]}
          disabled={isLoading}
        />
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
            <Text style={styles.checkText}>{es.authentication.login.remember}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Forgot_App")}>
            <Text style={styles.forgot}>{es.authentication.login.forgot}</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.line} />
          <Text style={styles.continue}>{es.authentication.login.continue}</Text>
        </View>

        <View style={styles.social}>
          <View style={styles.iconSocial}>
            <TouchableOpacity
              onPress={onHandleLoginWithGoogle}
            >
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
          <Text style={styles.dont}>{es.authentication.login.question}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register_App")}
          >
            <Text style={styles.signupBtn}>{es.authentication.login.register}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
