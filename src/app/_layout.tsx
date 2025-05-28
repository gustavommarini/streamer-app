import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faVideo, faSkull } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "@/constants";
import "../../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    FjallaOne: require("../../assets/fonts/FjallaOne-Regular.ttf"),
    Lato: require("../../assets/fonts/Lato-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: COLORS.tabActive,
          tabBarInactiveTintColor: COLORS.tabInactive,
          tabBarStyle: {
            elevation: 0,
            borderTopWidth: 1,
            borderTopColor: COLORS.border,
            backgroundColor: COLORS.background,
          },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.border,
            backgroundColor: COLORS.background,
          },
          headerTitleStyle: {
            fontWeight: "600",
            color: COLORS.primary,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Playlist",
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faHome} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="player"
          options={{
            title: "Player",
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faVideo} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="credits"
          options={{
            title: "Credits",
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faSkull} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
