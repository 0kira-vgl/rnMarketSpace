import { View, Image, Text } from "react-native";
import { Button } from "./button";
import { Plus } from "lucide-react-native";
import { colors } from "@/styles/colors";
export function Header() {
  return (
    <View className="flex-row justify-between">
      <View className="flex-row items-center gap-2.5">
        <Image
          className="size-12 rounded-full border-2 border-BLUE-500"
          source={{ uri: "https://github.com/0kira-vgl.png" }}
        />
        <Text className="text-base text-GRAY-900">
          Boas vindas,{"\n"}
          <Text className="font-bold">Matheus!</Text>
        </Text>
      </View>

      <Button variant="third" className="w-fit px-4">
        <Plus size={32} color={colors.gray[400]} />
        <Button.Title variant="third">Criar anúncio</Button.Title>
      </Button>
    </View>
  );
}
