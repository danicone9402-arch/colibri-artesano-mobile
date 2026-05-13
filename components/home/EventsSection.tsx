import { View, Text, Image, StyleSheet, useColorScheme } from "react-native";

const PLACEHOLDER_TEXT =
  "Conoce los próximos eventos en los que participaremos. Ferias, exposiciones y encuentros culturales donde podrás ver de cerca el trabajo de nuestros artesanos, conectar con su historia y llevarte una pieza única a casa. ¡No te los pierdas!";

export default function EventsSection() {
  const isDark = useColorScheme() === "dark";

  return (
    <View style={[styles.section, isDark ? styles.sectionDark : styles.sectionLight]}>
      <Text style={[styles.title, isDark && styles.textDark]}>Próximos eventos</Text>
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
    backgroundColor: "#ACD4CD",
  },
  sectionDark: {
    backgroundColor: "#4E7C74",
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
