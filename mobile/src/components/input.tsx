import { colors } from "@/styles/colors";
import { TextInput, TextInputProps } from "react-native";
import { twMerge } from "tailwind-merge";

export function Input({ className, ...rest }: TextInputProps) {
  return (
    <TextInput
      className={twMerge("bg-GRAY-300 h-16 w-full rounded-md p-4", className)}
      style={{
        fontSize: 16,
      }}
      placeholderTextColor={colors.gray[600]}
      {...rest}
    />
  );
}
