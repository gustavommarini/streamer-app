import React from "react";
import { ScrollView, View, Text } from "react-native";
import Video from "react-native-video";
import { useMediaStore } from "@/store";
import { styles } from "./media-player.styles";
import { getTypeColor } from "@/utils";
import { PlayerControls } from "./components";

export const MediaPlayer = () => {
  const currentTrack = useMediaStore((state) => state.currentTrack);

  if (!currentTrack) {
    return <Text>Error</Text>;
  }

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.mediaContainer}>
          <Video
            source={{ uri: currentTrack.url }}
            style={styles.videoPlayer}
            resizeMode="contain"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{currentTrack.title}</Text>
          <Text style={styles.genre}>
            {currentTrack.genre} - {currentTrack.year}
          </Text>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>
              {currentTrack.rating
                ? `★ ${currentTrack.rating.toFixed(1)}`
                : "Not rated"}
            </Text>
            <View
              style={[
                styles.typeTag,
                { backgroundColor: getTypeColor(currentTrack.type) },
              ]}
            >
              <Text style={styles.typeText}>{currentTrack.type}</Text>
            </View>
          </View>

          <Text style={styles.descriptionTitle}>About</Text>
          <Text style={styles.description}>{currentTrack.description}</Text>
        </View>
      </ScrollView>
    </>
  );
};
