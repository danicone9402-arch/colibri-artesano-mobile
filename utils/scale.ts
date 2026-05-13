import { Dimensions } from "react-native";

// matches the Figma canvas size so hardcoded values map 1:1 to design specs
const BASE_WIDTH = 393;
const BASE_HEIGHT = 852;

const { width, height } = Dimensions.get("window");

// horizontal scale — for widths, horizontal padding, gaps
export const s = (size: number) => (width / BASE_WIDTH) * size;

// vertical scale — for heights, vertical padding
export const vs = (size: number) => (height / BASE_HEIGHT) * size;

// moderate scale — for font sizes and border radii, scales less aggressively
export const ms = (size: number, factor = 0.5) =>
  size + (s(size) - size) * factor;
