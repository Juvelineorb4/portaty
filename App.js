import { useCallback, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  SafeAreaProvider,
  SafeAreaView as SafeAreaAndroid,
} from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import { useFonts } from "expo-font";
import * as Linking from "expo-linking";
import { Platform, SafeAreaView as SafeAreaIOS, Alert } from "react-native";
import Navigation from "@/routes/Navigation";

// amplify
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports.js";

// stripe
import { StripeProvider } from "@stripe/stripe-react-native";

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
//expo
import Constants from "expo-constants";

// configuracion de redireccion de url
const isLocalhost = Boolean(__DEV__);
let redirectSignIn = "";
let redirectSignOut = "";

const [localRedirectSignIn, expoGoRedirectSignIn, productionRedirectSignIn] =
  awsconfig.oauth.redirectSignIn.split(",");

const [localRedirectSignOut, expoGoRedirectSignOut, productionRedirectSignOut] =
  awsconfig.oauth.redirectSignOut.split(",");

if (isLocalhost) {
  redirectSignIn = localRedirectSignIn;
  redirectSignOut = localRedirectSignOut;
} else if (Constants.appOwnership === "expo") {
  redirectSignIn = expoGoRedirectSignIn;
  redirectSignOut = expoGoRedirectSignOut.slice(0, -1);
} else {
  redirectSignIn = productionRedirectSignIn;
  redirectSignOut = productionRedirectSignOut;
}

// async function urlOpener(url, redirectUrl) {
//   const { type, url: newUrl } = await WebBrowser.openAuthSessionAsync(
//     url,
//     redirectUrl
//   );

//   console.log("URL: ", url);
//   console.log("REDIRECTURL", redirectUrl);
//   console.log("TYPE: ", type);
//   console.log("NEWURL: ", newUrl);

//   if (type === "success" && Platform.OS === "ios") {
//     WebBrowser.dismissBrowser();
//     return Linking.openURL(newUrl);
//   }
// }

const updatedAwsConfig = {
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    redirectSignIn: redirectSignIn,
    redirectSignOut: redirectSignOut,
  },
};

Amplify.configure({
  ...updatedAwsConfig,
  API: {
    endpoints: [
      {
        name: "api-gateway-dev",
        endpoint: "https://h5920e8h3l.execute-api.us-east-1.amazonaws.com/dev",
      },
    ],
  },
});

const STRIPE_KEY =
  "pk_test_51Mr0b4ATCZIkEkhB3Rt0AOz9zZ0UaseZRy9CCEomDtT0pxfoX0o64fYlwHxRJszj5OoqHXfb3lX8NQvGcQmRQgws00vTrph7XJ";

export default function App() {
  const url = Linking.useURL();
  const global = require("@/utils/styles/global.js");
  const [fontsLoaded] = useFonts({
    thin: require("@/utils/fonts/Montserrat-Thin.ttf"),
    regular: require("@/utils/fonts/Montserrat-Regular.ttf"),
    light: require("@/utils/fonts/Montserrat-Light.ttf"),
    bold: require("@/utils/fonts/Montserrat-Bold.ttf"),
    extralight: require("@/utils/fonts/Montserrat-ExtraLight.ttf"),
    medium: require("@/utils/fonts/Montserrat-Medium.ttf"),
    black: require("@/utils/fonts/Montserrat-Black.ttf"),
    semibold: require("@/utils/fonts/Montserrat-SemiBold.ttf"),
    thinItalic: require("@/utils/fonts/Montserrat-ThinItalic.ttf"),
    mediumItalic: require("@/utils/fonts/Montserrat-MediumItalic.ttf"),
    lightItalic: require("@/utils/fonts/Montserrat-LightItalic.ttf"),
    boldItalic: require("@/utils/fonts/Montserrat-BoldItalic.ttf"),
  });

  const handleURL = (url) => {
    const { hostname, path, queryParams } = Linking.parse(url);
    Alert.alert("LINKING: ", JSON.stringify(Linking.parse(url)));
    if (path === "alert") {
      console.log(queryParams.str);
      // Alert.alert(queryParams.str);
    } else {
      console.log(path, queryParams);
    }
  };

  useEffect(() => {
    Alert.alert("URL: ", url);
    if (url) {
      handleURL(url);
    } else {
      console.log("No URL");
    }
  }, [url]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (Platform.OS === "ios")
    return (
      <SafeAreaIOS style={{ flex: 1 }}>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <RecoilRoot>
              <StripeProvider publishableKey={STRIPE_KEY}>
                <Navigation />
              </StripeProvider>
            </RecoilRoot>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </SafeAreaIOS>
    );

  return (
    <SafeAreaAndroid style={{ flex: 1 }}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RecoilRoot>
            <StripeProvider publishableKey={STRIPE_KEY}>
              <StatusBar style="dark" backgroundColor="#fff" />
              <Navigation />
            </StripeProvider>
          </RecoilRoot>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </SafeAreaAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
