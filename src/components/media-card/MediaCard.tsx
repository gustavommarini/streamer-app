import React, { FC } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { formatDuration, getTypeColor } from "@/utils";
import { useMediaStore } from "@/store/mediaStore";
import { styles } from "./media-card.styles";
import { MediaCardProps } from "./media-card.types";

export const MediaCard: FC<MediaCardProps> = ({ item }) => {
  const router = useRouter();
  const setCurrentTrack = useMediaStore((state) => state.setCurrentTrack);

  const handlePress = () => {
    setCurrentTrack(item);
    router.push({ pathname: "/player", params: { from: "click_list" } });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.thumbnailContainer}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.thumbnail}
          resizeMode="cover"
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>

        <View style={styles.detailsContainer}>
          <View
            style={[
              styles.typeTag,
              { backgroundColor: getTypeColor(item.type) },
            ]}
          >
            <Text style={styles.typeText}>{item.type}</Text>
          </View>

          <Text style={styles.duration}>{formatDuration(item.duration)}</Text>
        </View>

        <Text style={styles.genre}>
          {item.genre} - {item.year}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
