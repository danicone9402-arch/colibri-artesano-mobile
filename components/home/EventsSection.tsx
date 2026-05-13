import { View, Text, Image, StyleSheet, useColorScheme } from "react-native";
import { s, vs, ms } from "@/utils/scale";

const PLACEHOLDER_TEXT =
  "Conoce los próximos eventos en los que participaremos. Ferias, exposiciones y encuentros culturales donde podrás ver de cerca el trabajo de nuestros artesanos, conectar con su historia y llevarte una pieza única a casa. ¡No te los pierdas!";

export default function EventsSection() {
  const isDark = useColorScheme() === "dark";

  return (
    // background color switches between light and dark tokens
    <View style={[styles.section, isDark ? styles.sectionDark : styles.sectionLight]}>
      <Text style={[styles.title, isDark && styles.textDark]}>Próximos eventos</Text>

      {/* image on the left, description text filling the remaining space */}
      <View style={styles.card}>
        <Image
          source={require("@/assets/home/Evento.png")}
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
    backgroundColor: "#ACD4CD",
  },
  sectionDark: {
    backgroundColor: "#4E7C74",
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
