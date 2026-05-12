import { View, StyleSheet } from "react-native";
import Button from "@/components/ui/Button";

export default function Index() {
  return (
    <View style={styles.container}>
      <Button title="Confirmar" onPress={() => alert("Confirmado!")} />
      <Button title="Descartar" onPress={() => alert("Descartado!")} variant="outline" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});