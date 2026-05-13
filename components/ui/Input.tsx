import {
  View,
  Text,
  TextInput,
  StyleSheet,
  useColorScheme,
  KeyboardTypeOptions,
  ViewStyle,
} from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  error?: string;
  disabled?: boolean;
  style?: ViewStyle;
};

export default function Input({
  value,
  onChangeText,
  placeholder,
  label,
  secureTextEntry,
  keyboardType,
  multiline,
  error,
  disabled,
  style,
}: Props) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text style={[styles.label, isDark && styles.labelDark]}>{label}</Text>
      )}
      <TextInput
        style={[
          styles.input,
          isDark ? styles.inputDark : styles.inputLight, // dark / light mode background
          multiline && styles.multiline,
          disabled && styles.disabled,
          error ? styles.inputError : null,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={
          isDark
            ? "rgba(255,255,255,0.4)" // dark mode placeholder
            : "rgba(0,0,0,0.4)"       // light mode placeholder
        }
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        editable={!disabled}
        textAlignVertical={multiline ? "top" : "center"}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000", // light mode label
  },
  labelDark: {
    color: "#fff", // dark mode label
  },

  input: {
    height: 44,
    borderRadius: 15,
    paddingHorizontal: 14,
    fontSize: 15,
  },
  inputLight: {
    backgroundColor: "rgba(130,168,172,0.7)", // light mode
    color: "#000",
  },
  inputDark: {
    backgroundColor: "rgba(63,29,35,0.6)", // dark mode
    color: "#fff",
  },

  multiline: {
    height: 100,
    paddingTop: 12,
  },
  disabled: {
    opacity: 0.5,
  },
  inputError: {
    borderWidth: 1.5,
    borderColor: "#EF4444",
  },
  errorText: {
    fontSize: 12,
    color: "#EF4444",
  },
});
