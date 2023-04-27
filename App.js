import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { MainContainer } from "./style";
import { useFonts } from "expo-font";
import Menu from "./src/navigation/Stack";
import { Analytics, ActiveRoute as getActiveRouteName } from "./src/utils";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [routeName, setRouteName] = useState("Home");
  const [fontsLoaded] = useFonts({
    Itim: require("./src/assets/fonts/Itim-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Analytics segmentClient={routeName}>
      <MainContainer>
        <NavigationContainer
          onStateChange={(state) => {
            const newRouteName = getActiveRouteName(state);
            if (routeName !== newRouteName) {
              setRouteName(newRouteName);
            }
          }}
        >
          <Menu />
        </NavigationContainer>
        <StatusBar style="light" />
      </MainContainer>
    </Analytics>
  );
}
