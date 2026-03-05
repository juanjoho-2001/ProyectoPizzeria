import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import { OrderProvider } from './context/OrderContext';

export default function App() {
  return (
    <OrderProvider>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </OrderProvider>
  );
}
