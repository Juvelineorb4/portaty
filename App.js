import Navigation from "@/routes/Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";

// amplify 
import { Amplify } from 'aws-amplify';
import awsconfig from '@/aws-exports';
Amplify.configure(awsconfig);

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
