import { Image, StyleSheet, useWindowDimensions } from "react-native";

export default function HeroBanner() {
  const { width } = useWindowDimensions();

  return (
    <Image
      source={require("@/assets/images/banner.png")}
      style={[styles.banner, { width }]}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 200,
  },
});
