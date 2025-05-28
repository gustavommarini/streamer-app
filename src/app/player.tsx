import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/colors";
import { MediaPlayer } from "@/components";

const PlayerScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      <MediaPlayer />
    </SafeAreaView>
  );
};

export default PlayerScreen;
