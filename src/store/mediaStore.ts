import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from "zustand"
import { createJSONStorage, persist, devtools } from 'zustand/middleware'
import { Media } from "@/types/media";
import { mediaMockData } from "@/mocks/mediaMockData";


interface MediaState {
  playlist: Media[];
}

export const useMediaStore = create<MediaState>()(devtools(
  persist(
    (set) => ({
      playlist: mediaMockData,
    }),
    {
      name: "media-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  ))
)