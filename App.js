import { StatusBar as ExpoSattusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./src/features/screens/";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoSattusBar backgroundColor="#0556" style="light" />
    </>
  );
  
};
