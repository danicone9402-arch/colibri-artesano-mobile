import { View, Text, Image, ScrollView, StyleSheet, useColorScheme } from "react-native";
import { s, vs, ms } from "@/utils/scale";

// static list — will be replaced with API data later
const CATEGORIES = [
  { id: "1", label: "Cerámica", image: require("@/assets/home/Ceramica.png") },
  { id: "2", label: "Téxtiles", image: require("@/assets/home/Textiles.png") },
  { id: "3", label: "Pinturas", image: require("@/assets/home/Pinturas.png") },
];

export default function CategoriesSection() {
  const isDark = useColorScheme() === "dark";

  return (
    <View style={styles.section}>
      <Text style={[styles.title, isDark && styles.titleDark]}>Categorías</Text>

      {/* horizontal scroll in case more categories are added */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      >
        {CATEGORIES.map((cat) => (
          <View key={cat.id} style={styles.card}>
            <Image
              source={cat.image}
              style={[styles.image, isDark && styles.imageDark]}
              resizeMode="cover"
            />
            <Text style={[styles.label, isDark && styles.labelDark]}>{cat.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: vs(16),
    paddingHorizontal: s(16),
  },
  title: {
    fontSize: ms(15),
    fontWeight: "700",
    color: "#000",
    marginBottom: vs(12),
  },
  titleDark: {
    color: "#fff",
  },
  carousel: {
    // gap of 32 distributes the 3 images evenly across the screen width
    gap: s(32),
    paddingBottom: vs(4),
  },
  card: {
    alignItems: "center",
    gap: vs(6),
  },
  image: {
    width: s(98),
    height: vs(108),
    borderRadius: ms(15),
    // rgba instead of hex so we can control opacity (28% black from Figma spec)
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.28)",
  },
  imageDark: {
    // flipped to white at the same opacity so the border stays visible in dark mode
    borderColor: "rgba(255,255,255,0.28)",
  },
  label: {
    fontSize: ms(11),
    fontWeight: "600",
    color: "#000",
  },
  labelDark: {
    color: "#fff",
  },
});
