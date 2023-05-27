// android id : 959689221062-lsif8545oquitok7ckk6fklj4aab6tov.apps.googleusercontent.com
import Navigation from "@/routes/Navigation";
import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import { useFonts } from "expo-font";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message

// amplify 
import { Amplify } from 'aws-amplify';
import awsconfig from '@/aws-exports';

// stripe
import { StripeProvider } from '@stripe/stripe-react-native'

// authentication federators 
import * as WebBrowser from "expo-web-browser";
import * as Linking from 'expo-linking';

const isLocalHost = Boolean(__DEV__);


const [localRedirectSignIn, productionRedirectSignIn] =
  awsconfig.oauth.redirectSignIn.split(",");
console.log(localRedirectSignIn)
const [localRedirectSignOut, productionRedirectSignOut] =
  awsconfig.oauth.redirectSignOut.split(",");
console.log("Islocal: ", awsconfig.oauth.redirectSignIn.split(","))
async function urlOpener(url, redirectUrl) {
  const { type, url: newUrl } = await WebBrowser.openAuthSessionAsync(
    url,
    redirectUrl
  );
  console.log("TYPE: ", type)
  if (type === "success" && Platform.OS === "ios") {
    WebBrowser.dismissBrowser();
    return Linking.openURL(newUrl);
  }
}

const updatedConfig = {
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    redirectSignIn: isLocalHost
      ? localRedirectSignIn
      : productionRedirectSignIn,
    redirectSignOut: isLocalHost
      ? localRedirectSignOut
      : productionRedirectSignOut,
    urlOpener,
  },
};


Amplify.configure({
  ...updatedConfig,
  API: {
    endpoints: [
      {
        name: "api-gateway-dev",
        endpoint: "https://h5920e8h3l.execute-api.us-east-1.amazonaws.com/dev"
      },
    ]
  }
});

const STRIPE_KEY = 'pk_test_51Mr0b4ATCZIkEkhB3Rt0AOz9zZ0UaseZRy9CCEomDtT0pxfoX0o64fYlwHxRJszj5OoqHXfb3lX8NQvGcQmRQgws00vTrph7XJ'

export default function App() {
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

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RecoilRoot>
          <StripeProvider publishableKey={STRIPE_KEY}>
            <Navigation />
          </StripeProvider>
        </RecoilRoot>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
