import { StyleSheet, Text, TouchableOpacity } from "react-native";

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
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "outline" && styles.outline,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.text,
          variant === "outline" && styles.outlineText,
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
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#82A8AC",
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
});