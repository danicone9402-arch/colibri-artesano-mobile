import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Footer() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View style={[styles.container, isDark ? styles.containerDark : styles.containerLight]}>
      <Text style={[styles.title, isDark ? styles.titleDark : styles.titleLight]}>
        Cuenta
      </Text>

      <View style={styles.grid}>
        {[
          { icon: "inventory-2" as const, label: "Mis pedidos" },
          { icon: "cancel" as const, label: "Eliminar cuenta" },
          { icon: "translate" as const, label: "Idioma" },
          { icon: "lock" as const, label: "Cambiar contraseña" },
          { icon: "person" as const, label: "Datos personales" },
          { icon: "logout" as const, label: "Cerrar sesión" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => {}}
          >
            <MaterialIcons name={item.icon} size={20} color="#000" />
            <Text style={[styles.label, isDark ? styles.labelDark : styles.labelLight]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    gap: 12,
  },
  containerLight: {
    backgroundColor: "#D9D9D9", // light mode
  },
  containerDark: {
    backgroundColor: "#3F1D23", // dark mode
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  titleLight: {
    color: "#000", // light mode
  },
  titleDark: {
    color: "#fff", // dark mode
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
  },

  label: {
    fontSize: 14,
  },
  labelLight: {
    color: "#000", // light mode
  },
  labelDark: {
    color: "#fff", // dark mode
  },
});
