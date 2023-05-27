import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./Tabs/Drawer";
import LoginNavigator from "./Authentication/LoginNavigator";

// amplify
import { Auth, Hub, API, graphqlOperation } from 'aws-amplify'
import * as queries from '@/graphql/queries'
import * as mutations from '@/graphql/mutations'
// recoil
import { useRecoilState } from 'recoil'
import { userAutenticated } from '@/atoms/index'




const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const [userAuth, setUserAuth] = useRecoilState(userAutenticated);

  const checkUser = async () => {
    try {
      const result = await Auth.currentAuthenticatedUser({})
      setUserAuth(result)
    } catch (error) {
      setUserAuth(undefined)
      // console.error(error)
    }
  }

  useEffect(() => {
    // crear subscripcion
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log("HUB: ", event)
      console.log("EVENT HUB: ", data)
      switch (event) {
        case "signIn":
          setUserAuth(data)
          break;
        case "signOut":
          setUserAuth(undefined)
          break;
        case "confirmSignUp":

          break;
        case "autoSignIn":

          break;
        case "updateUserAttributes":

          break;
      }
    });
    // Preguntar si el usuario existe 
    checkUser()
    return unsubscribe;
  }, [])

  useEffect(() => {

    fecthalgo();
  }, [])
  const fecthalgo = async () => {

  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={`Login`}>
        {!userAuth && <Stack.Screen
          name={`Login_Welcome`}
          component={LoginNavigator}
          options={{
            headerShown: false,
          }}
        />}
        <Stack.Screen
          name={`Home`}
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
