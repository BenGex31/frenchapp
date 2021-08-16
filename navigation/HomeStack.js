/** @format */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import NewsScreen from "../screens/NewsScreen";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='News' component={NewsScreen} />
    </Stack.Navigator>
  );
}
