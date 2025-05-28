import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.secondaryText,
  },
});