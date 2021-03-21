import { BaseTheme, createText, createTheme } from "@shopify/restyle";

const theme = createTheme<BaseTheme>({
  colors: {
    primary: "#2cb9b0",
    title: "#0c0d34",
    text: "rgba(12, 13, 52, 0.7)",
    lightText: "rgba(12, 13, 52, 0.05)",
    white: "white",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    hero: {
      fontSize: 60,
      lineHeight: 60,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-Semibold",
      color: "title",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-Semibold",
      color: "title",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "text",
    },
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;
