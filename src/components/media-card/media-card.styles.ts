import { COLORS, FONTS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden", // to show the rounded corners hidden the image that overflows
    elevation: 2,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  thumbnailContainer: {
    width: 140,
    height: 110,
    position: "relative",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 15,
    textTransform: "uppercase",
    fontFamily: FONTS.primary,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    fontFamily: FONTS.secondary,
  },
  typeTag: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
    marginRight: 10,
  },
  typeText: {
    color: COLORS.textDark,
    fontSize: 12,
    fontWeight: "500",
  },
  duration: {
    fontSize: 12,
    color: COLORS.secondaryText,
  },
  genre: {
    fontSize: 12,
    color: COLORS.secondaryText,
  },
});
