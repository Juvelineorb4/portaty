import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Profile.module.css";
import CustomButton from "@/components/CustomButton";
import { settings } from "@/utils/constants/settings";
import CustomSelect from "@/components/CustomSelect";

const Profile = ({ navigation }) => {
  const global = require("@/utils/styles/global.js");
  const { buttons } = settings;

  return (
    <ScrollView style={[styles.container, global.bgWhite]}>
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
        <Text style={[styles.user, global.black]}>Christopher Alvarez</Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.titleSettings, global.black]}>My Shop</Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("Post_Product")}
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
                onPress={() => navigation.navigate(button.route)}
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
              <View>
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
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;
