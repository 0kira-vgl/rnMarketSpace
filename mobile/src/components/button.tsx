import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
} from "react-native";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "h-14 w-full flex-row items-center justify-center gap-2 rounded-md",
  variants: {
    variant: {
      primary: "bg-BLUE-500",
      secondary: "bg-GRAY-500",
      third: "bg-GRAY-800",
    },
  },
});

const buttonText = tv({
  base: "text-lg font-bold",
  variants: {
    variant: {
      primary: "text-GRAY-300",
      secondary: "text-GRAY-800",
      third: "text-GRAY-300",
    },
  },
});

// tipagem para as variantes
type ButtonProps = TouchableOpacityProps & VariantProps<typeof button>;
type TitleProps = TextProps & VariantProps<typeof buttonText>;

function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className={twMerge(button({ variant }), className)}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

function Title({
  children,
  variant = "primary",
  className,
  ...rest
}: TitleProps) {
  return (
    <Text className={twMerge(buttonText({ variant }), className)} {...rest}>
      {children}
    </Text>
  );
}

Button.Title = Title;

export { Button };
