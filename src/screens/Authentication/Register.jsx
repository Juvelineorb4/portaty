import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import styles from "@/utils/styles/Register.module.css";
import CustomText from "@/components/CustomText";
import CustomInput from "@/components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import Icon from "@/components/Icon";
// amplify
import { Auth } from "aws-amplify";
import { es } from "@/utils/constants/lenguage";

const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

const Register = () => {
  const global = require("@/utils/styles/global.js");
  const { control, handleSubmit, watch } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const pwd = watch("password");
  const navigation = useNavigation();
  const [active, setActive] = useState(true);
  /* Images Picker */
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    ImagePicker.getPendingResultAsync;
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 6],
      quality: 0.5,
    });
    if (!result.canceled) {
      const { uri } = result.assets[0];
      const response = await fetch(uri);
      const blob = await response.blob();
      // setBlobImages([...blobImages, blob]);
      // setImagesPostSelect([...imagesPostSelect, result.assets[0].uri]);
      setImage(result.assets[0].uri);
    }
  };
  const onHandleActive = () => {
    setActive(!active);
  };

  const onHandleRegister = async (data) => {
    const { email, name, password } = data;
    setIsLoading(true);
    try {
      const result = await Auth.signUp({
        username: email.trim(),
        password: password,
        attributes: {
          name: name.trim(),
        },
      });

      navigation.navigate("ConfirmAccount", {
        email: email,
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, global.bgWhite]}
      keyboardVerticalOffset={32}
    >
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={[styles.content, global.bgWhite]}>
        <ScrollView
          style={[styles.scroll, global.bgWhite]}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.content]}>
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
                height: 150,
                resizeMode: "contain",
                marginTop: -35,
                marginBottom: 15,
                alignSelf: "center",
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
                placeholder: styles.placeholder,
                input: [styles.inputContainer, global.bgWhiteSoft],
              }}
              text={`Usuario`}
              icon={require(`@/utils/images/profile_default.png`)}
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
                placeholder: styles.placeholder,
                input: [styles.inputContainer, global.bgWhiteSoft],
              }}
              text={`Correo electrónico`}
              icon={require(`@/utils/images/email.png`)}
              rules={{
                required: es.authentication.register.email.rules,
                pattern: { value: EMAIL_REGEX, message: "Inválido" },
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
                placeholder: styles.placeholder,
                input: [styles.inputContainer, global.bgWhiteSoft],
              }}
              text={`Contraseña`}
              icon={require(`@/utils/images/password.png`)}
              security={true}
              rules={{
                required: es.authentication.register.password.rules,
                minLength: {
                  value: 8,
                  message: "Mínimo 8 caracteres",
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
                placeholder: styles.placeholder,
                input: [styles.inputContainer, global.bgWhiteSoft],
              }}
              text={`Repetir contraseña`}
              icon={require(`@/utils/images/password.png`)}
              security={true}
              rules={{
                required: es.authentication.register.repeat.rules,
                validate: (value) => value == pwd || "No coincide",
              }}
            />
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 18,
                marginTop: 10,
              }}
            >
              <TouchableOpacity activeOpacity={1} onPress={pickImage}>
                <View
                  style={{
                    position: "relative",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: "contain",
                      marginLeft: 10,
                    }}
                    source={require("@/utils/images/rectangle-add.png")}
                  />
                  <Image
                    style={{
                      width: 95,
                      height: 95,
                      resizeMode: "contain",
                      marginLeft: 7,
                      left: 6,
                      borderRadius: 8,
                      position: "absolute",
                    }}
                    source={{ uri: image }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonImage}
                activeOpacity={1}
                onPress={pickImage}
              >
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "contain",
                    marginRight: 10,
                  }}
                  source={require("@/utils/images/picker.png")}
                />
                <Text style={styles.textButton}>Cargar imagen</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.controls}>
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
                <Text style={styles.terms}>
                  {es.authentication.register.terms}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ height: 60 }}>
          <CustomButton
            text={
              !isLoading ? (
                es.authentication.register.button
              ) : (
                <ActivityIndicator />
              )
            }
            handlePress={handleSubmit(onHandleRegister)}
            textStyles={[styles.textContinue, global.white]}
            buttonStyles={[styles.continue, global.mainBgColor]}
            disabled={isLoading}
          />
        </View>
      </View>

      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
};

export default Register;
