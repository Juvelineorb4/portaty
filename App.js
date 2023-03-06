import Navigation from "@/routes/Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RecoilRoot>
          <Navigation />
        </RecoilRoot>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
