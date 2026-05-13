// UI primitives from React Native
// MaterialIcons for the hamburger menu icon
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  onMenuPress?: () => void; // optional until hamburger menu is built
};

export default function Header({ onMenuPress }: Props) {
  // reads the phone's system light/dark setting
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    // no top padding here — the SafeAreaView edges={["top"]} wrapping this component handles the status bar offset
    <View style={[styles.container, isDark ? styles.containerDark : styles.containerLight]}>

      {/* placeholder for drawer navigation — not wired up yet */}
      <TouchableOpacity onPress={onMenuPress}>
        <MaterialIcons
          name="menu"
          size={28}
          color={isDark ? "#fff" : "#000"} // dark / light mode icon
        />
      </TouchableOpacity>

      {/* centered logo: bird image + app name stacked vertically */}
      <View style={styles.brand}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View>
          <Text style={[styles.title, isDark ? styles.textDark : styles.textLight]}>
            El Colibrí
          </Text>
          <Text style={[styles.subtitle, isDark ? styles.textDark : styles.textLight]}>
            -Artesano-
          </Text>
        </View>
      </View>

      {/* matches hamburger width so the brand stays visually centered */}
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  containerLight: {
    backgroundColor: "#fff",
  },
  containerDark: {
    backgroundColor: "#000",
  },

  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logo: {
    height: 40,
    width: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 15,
  },
  textLight: {
    color: "#000",
  },
  textDark: {
    color: "#fff",
  },
  spacer: {
    width: 28, // matches hamburger width so the brand stays visually centered
  },
});
