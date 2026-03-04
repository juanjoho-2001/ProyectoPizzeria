import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import MainMenuScreen from "../screens/MainMenuScreen";
import CustomerScreen from "../screens/CustomerScreen";
import OrderScreen from "../screens/OrderScreen";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainMenu" component={MainMenuScreen} />
      <Stack.Screen name="Customer" component={CustomerScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
    </Stack.Navigator>
  );
}

