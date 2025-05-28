import React from "react";
import { FlatList, View, Text } from "react-native";
import { useMediaStore } from "@/store";
import { MediaCard } from "../media-card";
import { styles } from "./media-list.style";

export const MediaList = () => {
  const playlist = useMediaStore((state) => state.playlist);

  if (playlist.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No media available</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={playlist}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => <MediaCard item={item} />}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};
