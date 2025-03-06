import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <TouchableOpacity onPress={() => router.navigate("/auth")}>
        <Text className="text-3xl font-black text-zinc-900">Market Space</Text>
      </TouchableOpacity>
    </View>
  );
}
