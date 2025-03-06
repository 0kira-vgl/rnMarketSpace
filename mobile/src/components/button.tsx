import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
} from "react-native";
import { twMerge } from "tailwind-merge";

function Button({ children, className, ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className={twMerge(
        "bg-BLUE-500 h-14 w-full flex-row items-center justify-center gap-2 rounded-md",
        className,
      )}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}
function Title({ children, className, ...rest }: TextProps) {
  return (
    <Text
      className={twMerge("text-GRAY-300 text-lg font-bold", className)}
      {...rest}
    >
      {children}
    </Text>
  );
}

Button.Title = Title;

export { Button };
