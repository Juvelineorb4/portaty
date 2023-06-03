import { Text, View } from "react-native";
import React from "react";
import styles from "@/utils/styles/Permissions.module.css";
import CustomText from "@/components/CustomText";
import { permissions } from "@/utils/constants/permissions";
import CustomSelect from "@/components/CustomSelect";
import { ScrollView } from "react-native-gesture-handler";
import { es } from "@/utils/constants/lenguage";

const Permissions = () => {
  const global = require('@/utils/styles/global.js');
  const { permits } = permissions;

  return (
    <ScrollView style={[styles.container, global.bgWhite]} showsVerticalScrollIndicator={false}>
      <CustomText
        title={es.profile.permissions.title}
        subtitle={es.profile.permissions.subtitle}
        styled={{
          title: [styles.title, global.black],
          subtitle: styles.subtitle,
          container: styles.textContainer,
        }}
      />
      {permits.map((item, index) => (
        <View key={index}>
          <View style={[styles.line, global.bgWhiteSmoke]} />
          <CustomSelect
            title={item.title}
            subtitle={item.subtitle}
            styled={{
              text: {
                container: [styles.textContainerSelect, global.topGray],
                title: [styles.textTitleSelect, global.black],
                subtitle: styles.textSubtitleSelect,
              },
              container: styles.containerSelect,
              iconLeft: styles.iconLeft,
              iconRight: styles.iconRight,
            }}
            toogle={item.toogle}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Permissions;
