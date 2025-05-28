import { COLORS, FONTS } from "@/constants";
import React, { useCallback } from "react";
import { View, Text, StyleSheet, Linking, Alert, Button } from "react-native";

interface OpenURLButtonProps {
  url: string;
  children: string;
}

const OpenURLButton = ({ url, children }: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const Credits = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerTitle}>
          Gustavo <Text style={styles.headerSubtitle}>Marini</Text>
        </Text>
        <Text style={styles.descriptionText}>
          FrontEnd Dev and amateur designer :)
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.bodyText}>
          Sono uno sviluppatore freelance con base a Salerno. Realizzo
          applicazioni web funzionali, rapide e accessibili, con un tocco
          estetico semplice e orientato all’usabilità.
        </Text>
        <OpenURLButton url={"https://gmm-portfolio.netlify.app/"}>
          Curriculum Online
        </OpenURLButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  textContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
    textTransform: "uppercase",
    fontFamily: FONTS.primary,
  },
  headerSubtitle: {
    color: COLORS.primary,
    fontFamily: FONTS.primary,
    textTransform: "uppercase",
  },
  descriptionText: {
    fontSize: 11,
    color: COLORS.text,
    fontFamily: FONTS.secondary,
    textTransform: "uppercase",
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 16,
    color: COLORS.text,
    fontFamily: FONTS.secondary,
    marginBottom: 20,
  },
});

export default Credits;
