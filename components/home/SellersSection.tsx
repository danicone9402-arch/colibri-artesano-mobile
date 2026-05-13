import { View, Text, Image, StyleSheet, useColorScheme } from "react-native";

const PLACEHOLDER_TEXT =
  "Conoce a los artesanos detrás de cada pieza. Con paciencia y destreza dan forma a la tradición y cultura local, creando objetos únicos que cuentan historias y llevan el alma de su pueblo.";

export default function SellersSection() {
  const isDark = useColorScheme() === "dark";

  return (
    <View style={[styles.section, isDark ? styles.sectionDark : styles.sectionLight]}>
      <Text style={[styles.title, isDark && styles.textDark]}>Nuestros vendedores</Text>
      <View style={styles.card}>
        <Image
            source={require("@/assets/home/Vendedor.png")}
            style={styles.image}
            resizeMode="cover"
          />
        <Text style={[styles.body, isDark && styles.textDark]}>{PLACEHOLDER_TEXT}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  sectionLight: {
    backgroundColor: "#FAE4E4",
  },
  sectionDark: {
    backgroundColor: "#3F1D23",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000",
  },
  textDark: {
    color: "#fff",
  },
  card: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  image: {
    width: 155,
    height: 148,
    borderRadius: 12,
    flexShrink: 0,
  },
  body: {
    flex: 1,
    fontSize: 11,
    color: "#000",
    fontStyle: "italic",
  },
});
