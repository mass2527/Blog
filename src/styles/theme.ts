import {
  blue,
  blueDark,
  crimson,
  crimsonDark,
  gray,
  grayDark,
  pink,
  pinkDark,
  red,
  redDark,
  slate,
  slateDark,
  teal,
  tealDark,
  violet,
  violetDark,
  yellow,
  yellowDark,
} from "@radix-ui/colors";

const black = {
  black1: "#fff",
  black12: "#000",
};

const blackDark = {
  black1: "#000",
  black12: "#fff",
};

const sizes = {
  maxWidth: "776px",
  headerHeight: "64px",
};

const spacers = {
  4: "4px",
  8: "8px",
  16: "16px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
} as const;

const radiuses = {
  2: "2px",
  4: "4px",
  6: "6px",
  8: "8px",
  12: "12px",
  "50%": "50%",
} as const;

export const fontWeights = {
  400: 400,
  500: 500,
  700: 700,
} as const;

export const fontSizes = {
  14: "14px",
  16: "16px",
  20: "20px",
  24: "24px",
  32: "32px",
  64: "64px",
} as const;

const commonTheme = {
  spacers,
  radiuses,
  fontWeights,
  fontSizes,
  sizes,
} as const;

export const lightTheme = {
  ...commonTheme,
  colors: {
    ...crimson,
    ...gray,
    ...red,
    ...teal,
    ...yellow,
    ...blue,
    ...black,
    ...pink,
    ...violet,
    ...slate,
  },
} as const;

export const darkTheme = {
  ...commonTheme,
  colors: {
    ...crimsonDark,
    ...grayDark,
    ...redDark,
    ...tealDark,
    ...yellowDark,
    ...blueDark,
    ...blackDark,
    ...pinkDark,
    ...violetDark,
    ...slateDark,
  },
} as const;

export type Color =
  | keyof typeof lightTheme.colors
  | keyof typeof darkTheme.colors;
