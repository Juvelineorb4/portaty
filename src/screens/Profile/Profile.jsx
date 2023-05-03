import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/Profile.module.css";
import CustomButton from "@/components/CustomButton";
import { settings } from "@/utils/constants/settings";
import CustomSelect from "@/components/CustomSelect";

// amplify
import { Auth, API } from 'aws-amplify'
import * as queries from '@/graphql/queries'
import * as mutations from '@/graphql/mutations'
// recoil
import { useRecoilValue } from 'recoil'
import { userAutenticated } from '@/atoms'


const Profile = ({ navigation }) => {
  const global = require("@/utils/styles/global.js");
  const userAuth = useRecoilValue(userAutenticated)
  const [userShop, setUserShop] = useState(undefined)
  const { buttons } = settings;
  const onHandleLogout = async () => {
    await Auth.signOut();

    setTimeout(() => {
      navigation.navigate("Login_Welcome")
    }, 500);
  }
  useEffect(() => {
    console.log(userAuth.username)
    fecthShop();
  }, [])

  const fecthShop = async () => {
    const result = await API.graphql({
      query: queries.getCustomerShop,
      variables: { userID: userAuth.username },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    setUserShop(result.data.getCustomerShop)
  }

 


  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
      {console.log(userShop)}
      <View style={styles.profile}>
        <View style={styles.containerImage}>
          <View style={styles.image}></View>
          <CustomButton
            buttonStyles={[styles.edit, global.bgBlack]}
            icon={{
              status: true,
              name: "image-edit-outline",
              size: 20,
              color: "#ffffff",
              type: `MTI`,
            }}
          />
        </View>
        <Text style={[styles.user, global.black]}></Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.titleSettings, global.black]}>My Shop: </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("Post_Navigator")}
        >
          <View style={[styles.line, global.bgWhiteSmoke]} />
          <CustomSelect
            title={"Post"}
            subtitle={"Post a product for your shop"}
            styled={{
              text: {
                container: styles.textContainerSelect,
                title: [styles.textTitleSelect, global.black],
                subtitle: [styles.textSubtitleSelect, global.topGray],
              },
              container: styles.containerSelect,
              iconLeft: [styles.iconLeft, global.mainBgColor],
              iconRight: styles.iconRight,
            }}
            icon={{
              left: {
                name: "plus-box-outline",
                size: 20,
                color: "white",
                type: "MTI",
              },
              right: {
                name: "arrow-right",
                size: 24,
                color: "#404040",
                type: "MTI",
              },
            }}
            toogle={false}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={[styles.titleSettings, global.black]}>Settings</Text>
        {buttons.map((button, index) => (
          <View key={index}>
            {button.route ? (
              <TouchableOpacity
                activeOpacity={1}
                onPress={onHandleLogout}
              >
                <View style={[styles.line, global.bgWhiteSmoke]} />
                <CustomSelect
                  title={button.title}
                  subtitle={button.subtitle}
                  styled={{
                    text: {
                      container: styles.textContainerSelect,
                      title: [styles.textTitleSelect, global.black],
                      subtitle: [styles.textSubtitleSelect, global.topGray],
                    },
                    container: styles.containerSelect,
                    iconLeft: [styles.iconLeft, global.mainBgColor],
                    iconRight: styles.iconRight,
                  }}
                  icon={button.icon}
                  toogle={button.toogle}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => Auth.signOut()}>
                <View style={[styles.line, global.bgWhiteSmoke]} />
                <CustomSelect
                  title={button.title}
                  subtitle={button.subtitle}
                  styled={{
                    text: {
                      container: styles.textContainerSelect,
                      title: [styles.textTitleSelect, global.black],
                      subtitle: [styles.textSubtitleSelect, global.topGray],
                    },
                    container: styles.containerSelect,
                    iconLeft: [styles.iconLeft, global.bgBlack],
                    iconRight: styles.iconRight,
                  }}
                  icon={button.icon}
                  toogle={button.toogle}
                />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;
