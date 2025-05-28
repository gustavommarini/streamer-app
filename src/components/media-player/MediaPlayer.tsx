import React, { useRef } from "react";
import { ScrollView, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Video, { VideoRef } from "react-native-video";
import { useMediaStore } from "@/store";
import { getTypeColor } from "@/utils";
import { PlayerControls } from "./components";
import { styles } from "./media-player.styles";
import { ProgressType } from "./media-player.types";

export const MediaPlayer = () => {
  const { currentTrack, isPlaying, setCurrentTime, currentTime, setIsPlaying } =
    useMediaStore();
  const params = useLocalSearchParams();
  const { from = "storage" } = params;
  const videoRef = useRef<VideoRef>(null);

  const handleProgress = (progObj: Readonly<ProgressType>) => {
    setCurrentTime(progObj.currentTime);
  };

  const handleOnEnd = () => {
    setIsPlaying(false);
  };

  if (!currentTrack) {
    return <Text>Error</Text>;
  }

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.mediaContainer}>
          <Video
            ref={videoRef}
            source={{ uri: currentTrack.url }}
            style={styles.videoPlayer}
            resizeMode="contain"
            paused={!isPlaying}
            onProgress={handleProgress}
            onEnd={handleOnEnd}
            onLoad={() => {
              from === "storage" && videoRef.current?.seek(currentTime);
            }}
          />
        </View>
        <PlayerControls />

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{currentTrack.title}</Text>
          <Text style={styles.genre}>
            {currentTrack.genre} - {currentTrack.year}
          </Text>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>
              {currentTrack.rating
                ? `★ ${currentTrack.rating.toFixed(1)}`
                : "Nessuna valutazione"}
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
