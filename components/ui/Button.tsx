import { TouchableOpacity, Text, StyleSheet, useColorScheme } from "react-native";

type Variant = "primary" | "outline";

type Props = {
  title: string;
  onPress: () => void;
  variant?: Variant;
  disabled?: boolean;
};

export default function Button({
  title,
  onPress,
  variant = "primary",
  disabled,
}: Props) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isDark && styles.buttonDark,
        variant === "outline" && styles.outline,
        variant === "outline" && isDark && styles.outlineDark,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.text,
          variant === "outline" && !isDark && styles.outlineText,
          isDark && variant === "primary" && styles.primaryDarkText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#82A8AC",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    minWidth: 141,
  },
  buttonDark: {
    backgroundColor: "#3E5F63",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#82A8AC",
  },
  outlineDark: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#3E5F63",
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "600",
  },
  outlineText: {
    color: "#82A8AC",
  },
  primaryDarkText: {
    color: "#000",
  },
});