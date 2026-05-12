import { useState } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Index() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [acerca, setAcerca] = useState("");

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 12,
    backgroundColor: "#fff",
  },
  containerDark: {
    backgroundColor: "#1a1a1a",
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