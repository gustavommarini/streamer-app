import React from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaStore } from "@/store";
import { COLORS } from "@/constants";
import { styles } from "./player-controls.styles";

export const PlayerControls = () => {
  const { isPlaying, togglePlayPause } = useMediaStore();

  const notImplementedAlert = () => {
    Alert.alert("Non è ancora stato implementato, ma visivamente era carino.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={notImplementedAlert}
        >
          <FontAwesomeIcon icon={faBackward} color={COLORS.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.playButton} onPress={togglePlayPause}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} color={COLORS.background} />
          ) : (
            <FontAwesomeIcon icon={faPlay} color={COLORS.background} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={notImplementedAlert}
        >
          <FontAwesomeIcon icon={faForward} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
