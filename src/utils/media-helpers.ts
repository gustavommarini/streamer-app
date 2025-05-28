import { COLORS } from "@/constants";
import { Media } from "@/types/media";

export const getTypeColor = (type: Media["type"]) => {
  // to get the different colores depending on the type of media file
  switch (type) {
    case "movie":
      return COLORS.primary;
    case "documentary":
      return COLORS.secondary;
    case "live":
      return COLORS.error;
    default:
      return COLORS.secondaryText;
  }
};

export const formatDuration = (seconds: number): string => {
  // Format in a legible way the duration in seconds
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};
