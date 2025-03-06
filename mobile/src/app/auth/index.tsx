import { View, Text, Image } from "react-native";
import LogoImg from "@/assets/logo/logo.png";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Auth() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="items-center">
        <Image source={LogoImg} className="h-16 w-24" />
        <Text className="text-GRAY-900 pb-0.5 pt-4 text-4xl font-semibold">
          marketspace
        </Text>
        <Text className="text-GRAY-700 text-sm">
          Seu espaço de compra e venda
        </Text>
      </View>

      <View className="items-center pt-10">
        <Text className="text-GRAY-800 pt-10 text-sm font-medium">
          Acesse sua conta
        </Text>

        <Input className="mb-5" />
        <Input />

        <Button>
          <Button.Title>Entrar</Button.Title>
        </Button>
      </View>
    </View>
  );
}
