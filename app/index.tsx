// temporary screen for testing UI components — not a final screen
import { useState } from "react";
import { View, StyleSheet, useColorScheme, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function Index() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [acerca, setAcerca] = useState("");

  return (
    <SafeAreaView edges={["top"]} style={[styles.wrapper, isDark && styles.wrapperDark]}>
      <Header />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
        {/* Half width row */}
        <View style={styles.row}>
          <Input
            style={styles.flex}
            placeholder="Nombre"
            value={nombre}
            onChangeText={setNombre}
          />
          <Input
            style={styles.flex}
            placeholder="Apellidos"
            value={apellidos}
            onChangeText={setApellidos}
          />
        </View>

        {/* Full width */}
        <Input
          placeholder="Número de teléfono"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
        />
        <Input
          placeholder="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />

        {/* Multiline */}
        <Input
          placeholder="Acerca de mí"
          value={acerca}
          onChangeText={setAcerca}
          multiline
        />

        {/* Buttons */}
        <View style={styles.rowSpaced}>
          <Button title="Descartar" onPress={() => {}} variant="outline" />
          <Button title="Confirmar" onPress={() => {}} />
        </View>
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapperDark: {
    backgroundColor: "#000",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 12,
  },
  scroll: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    gap: 8,
  },
  rowSpaced: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flex: {
    flex: 1,
  },
});