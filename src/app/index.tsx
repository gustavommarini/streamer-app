import { MediaList } from "@/components";
import { COLORS, FONTS } from "@/constants";
import { View, Text, StyleSheet } from "react-native";

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.headerTitle}>Scopri</Text>
        <Text style={styles.headerSubtitle}>
          Trova il tuo prossimo film o podcast preferito
        </Text>
      </View>
      <MediaList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerText: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 5,
    fontFamily: FONTS.primary,
    textTransform: "uppercase",
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.secondaryText,
    fontFamily: FONTS.secondary,
    marginBottom: 15,
  },
});

export default IndexScreen;
