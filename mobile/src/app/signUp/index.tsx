import { View, Text, Image } from "react-native";
import LogoImg from "@/assets/logo/logo.png";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { colors } from "@/styles/colors";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center px-12">
      <Image source={LogoImg} className="h-16 w-24" />

      <View className="items-center">
        <Text className="pb-0.5 pt-4 text-xl font-semibold text-GRAY-900">
          Boas vindas!
        </Text>
        <Text className="text-center text-sm text-GRAY-700">
          Crie sua conta e use o espaço para comprar itens variados e vender
          seus produtos
        </Text>
      </View>

      <Input className="mb-5" placeholder="Nome" />

      <Input className="mb-5" placeholder="E-mail" keyboardType="phone-pad" />

      <Input
        className="mb-5"
        placeholder="E-mail"
        keyboardType="email-address"
      />

      <Input
        className="mb-10"
        placeholder="Senha"
        secureTextEntry // oculta oq é digitado
      />

      <Button variant="third">
        <Button.Title variant="third">Criar</Button.Title>
      </Button>

      <View
        style={{
          width: "100%",
          height: 1,
          marginTop: 60,
          marginBottom: 25,
          backgroundColor: colors.gray[500],
          borderRadius: 999,
        }}
      />

      <View className="w-full items-center rounded-full">
        <Text className="mb-5 text-sm text-GRAY-700">Já tem uma conta?</Text>

        <Button variant="secondary" onPress={() => router.back()}>
          <Button.Title variant="secondary">Ir para o login</Button.Title>
        </Button>
      </View>
    </View>
  );
}
