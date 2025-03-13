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

      <View>
        <Text className="pb-0.5 pt-4 text-4xl font-semibold text-GRAY-900">
          marketspace
        </Text>
        <Text className="text-sm text-GRAY-700">
          Seu espaço de compra e venda
        </Text>
      </View>

      <Text className="pb-5 pt-20 text-sm font-medium text-GRAY-800">
        Acesse sua conta
      </Text>

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

      <Button>
        <Button.Title>Entrar</Button.Title>
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

      <View
        style={{
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        }}
        className="w-full items-center rounded-full"
      >
        <Text className="mb-5 text-sm text-GRAY-700">
          Ainda não tem acesso?
        </Text>

        <Button variant="secondary" onPress={() => router.navigate("/signUp")}>
          <Button.Title variant="secondary">Criar uma conta</Button.Title>
        </Button>
      </View>
    </View>
  );
}
