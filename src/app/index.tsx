import { MediaList } from "@/components";
import { View, Text } from "react-native";

export default function IndexScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <Text style={{ textAlign: "center" }}>
        Open up <Text style={{ fontWeight: "bold" }}>app/index.tsx</Text> to
        start working on your app!
      </Text>
      <MediaList />
    </View>
  );
}
