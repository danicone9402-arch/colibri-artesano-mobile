import { View, StyleSheet, useColorScheme } from "react-native";
import Button from "@/components/ui/Button";

export default function Index() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <Button
        title="Confirmar"
        onPress={() => alert(`Confirmado! (${isDark ? "dark" : "light"})`)}
      />
      <Button
        title="Descartar"
        onPress={() => alert(`Descartado! (${isDark ? "dark" : "light"})`)}
        variant="outline"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#fff",
  },
  containerDark: {
    backgroundColor: "#1a1a1a",
  },
});