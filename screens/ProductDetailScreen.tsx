import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import Button from "@/components/ui/Button";
import { Colors } from "@/constants/theme";
import { getProductById, Product } from "@/services/products";
import { getProductImage } from "@/utils/productImages";
import { ms, s, vs } from "@/utils/scale";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const isDark = useColorScheme() === "dark";
  const colors = isDark ? Colors.dark : Colors.light;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    getProductById(Number(id))
      .then(setProduct)
      .catch(() => setError("No se pudo cargar el producto."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={["top"]}>
        <NavBar isDark={isDark} onBack={() => router.back()} />
        <ThemedView style={styles.center}>
          <ActivityIndicator size="large" color={isDark ? "#82A8AC" : "#3E5F63"} />
        </ThemedView>
      </SafeAreaView>
    );
  }

  if (error || !product) {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={["top"]}>
        <NavBar isDark={isDark} onBack={() => router.back()} />
        <ThemedView style={styles.center}>
          <ThemedText type="default" style={styles.errorText}>
            {error ?? "Producto no encontrado."}
          </ThemedText>
          <TouchableOpacity style={styles.retryBtn} onPress={() => router.back()}>
            <ThemedText type="defaultSemiBold" style={styles.retryText}>Volver</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={["top"]}>
      <NavBar isDark={isDark} onBack={() => router.back()} />

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {/* Imagen principal — cuando el backend soporte múltiples imágenes
            se puede reemplazar por una FlatList horizontal con dots */}
        <Image
          source={getProductImage(product.image_url)}
          style={styles.mainImage}
          resizeMode="cover"
        />

        {/* Info */}
        <ThemedView style={styles.content}>
          <ThemedText type="title" style={styles.name}>
            {product.name}
          </ThemedText>

          {product.price != null && (
            <ThemedText type="defaultSemiBold" style={styles.price}>
              ₡{product.price.toLocaleString("es-CR")}
            </ThemedText>
          )}

          <ThemedView style={styles.section}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
              Descripción:
            </ThemedText>
            <ThemedText type="default" style={styles.body}>
              {product.description}
            </ThemedText>
          </ThemedView>

        </ThemedView>
      </ScrollView>

      {/* Botón sticky */}
      <ThemedView
        style={[styles.bottomBar, isDark ? styles.bottomBarDark : styles.bottomBarLight]}
      >
        <Button
          title="Agregar al carrito"
          onPress={() => {
            // TODO: conectar con carrito
          }}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

// ─── NavBar ───────────────────────────────────────────────────────────────────
function NavBar({ isDark, onBack }: { isDark: boolean; onBack: () => void }) {
  const colors = isDark ? Colors.dark : Colors.light;
  return (
    <View
      style={[
        styles.navBar,
        { backgroundColor: colors.background, borderBottomColor: isDark ? "#222" : "#E5E5E5" },
      ]}
    >
      <TouchableOpacity onPress={onBack} hitSlop={8}>
        <MaterialIcons name="chevron-left" size={ms(28)} color={colors.text} />
      </TouchableOpacity>
      <View style={styles.breadcrumb}>
        <ThemedText type="default" style={styles.breadcrumbItem}>Productos</ThemedText>
        <ThemedText type="default" style={styles.breadcrumbSep}>{" | "}</ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.breadcrumbActive}>
          Detalles de producto
        </ThemedText>
      </View>
      <MaterialIcons name="more-horiz" size={ms(24)} color={colors.icon} />
    </View>
  );
}

// ─── Estilos ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: { flex: 1 },

  navBar: {
    height: vs(52),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: s(12),
    borderBottomWidth: 1,
    gap: s(8),
  },
  breadcrumb: { flex: 1, flexDirection: "row", alignItems: "center" },
  breadcrumbItem:   { fontSize: ms(13), opacity: 0.6 },
  breadcrumbSep:    { fontSize: ms(13), opacity: 0.4, marginHorizontal: s(2) },
  breadcrumbActive: { fontSize: ms(13) },

  mainImage: {
    width: "100%",
    height: vs(260),
  },

  content: {
    padding: s(16),
    gap: vs(12),
    paddingBottom: vs(110),
    backgroundColor: "transparent",
  },
  name:         { lineHeight: ms(38) },
  price:        { fontSize: ms(18), color: "#3E5F63" },
  section:      { gap: vs(4), backgroundColor: "transparent" },
  sectionTitle: { fontSize: ms(16) },
  body:         { opacity: 0.75, lineHeight: ms(22) },

  bottomBar: {
    position: "absolute",
    bottom: 0, left: 0, right: 0,
    padding: s(16),
    paddingBottom: vs(28),
    alignItems: "center",
    borderTopWidth: 1,
  },
  bottomBarLight: { borderTopColor: "#E5E5E5" },
  bottomBarDark:  { borderTopColor: "#222" },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: vs(12),
    padding: s(24),
    backgroundColor: "transparent",
  },
  errorText: { textAlign: "center", opacity: 0.8 },
  retryBtn: {
    backgroundColor: "#82A8AC",
    paddingHorizontal: s(24),
    paddingVertical: vs(10),
    borderRadius: ms(20),
  },
  retryText: { color: "#fff", fontSize: ms(14) },
});
