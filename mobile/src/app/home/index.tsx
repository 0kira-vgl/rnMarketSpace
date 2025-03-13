import { View, Text } from "react-native";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <View className="flex-1 justify-center px-12">
      <Header />

      <Text>Seus produtos anunciados para venda </Text>
    </View>
  );
}
