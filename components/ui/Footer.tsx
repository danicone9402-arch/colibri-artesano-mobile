import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// useSafeAreaInsets gives the home indicator height so the footer doesn't overlap it
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Footer() {
  // reads the phone's system light/dark setting
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  // insets.bottom = height of the home indicator
  const insets = useSafeAreaInsets();

  return (
    // paddingBottom uses insets.bottom so the content sits above the home indicator
    <View style={[styles.container, isDark ? styles.containerDark : styles.containerLight, { paddingBottom: insets.bottom }]}>
      <Text style={[styles.title, isDark ? styles.titleDark : styles.titleLight]}>
        Cuenta
      </Text>

      {/* 2-column grid — each item takes 50% of the row */}
      <View style={styles.grid}>
        {[
          { icon: "inventory-2" as const, label: "Mis pedidos" },
          { icon: "cancel" as const, label: "Eliminar cuenta" },
          { icon: "translate" as const, label: "Idioma" },
          { icon: "lock" as const, label: "Cambiar contraseña" },
          { icon: "person" as const, label: "Datos personales" },
          { icon: "logout" as const, label: "Cerrar sesión" },
        ].map((item, index) => (
          // onPress is empty for now — wired up when screens are built
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => {}}
          >
            <MaterialIcons name={item.icon} size={20} color={isDark ? "#fff" : "#000"} />
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
    backgroundColor: "#D9D9D9",
  },
  containerDark: {
    backgroundColor: "#3F1D23",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  titleLight: {
    color: "#000",
  },
  titleDark: {
    color: "#fff",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "50%", // two items per row
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
  },

  label: {
    fontSize: 14,
  },
  labelLight: {
    color: "#000",
  },
  labelDark: {
    color: "#fff",
  },
});
