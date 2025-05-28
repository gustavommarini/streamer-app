import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist, devtools } from "zustand/middleware";
import { Media } from "@/types/media";
import { mediaMockData } from "@/mocks/mediaMockData";

interface MediaState {
  playlist: Media[];
  currentTrack: Media | null;
  isPlaying: boolean;
  currentTime: number;
  // ACTIONS
  setCurrentTrack: (track: Media) => void;
  setCurrentTime: (time: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  togglePlayPause: () => void;
}

export const useMediaStore = create<MediaState>()(
  devtools(
    persist(
      (set) => ({
        playlist: mediaMockData,
        currentTrack: null,
        isPlaying: false,
        currentTime: 0,

        setCurrentTrack: (track) =>
          set({
            currentTrack: track,
            isPlaying: true,
            currentTime: 0,
          }),

        setCurrentTime: (time) =>
          set({
            currentTime: time,
          }),

        setIsPlaying: (isPlaying) =>
          set({
            isPlaying,
          }),

        togglePlayPause: () =>
          set((state) => ({
            isPlaying: !state.isPlaying,
          })),
      }),
      {
        name: "media-storage",
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
);
