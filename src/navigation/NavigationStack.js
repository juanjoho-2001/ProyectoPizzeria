import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import MainMenuScreen from "../screens/MainMenuScreen";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainMenu" component={MainMenuScreen} />
    </Stack.Navigator>
  );
}