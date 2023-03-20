import { Alert, Image, View } from "react-native";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "@/utils/styles/ConfirmAccount.module.css";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomText from "@/components/CustomText";
import EnterCode from "@/components/EnterCode";
import CustomButton from "@/components/CustomButton";

const ConfirmAccount = () => {
  const global = require("@/utils/styles/global.js");
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      code: ["", "", "", "", "", ""],
    },
  });

  //   const omHandleConfirm = async (data) => {
  //     const { email, code } = data
  //     let newCode = ""
  //     code.forEach(item => {
  //       newCode = newCode + item
  //     });

  //     try {
  //       if (!code.lenght === 6) return console.log("no tiene 6");
  //       await Auth.confirmSignUp(email, newCode)
  //     } catch (error) {
  //       if (error.message == "User cannot be confirmed. Current status is CONFIRMED") return navigation.navigate("Home")
  //       Alert.alert(error.message)
  //     }
  //   }

  return (
    <View style={[styles.content, global.bgWhite]}>
      <CustomText
        styled={{
          title: styles.title,
          subtitle: styles.subtitle,
          container: styles.textContainer,
        }}
        title={`Enter code`}
        subtitle={`We have sent you a confirmation code on the email ''`}
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
        title={`Didn't you get your code?`}
        subtitle={"Send the code again"}
        styled={{
          container: styles.enterCode,
        }}
        control={control}
      />
      <CustomButton
        text={`Confirm Account`}
        // handlePress={handleSubmit(omHandleConfirm)}
        textStyles={[styles.textContinue, global.white]}
        buttonStyles={[styles.continue, global.mainBgColor]}
      />
    </View>
  );
};

export default ConfirmAccount;
