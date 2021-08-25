/** @format */

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import NewsScreen from "../screens/NewsScreen";

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "News") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#5a3eff",
        tabBarInactiveTintColor: "#38d8ff",
        tabBarActiveBackgroundColor: "#eaf1fb"
      })}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='News' component={NewsScreen} />
    </Tab.Navigator>
  );
}
