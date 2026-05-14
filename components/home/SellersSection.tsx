import { View, Text, Image, StyleSheet, useColorScheme } from "react-native";
import { s, vs, ms } from "@/utils/scale";

// placeholder — will be replaced with real seller data from the API
const PLACEHOLDER_TEXT =
  "Los productos que distribuimos son más que solo objetos decorativos, son el reflejo de las manos que los crean. Conoce a los artesanos que, con paciencia y destreza, dan forma a la tradición y cultura local. Como don Juan, quien lleva más de 30 años trabajando la cerámica en su pequeño taller, creando piezas que cuentan historias de su pueblo.";

export default function SellersSection() {
  const isDark = useColorScheme() === "dark";

  return (
    // background color switches between light and dark tokens
    <View style={[styles.section, isDark ? styles.sectionDark : styles.sectionLight]}>
      <Text style={[styles.title, isDark && styles.textDark]}>Nuestros vendedores</Text>

      {/* image on the left, description text filling the remaining space */}
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
    marginVertical: vs(8),
    paddingVertical: vs(16),
    paddingHorizontal: s(16),
    gap: vs(12),
    // shadow works on iOS with these four props; elevation covers Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: vs(4) },
    shadowOpacity: 0.12,
    shadowRadius: ms(6),
    elevation: 4,
  },
  sectionLight: {
    backgroundColor: "#FAE4E4",
  },
  sectionDark: {
    backgroundColor: "#3F1D23",
  },
  title: {
    fontSize: ms(15),
    fontWeight: "700",
    color: "#000",
  },
  textDark: {
    color: "#fff",
  },
  card: {
    flexDirection: "row",
    gap: s(12),
    alignItems: "flex-start",
  },
  image: {
    width: s(155),
    height: vs(148),
    borderRadius: ms(12),
    // prevents the image from shrinking when the text beside it is long
    flexShrink: 0,
  },
  body: {
    flex: 1,
    fontSize: ms(11),
    color: "#000",
    fontStyle: "italic",
  },
});
