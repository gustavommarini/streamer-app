import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useMediaStore } from "@/store";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { styles } from "./player-controls.styles";
import { COLORS } from "@/constants";

export const PlayerControls = () => {
  const { isPlaying, currentTime, togglePlayPause, currentTrack } =
    useMediaStore();

  return (
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.secondaryButton}>
          <FontAwesomeIcon icon={faBackward} color={COLORS.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.playButton} onPress={togglePlayPause}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} color={COLORS.background} />
          ) : (
            <FontAwesomeIcon icon={faPlay} color={COLORS.background} />
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <FontAwesomeIcon icon={faForward} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
