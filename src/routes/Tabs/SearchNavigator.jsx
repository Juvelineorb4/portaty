import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useRoute } from "@react-navigation/native";
// screens
import Recent from '@/screens/Search/Recent'
import Result from '@/screens/Search/Result'

// Header
import Header from './HeaderTabs/index'

const Stack = createNativeStackNavigator();
const SearchNavigator = () => {
    const router = useRoute()
    useEffect(() => {
        console.log(router.name);
    }, []);
    return (
        <Stack.Navigator
            initialRouteName={`Search_Recent`}
        // screenOptions={{ header: (props) => <Header {...props} /> }}
        >
            <Stack.Screen
                name="Search_Recent"
                component={Recent}
                options={{ header: (props) => <Header {...props} /> }}
            />
        </Stack.Navigator>
    );
}

export default SearchNavigator

