import { createBox, createText, createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#2cb9b0",
    secondary: "#0c0d34",
    text: "rgba(12, 13, 52, 0.7)",
    grey: "rgba(12, 13, 52, 0.05)",
    white: "white",
    "slide.grey": "#f4f0ef",
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
  borderRadii: {
    none: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProDisplay-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "secondary",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProDisplay-Medium",
      color: "secondary",
    },
  },
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
