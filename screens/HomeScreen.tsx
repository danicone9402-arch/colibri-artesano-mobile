import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, useColorScheme } from "react-native";
import Header from "@/components/ui/Header";
import HeroBanner from "@/components/home/HeroBanner";
import CategoriesSection from "@/components/home/CategoriesSection";
import SellersSection from "@/components/home/SellersSection";
import EventsSection from "@/components/home/EventsSection";

export default function HomeScreen() {
  const isDark = useColorScheme() === "dark";

  return (
    <SafeAreaView edges={["top"]} style={[styles.wrapper, isDark && styles.wrapperDark]}>
      <Header />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HeroBanner />
        <CategoriesSection />
        <SellersSection />
        <EventsSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapperDark: {
    backgroundColor: "#000",
  },
  content: {
    paddingBottom: 24,
  },
});
