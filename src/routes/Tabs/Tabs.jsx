import React, { useReducer, useRef } from "react";
import { Pressable, StatusBar, StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import OrdersNavigator from "./OrdersNavigator";
import ProfileNavigator from "./ProfileNavigator";
import Svg, { Path } from "react-native-svg";
import Animated, {
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
} from "react-native-reanimated";
import CartNavigator from "./CartNavigator";

const Tab = createBottomTabNavigator();
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const Tabs = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Tab.Navigator
        id="Tabs_1"
        tabBar={(props) => <AnimatedTabBar {...props} />}
        initialRouteName={`Home_Tab`}
      >
        <Tab.Screen
          name="Home_Tab"
          options={{
            headerShown: false,
            tabBarIcon: {
              activeIcon: require("@/utils/images/home.gif"),
              inActiveIcon: require("@/utils/images/home.png"),
            },
            tabBarLabel: "Home",
          }}
          component={HomeNavigator}
        />
        <Tab.Screen
          name="Cart_Tab"
          options={{
            headerShown: false,
            tabBarIcon: {
              activeIcon: require("@/utils/images/cart.gif"),
              inActiveIcon: require("@/utils/images/cart.png"),
            },
            tabBarLabel: "Cart",
          }}
          component={CartNavigator}
        />
        <Tab.Screen
          name="Orders_Tab"
          options={{
            headerShown: false,
            tabBarIcon: {
              activeIcon: require("@/utils/images/orders.png"),
              inActiveIcon: require("@/utils/images/orders.png"),
            },
            tabBarLabel: "Orders",
          }}
          component={OrdersNavigator}
        />
        <Tab.Screen
          name="Profile_Tab"
          options={{
            headerShown: false,
            tabBarIcon: {
              activeIcon: require("@/utils/images/add.gif"),
              inActiveIcon: require("@/utils/images/add.png"),
            },
            tabBarLabel: "Settings",
          }}
          component={ProfileNavigator}
        />
      </Tab.Navigator>
    </>
  );
};

const AnimatedTabBar = ({
  state: { index: activeIndex, routes },
  navigation,
  descriptors,
}) => {
  const reducer = (state, action = { x, index }) => {
    return [...state, { x: action.x, index: action.index }];
  };

  const [layout, dispatch] = useReducer(reducer, []);

  const handleLayout = (event, index) => {
    dispatch({ x: event.nativeEvent.layout.x, index });
  };
  const xOffset = useDerivedValue(() => {
    if (layout.length !== routes.length) return 0;
    return [...layout].find(({ index }) => index === activeIndex).x - 25;
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
    };
  });

  return (
    <View style={[styles.tabBar, { paddingBottom: 5 }]}>
      <AnimatedSvg
        width={110}
        height={60}
        viewBox="0 0 110 60"
        style={[styles.activeBackground, animatedStyles]}
      >
        <Path
          fill="#FFFFFF"
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>

      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const { options } = descriptors[route.key];
          return (
            <TabBarComponent
              key={route.key}
              active={active}
              options={options}
              onLayout={(e) => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
              route={route.name}
            />
          );
        })}
      </View>
    </View>
  );
};

const TabBarComponent = ({ active, options, onLayout, onPress, route }) => {
  const ref = useRef(null);

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, { duration: 250 }),
        },
      ],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 1, { duration: 250 }),
    };
  });

  return (
    <Pressable
      onPress={() => {
        onPress();
        // console.log(route)
      }}
      onLayout={onLayout}
    >
      <Animated.View style={[animatedComponentCircleStyles]} />
      {active ? (
        <Animated.View
          style={[
            styles.component,
            animatedIconContainerStyles,
            { backgroundColor: "#ffa424" },
          ]}
        >
          {active ? (
            <Image
              style={{
                width: 33,
                height: 33,
                resizeMode: "contain",
              }}
              source={options.tabBarIcon.activeIcon}
            />
          ) : (
            <Image
              style={{
                width: 27,
                height: 27,
                resizeMode: "contain",
              }}
              source={options.tabBarIcon.inActiveIcon}
            />
          )}
        </Animated.View>
      ) : (
        <Animated.View
          style={[
            styles.componentinActive,
            animatedIconContainerStyles,
            { backgroundColor: "#ffa424" },
          ]}
        >
          {active ? (
            <Image
              style={{
                width: 33,
                height: 33,
                resizeMode: "contain",
              }}
              source={options.tabBarIcon.activeIcon}
            />
          ) : (
            <Image
              style={{
                width: 27,
                height: 27,
                resizeMode: "contain",
              }}
              source={options.tabBarIcon.inActiveIcon}
            />
          )}
        </Animated.View>
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7FF5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabBar: {
    backgroundColor: "#ffa424",
  },
  activeBackground: {
    position: "absolute",
    zIndex: -100,
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  component: {
    position: "relative",
    zIndex: 2,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -5,
  },
  componentinActive: {
    position: "relative",
    zIndex: 2,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: "#ffa424",
  },
  iconContainer: {
    // position: "absolute",
    // zIndex: 0,
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
  },
});
export default Tabs;
